<template>
  <svg
    :class="$style.root"
    aria-hidden="true"
  >
    <use
      :href="symbol"
      :fill="color"
    />
  </svg>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: '#000',
    },
    name: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      default: 'icon',
    },
    size: {
      type: Number,
      default: 14,
    },
  },

  computed: {
    symbol() {
      return `#${this.prefix}-${this.name}`
    },
  },
})
</script>

<style lang="stylus" module>
.root {
  width v-bind("size + 'px'")
  height v-bind("size + 'px'")
}
</style>
