<template>
  <div :class="$style.root">
    <div
      v-for="tab in items"
      :key="tab.name"
      :class="[$style.tab, active === tab && $style.active]"
      @click="$emit('change', tab)"
    >
      {{ tab.name }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    active: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      required: true,
    },
  },

  emits: ['change'],
})
</script>

<style lang="stylus" module>
.root {
  display: flex
}

.tab {
  font-size: 14px
  line-height: 16px
  font-weight: 500
  padding: 7px 15px
  transition: all .2s ease
  border-radius: 16px
  color: darken($colors.primary, 10%)
  cursor: pointer
  -webkit-font-smoothing: auto

  &:hover {
    background-color: lighten($colors.primary, 92%)
    text-decoration: none
  }

  &.active {
    background-color: $colors.primary
    color: $colors.white
  }

  &:not(:first-child) {
    margin-left: 4px
  }
}
</style>
