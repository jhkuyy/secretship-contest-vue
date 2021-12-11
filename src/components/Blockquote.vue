<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <slot name="header" />
    </div>

    <p :class="$style.content">
      <slot />
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="stylus" module>
.root {
  padding: 0px 15px
  margin: 0 0 17px
  font-size: 15px
  line-height: 1.6
  position: relative
  -webkit-font-smoothing: auto

  &::before {
    content: ''
    position: absolute
    left: 0
    top: 0
    bottom: 0
    width: 2px
    background-color: #0f9ae4
    border-radius: 1px
    box-shadow: 0 0 0 0.5px #0f9ae4
  }
}

.header {
  color: $colors.primary
  font-weight: 500
  padding-bottom: 4px
  line-height: 18px
}

.content {
  margin: 0
  line-height: 18px
}
</style>
