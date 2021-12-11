<script>
import {
  h,
  vModelRadio,
  withDirectives,
  defineComponent,
  mergeProps,
} from 'vue'

export default defineComponent({
  props: {
    modelValue: { type: [Boolean, String], default: false },
    value: { type: String, default: undefined },
  },

  emits: ['update:modelValue'],

  render() {
    const { modelValue, ...props } = this.$props
    return withDirectives(
      h(
        'input',
        mergeProps({
          class: this.$style.radio,
          type: 'radio',
          'onUpdate:modelValue': (value) => this.$emit('update:modelValue', value),
        }, props),
      ),
      [[vModelRadio, modelValue]],
    )
  },
})
</script>

<style lang="stylus" module>
.radio {
  display: block
}
</style>
