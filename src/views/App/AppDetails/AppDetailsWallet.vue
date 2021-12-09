<template>
  <h1>App wallet</h1>

  <h2 class="mb-3">
    {{ t('page.app_details.transactions_title') }}
  </h2>

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
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { CurrencyChip, DateChip, Table } from '../../../components'

export default defineComponent({
  components: {
    CurrencyChip,
    DateChip,
    Table,
  },

  setup() {
    const { t } = useI18n()

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

    return { columns, items, t }
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
