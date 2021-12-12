<template>
  <FormControlWrapper
    :filled="filled"
    :label="label"
    :hintText="hintText"
    :description="description"
    :controlValue="modelValue"
    :controlValueRules="rules"
  >
    <div
      v-if="prefix !== undefined"
      :class="$style.prefix"
    >
      {{ prefix }}
    </div>
    <input
      :class="{
        [$style.input]: true,
        [$style.input_withPrefix]: prefix !== undefined
      }"
      type="text"
      :value="modelValue"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      @input.stop="$emit('update:modelValue', $event.target.value)"
    >
  </FormControlWrapper>
</template>

<script>
import { defineComponent } from 'vue'

import FormControlWrapper from './FormControlWrapper.vue'

export default defineComponent({
  components: {
    FormControlWrapper,
  },

  props: {
    modelValue: { type: String, default: undefined },
    autocomplete: { type: String, default: 'off' },
    inputmode: { type: String, default: 'text' },
    placeholder: { type: String, default: undefined },
    label: { type: String, default: undefined },
    rules: { type: Array, default: undefined },
    hintText: { type: String, default: undefined },
    description: { type: String, default: undefined },
    prefix: { type: String, default: undefined },
  },

  emits: ['update:modelValue'],

  computed: {
    filled() {
      return (
        this.modelValue !== ''
        && this.modelValue !== null
        && this.modelValue !== undefined
      )
    },
  },
})
</script>

<style lang="stylus" module>
$padding = 15px

.input {
  border: none
  background: none
  padding: 0 $padding

  &:focus,
  &:focus-visible {
    outline: none
  }

  &_withPrefix {
    padding-left: 'calc(%s + 1ch)' % ($padding * 2)
  }
}

.prefix {
  position: absolute
  transform: translateY(-50%)
  top: 50%
  left: $padding
  pointer-events: none
}
</style>
