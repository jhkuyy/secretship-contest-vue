<script>
import {
  h,
  vModelCheckbox,
  withDirectives,
  defineComponent,
  mergeProps,
} from 'vue'

export default defineComponent({
  props: {
    modelValue: { type: [Boolean, Array], default: false },
    value: { type: String, default: undefined },
  },

  emits: ['update:modelValue'],

  render() {
    const {
      modelValue,
      class: classes,
      style,
      ...checkboxProps
    } = this.$props
    const {
      checkbox: checkboxClass,
      wrapper: wrapperClass,
      overlay: overlayClass,
    } = this.$style

    const overlay = h('div', { class: overlayClass })
    const checkbox = withDirectives(
      h(
        'input',
        mergeProps({
          class: checkboxClass,
          type: 'checkbox',
          'onUpdate:modelValue': (value) => this.$emit('update:modelValue', value),
        }, checkboxProps),
      ),
      [[vModelCheckbox, modelValue]],
    )

    return h(
      'div',
      { class: [wrapperClass, classes], style },
      [checkbox, overlay],
    )
  },
})
</script>

<style lang="stylus" module>

.wrapper {
  display: inline-block
  width: 18px
  height: 18px
  position: relative

  &::before {
    content: ''
    position: absolute
    width: 100%
    height: 100%
    border-radius: 3px
    border: 2px solid $colors.gray500
  }
}

.overlay {
  position: absolute
  width: 100%
  height: 100%
  border-radius: 3px
  background-color: $colors.primary
  background-image: url('../assets/images/check.svg')
  background-size: cover
  transition: all .12s ease
  opacity: 0
  pointer-events: none
}

.checkbox:checked + .overlay {
  opacity: 1
}

.checkbox {
  position: absolute
  width: 100%
  height: 100%
  opacity: 0
}
</style>
