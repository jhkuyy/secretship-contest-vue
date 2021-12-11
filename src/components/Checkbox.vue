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
    const { modelValue, ...props } = this.$props
    return withDirectives(
      h(
        'input',
        mergeProps({
          class: this.$style.checkbox,
          type: 'checkbox',
          'onUpdate:modelValue': (value) => this.$emit('update:modelValue', value),
        }, props),
      ),
      [[vModelCheckbox, modelValue]],
    )
  },
})
</script>

<style lang="stylus" module>
.checkbox {
  display: block
}
</style>
