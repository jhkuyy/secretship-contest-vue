<template>
  <div :class="$style.root">
    <div
      ref="trigger"
      :class="$style.trigger"
      @click="toggle"
    >
      <slot name="trigger" />

      <Icon
        name="angle"
        :class="$style.icon"
        :size="13"
      />
    </div>

    <div
      v-show="isOpen"
      :class="$style.content"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, unref } from 'vue'
import Icon from './Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },

  setup() {
    const trigger = ref(null)
    const isOpen = ref(false)

    const catchOutsideClick = (e, triggerEl) => {
      if (triggerEl === e.target || e.composedPath().includes(triggerEl)) {
        return false
      }

      if (isOpen.value && triggerEl !== e.target) {
        return true
      }

      return undefined
    }

    const toggle = () => {
      const closeListener = (e) => {
        if (catchOutsideClick(e, unref(trigger))) {
          window.removeEventListener('click', closeListener)
          isOpen.value = false
        }
      }

      window.addEventListener('click', closeListener)

      isOpen.value = !isOpen.value
    }

    return {
      trigger,
      isOpen,
      toggle,
    }
  },
})
</script>

<style lang="stylus" module>
.root {
  position: relative
  display inline-flex
}

.trigger {
  display: inline-flex
  align-items: center
  cursor: pointer
  user-select: none
}

.icon {
  margin-left: 5px
}

.content {
  position: absolute
  left: auto
  right: -1px
  top: 100%
  margin: 4px 0 -2px 0
  border: 1px solid alpha($colors.black, 0.07)
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07)
  border-radius: 4px
  overflow: hidden
  min-width: 150px
  background-color: $colors.white
  padding: 7px 0
  z-index: 100
}
</style>
