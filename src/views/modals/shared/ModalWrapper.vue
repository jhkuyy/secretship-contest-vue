<template>
  <div
    :class="$style.wrapper"
    @click="$emit('close')"
  >
    <div
      :class="$style.backdrop"
      @click.stop
    >
      <slot />

      <div :class="$style.buttons">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: { type: String, default: '200px' },
  },

  emits: ['close'],
})
</script>

<style lang="stylus" module>
.wrapper {
  position: fixed
  z-index: 100
  top: 0
  left: 0
  display: flex
  width: 100vw
  height: 100vh
  align-items: center
  justify-content: center
  background-color: alpha($colors.black, 0.6)
  padding: 40px 15px
}

.backdrop {
  width: 100%
  max-width: v-bind(width)
  position: relative
  background-color: $colors.white
  border-radius: 4px
  box-shadow: 0 0 12px alpha($colors.black, 0.3)
  padding: 20px

  @media screen and (min-width: 560px) {
    padding: 30px 35px
  }
}

.buttons {
  margin: 6px -12px -8px
  text-align: right

  &:empty {
    display: none
  }

  @media (min-width: 560px) {
    margin-top: 16px
  }
}
</style>
