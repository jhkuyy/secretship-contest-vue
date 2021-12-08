<template>
  <router-link
    v-if="to !== undefined"
    :class="wrapperClasses"
    custom
  >
    <template #default="{ href }">
      <a :href="href">
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
  background-color: #3c9ff0
  transition: background-color .2s ease
  text-transform: none
  color: #fff
  border-radius: 6px
  user-select: none
  white-space: nowrap
  vertical-align: middle
  text-align: center
}

.block {
  width 100%
}
</style>
