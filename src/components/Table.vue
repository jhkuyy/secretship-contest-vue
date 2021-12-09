<template>
  <table :class="$style.root">
    <thead>
      <tr>
        <th
          v-for="item in columns"
          :key="item.id"
          :class="$style.th"
        >
          {{ item.name }}
        </th>
      </tr>
    </thead>

    <tr
      v-for="item in items"
      :key="item.key"
      :class="$style.tr"
    >
      <td
        v-for="column in columns"
        :key="column.id"
        :class="$style.td"
      >
        <slot
          :name="column.id"
          :value="item[column.id]"
        />
      </td>
    </tr>
  </table>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    columns: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="stylus" module>
.root {
  width: 100%
  table-layout: fixed
}

.th,
.td {
  font-size: 12px
  font-weight: 600
  -webkit-font-smoothing: antialiased
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden
  text-transform: uppercase
  padding: 7px 10px
  line-height: 15px
}

.tr:nth-child(even) {
  .td {
    // TODO: move to vars
    background-color: #f0f3f5;
  }
}

.td {
  height: 42px
}
</style>
