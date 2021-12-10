<template>
  <LoadingWrapper
    :loading="requestState === RequestState.LOADING"
    :error="requestState === RequestState.ERROR"
    @reload="fetchApps"
  >
    <h4 class="my-3">
      {{ t('page.app_details.wallet_title') }}
    </h4>

    <div class="d-flex align-items-center my-3">
      <AppBalance
        class="me-auto"
        :balance="balance"
      />

      <Button
        class="me-3"
        @click="onDeposit"
      >
        {{ t('page.app_details.deposit') }}
      </Button>
      <Button @click="onWithdrawal">
        {{ t('page.app_details.withdrawal') }}
      </Button>
    </div>

    <h4 class="mt-5 mb-3">
      {{ t('page.app_details.transactions_title') }}
    </h4>

    <Table
      :columns="columns"
      :items="items"
    >
      <template #date="{ value }">
        <DateChip :value="value" />
      </template>

      <template #amount="{ value }">
        <div :class="value > 0 ? $style.amountPlus : $style.amountMinus">
          <CurrencyChip :value="value" />
        </div>
      </template>
    </Table>
  </LoadingWrapper>
</template>

<script>
import {
  computed, defineComponent, onMounted, ref,
} from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import {
  AppBalance,
  Button,
  CurrencyChip,
  DateChip,
  LoadingWrapper,
  Table,
} from '../../../components'
import { useRequest } from '../../../composables'
import { apiClient } from '../../../core/services'
import { RequestState } from '../../../composables/useRequest'

export default defineComponent({
  components: {
    AppBalance,
    Button,
    CurrencyChip,
    DateChip,
    LoadingWrapper,
    Table,
  },

  setup() {
    const { t } = useI18n()
    const balance = ref(0)
    const route = useRoute()
    const apps = ref([])

    const app = computed(() => apps.value.find(({ id }) => id === Number(route.params.id)))

    const [fetchApps, requestState] = useRequest(async () => {
      apps.value = await apiClient.fetchApps()
      balance.value = app.value.balance
    })

    const onDeposit = () => {
      balance.value += Math.round(Math.random() + 5)
      apiClient.editApp({
        ...app.value,
        balance: balance.value,
      })
    }

    const onWithdrawal = () => {
      balance.value -= Math.round(Math.random() + 5)
      apiClient.editApp({
        ...app.value,
        balance: balance.value,
      })
    }

    const columns = [
      { id: 'date', name: t('page.app_details.transactions_table.column.date') },
      { id: 'address', name: t('page.app_details.transactions_table.column.address') },
      { id: 'amount', name: t('page.app_details.transactions_table.column.amount') },
    ]

    const items = [
      {
        date: new Date().setHours(1),
        address: (Math.random() * 100000000).toString(16),
        amount: 199,
      },
      {
        date: new Date().setHours(2),
        address: (Math.random() * 100000000).toString(16),
        amount: -234,
      },
      {
        date: new Date().setHours(3),
        address: (Math.random() * 100000000).toString(16),
        amount: 555,
      },
      {
        date: new Date().setHours(4),
        address: (Math.random() * 100000000).toString(16),
        amount: 2131,
      },
      {
        date: new Date().setHours(5),
        address: (Math.random() * 100000000).toString(16),
        amount: -199,
      },
      {
        date: new Date().setHours(6),
        address: (Math.random() * 100000000).toString(16),
        amount: 444,
      },
    ]

    onMounted(fetchApps)

    return {
      balance,
      onDeposit,
      onWithdrawal,
      columns,
      items,
      t,
      fetchApps,
      requestState,
      RequestState,
    }
  },
})
</script>

<style lang="stylus" module>
.amountPlus {
  color: #418741
}

.amountMinus {
  color: #a31f1f
}
</style>
