<template>
  <div :class="$style.root">
    <img
      :class="$style.image"
      :src="url"
      alt="User avatar"
    >
  </div>
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
  width: v-bind("size + 'px'")
  height: v-bind("size + 'px'")
  flex-shrink 0
}

.image {
  border-radius: 50%
  max-width: 100%
}
</style>
