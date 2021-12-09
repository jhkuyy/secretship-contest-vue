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
      v-if="isOpen"
      :class="$style.content"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useClickOutside } from '../composables'
import Icon from './Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },

  setup() {
    const trigger = ref(null)
    const isOpen = ref(false)

    const { onClickOutside } = useClickOutside()

    const onClose = () => {
      isOpen.value = false
    }

    const onOpen = () => {
      isOpen.value = true
    }

    onClickOutside(trigger, () => {
      // TODO: fix me
      setTimeout(onClose)
    })

    const toggle = computed(() => (isOpen.value ? onClose : onOpen))

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
  margin: 4px 0 -2px 0
  border: 1px solid rgba(0, 0, 0, .06)
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  border-radius: 4px
  overflow: hidden
  min-width: 150px
  background-color: #fff
  padding: 7px 0
}
</style>
