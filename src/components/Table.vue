<template>
  <table :class="$style.root">
    <thead>
      <tr>
        <th
          v-for="item in columns"
          :key="item.id"
          :class="[
            $style.th,
            item.sortable && $style.sortable,
            item.id === sortedColumn?.id && $style.sorted,
            item.id === sortedColumn?.id && $style[sortDirection]
          ]"
          @click="onSort(item)"
        >
          {{ item.name }}

          <span
            v-if="item.sortable"
            :class="$style.sort"
          />
        </th>
      </tr>
    </thead>

    <tr
      v-for="item in sortedItems"
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
        >
          {{ item[column.id] }}
        </slot>
      </td>
    </tr>
  </table>
</template>

<script>
import { defineComponent } from 'vue'

const SortDirection = Object.freeze({
  ASC: 'asc',
  DESC: 'desc',
})

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
    searchFunction: {
      type: Function,
      default: null,
    },
  },

  data: () => ({
    sortedColumn: null,
    sortDirection: SortDirection.ASC,
  }),

  computed: {
    filteredItems() {
      return this.searchFunction
        ? this.items.filter(this.searchFunction)
        : this.items
    },

    sortedItems() {
      if (!this.sortedColumn) {
        return this.filteredItems
      }

      const result = [...this.filteredItems].sort(this.sortedColumn.sort)

      return this.sortDirection === SortDirection.DESC
        ? result.reverse()
        : result
    },
  },

  methods: {
    onSort(item) {
      if (!item.sortable) {
        return
      }

      if (item.id === this.sortedColumn?.id) {
        this.sortDirection = this.sortDirection === SortDirection.ASC
          ? SortDirection.DESC
          : SortDirection.ASC

        return
      }

      this.sortedColumn = item
      this.sortDirection = SortDirection.ASC
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
    background-color: $colors.gray100
  }
}

.th {
  user-select: none
}

.td {
  height: 42px
}

.sort {
  position: relative
  display: inline-block
  width: 8px
  height: 11px
  margin: 1px 0 2px 5px
  vertical-align: top

  &::before,
  &::after {
    position: absolute
    border: 4px solid transparent
    transition: transform .15s ease
    left: 0
    content: ''
  }

  &::before {
    border-top-width: 0
    border-bottom-color: #999
    transform-origin: top center
    top: 0
  }

  &::after {
    border-bottom-width: 0
    border-top-color: #999
    transform-origin: bottom center
    top: 7px
  }
}

.sortable {
  cursor: pointer

  &.sorted {
    &.asc {
      .sort {
        &::after {
          transform: scale(1.25) translateY(-2px)
        }

        &::before {
          transform: scale(0)
        }
      }
    }

    &.desc {
      .sort {
        &::after {
          transform: scale(0)
        }

        &::before {
          transform: scale(1.25) translateY(2px)
        }
      }
    }
  }
}
</style>
