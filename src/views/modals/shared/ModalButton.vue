<template>
  <button :class="$style.button">
    <slot />
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: { type: String, default: '200px' },
  },
})
</script>

<style lang="stylus" module>
.button {
  all: unset
  display: inline-block
  vertical-align: top
  font-size: 14px
  font-weight: 500
  padding: 9px 12px 8px
  border-radius: 3px
  text-align: center
  white-space: nowrap
  background-color: transparent
  text-transform: uppercase
  transition: background-color .15s ease
  color: $colors.primary
  cursor: pointer

  &:hover {
    background-color: alpha($colors.primary, 0.1)
  }
}
</style>
