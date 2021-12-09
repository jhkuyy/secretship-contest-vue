<template>
  <div class="container mt-3">
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
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  Button,
  CurrencyChip,
  DateChip,
  Table,
} from '../../components'
import { Route } from '../../lib'

export default defineComponent({
  components: {
    Button,
    CurrencyChip,
    DateChip,
    Table,
  },

  setup() {
    const { t } = useI18n()

    const columns = [
      { id: 'link', name: t('page.app_details.apps_table.column.name'), sortable: true },
      { id: 'balance', name: t('page.app_details.apps_table.column.balance'), sortable: false },
      { id: 'createdAt', name: t('page.app_details.apps_table.column.created_at'), sortable: true },
    ]

    const items = [
      { link: { name: 'name1', route: { name: Route.APP_DETAILS_WALLET, params: { id: 1 } } }, balance: 100, createdAt: new Date().getTime() },
      { link: { name: 'name2', route: { name: Route.APP_DETAILS_WALLET, params: { id: 1 } } }, balance: 200, createdAt: new Date().getTime() },
      { link: { name: 'name3', route: { name: Route.APP_DETAILS_WALLET, params: { id: 1 } } }, balance: 300, createdAt: new Date().getTime() },
    ]

    return {
      Route,
      t,
      columns,
      items,
    }
  },
})
</script>
