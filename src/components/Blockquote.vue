<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="stylus" module>
.root {
  padding: 5px 17px
  margin: 0 0 17px
  font-size: 15px
  border-left: 5px solid $colors.primary
  line-height: 1.6
}
</style>
