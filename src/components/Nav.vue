<template>
  <ul :class="$style.root">
    <template
      v-for="(item, i) in items"
      :key="i"
    >
      <li :class="$style.item">
        <slot :item="item" />
      </li>
    </template>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="stylus" module>
.root {
  list-style-type: none
  padding: 0
  margin: 0
}

.item {
  display flex
  align-items center
  font-weight: 500
  line-height: 24px
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  font-size: 13px
  cursor: pointer

  &:hover {
    // TODO: move colors to variables
    background-color: #f4f4f4;
    color: #222;
  }
}
</style>
