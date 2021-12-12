<template>
  <component
    :is="tag"
    :class="$style.root"
  >
    <a
      v-if="anchor"
      :class="$style.anchor"
      :href="anchor"
    />
    <slot />
  </component>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    level: { type: [Number, String], default: 1 },
    anchor: { type: String, default: undefined },
  },

  computed: {
    tag() {
      return `h${this.level}`
    },
  },
})
</script>

<style lang="stylus" module>
.root {
  position: relative

  &:not(:hover) {
    .anchor {
      opacity: 0
    }
  }
}

.anchor {
  width: 1em
  height: 1em
  opacity: 0.5
  right: 100%
  position absolute
  background: url('../assets/images/link-icon.png') no-repeat
  background-size: 90% 90%
  margin-top: 0.1em
  transition: opacity .15s ease-in-out

  &:hover {
    opacity: 1
  }
}
</style>
