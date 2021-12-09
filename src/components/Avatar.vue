<template>
  <img
    :class="$style.root"
    :src="url"
    alt="User avatar"
  >
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 36,
    },
  },
})
</script>

<style lang="stylus" module>
.root {
  border-radius: 50%
  max-width: v-bind("size + 'px'")
}
</style>
