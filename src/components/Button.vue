<template>
  <router-link
    v-if="to !== undefined"
    :to="to"
    custom
  >
    <template #default="{ href, navigate }">
      <a
        :class="wrapperClasses"
        :href="href"
        @click="navigate"
      >
        <slot />
      </a>
    </template>
  </router-link>

  <button
    v-else
    :class="wrapperClasses"
  >
    <slot />
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    to: { type: Object, default: undefined },
    block: Boolean,
  },

  computed: {
    wrapperClasses() {
      return {
        [this.$style.wrapper]: true,
        [this.$style.block]: this.block,
      }
    },
  },
})
</script>

<style lang="stylus" module>
.wrapper {
  border: none
  font-size: 14px
  line-height: 20px
  font-weight: 600
  padding: 9px 22px
  background-color: $colors.primary
  transition: background-color .2s ease
  text-transform: none
  color: #fff
  border-radius: 6px
  user-select: none
  white-space: nowrap
  vertical-align: middle
  text-align: center

  &[disabled] {
    pointer-events: none
    color: rgba(255, 255, 255, 0.6)
  }

  &:hover,
  &:focus,
  &:active {
    background-color: darken($colors.primary, 10%)
    color: #fff
  }

  &:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.13)
  }
}

.block {
  width: 100%
}
</style>
