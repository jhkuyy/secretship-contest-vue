<template>
  <div class="container mt-3">
    <LoadingWrapper
      :loading="requestState === RequestState.LOADING"
      :error="requestState === RequestState.ERROR"
      @reload="fetchApps"
    >
      <template v-if="items.length > 0">
        <div class="d-flex mb-3">
          <div class="flex-grow-1">
            <input type="text">
          </div>
          <div class="ms-3">
            <Button :to="{ name: Route.APP_ADD }">
              {{ t('page.app_list.button_add') }}
            </Button>
          </div>
        </div>

        <Table
          :columns="columns"
          :items="items"
        >
          <template #link="{ value }">
            <router-link :to="value.route">
              {{ value.name }}
            </router-link>
          </template>
          <template #balance="{ value }">
            <CurrencyChip :value="value" />
          </template>
          <template #createdAt="{ value }">
            <DateChip :value="value" />
          </template>
        </Table>
      </template>

      <AppListEmpty v-else />
    </LoadingWrapper>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  ref,
} from 'vue'
import { useI18n } from 'vue-i18n'
import {
  AppListEmpty,
  Button,
  CurrencyChip,
  DateChip,
  LoadingWrapper,
  Table,
} from '../../components'
import { Route } from '../../lib'
import { useRequest } from '../../composables'
import { apiClient } from '../../core/services'
import { RequestState } from '../../composables/useRequest'

export default defineComponent({
  components: {
    AppListEmpty,
    LoadingWrapper,
    Button,
    CurrencyChip,
    DateChip,
    Table,
  },

  setup() {
    const { t } = useI18n()
    const apps = ref([])

    const [fetchApps, requestState] = useRequest(async () => {
      apps.value = await apiClient.fetchApps()
    })

    const columns = computed(() => ([
      {
        id: 'link',
        name: t('page.app_list.apps_table.column.name'),
        sortable: true,
        sort: (a, b) => a.link.name.localeCompare(b.link.name),
      },
      {
        id: 'balance',
        name: t('page.app_list.apps_table.column.balance'),
        sortable: false,
      },
      {
        id: 'createdAt',
        name: t('page.app_list.apps_table.column.created_at'),
        sortable: true,
        sort: (a, b) => a > b,
      },
    ]))

    const items = computed(() => apps.value.map((app) => ({
      link: {
        name: app.name,
        route: { name: Route.APP_DETAILS_WALLET, params: { id: app.id } },
      },
      balance: app.balance,
      createdAt: app.createdAt,
    })))

    onMounted(fetchApps)

    return {
      Route,
      t,
      columns,
      items,
      RequestState,
      requestState,
      fetchApps,
    }
  },
})
</script>
