<template>
  <div :class="$style.wrapper">
    <div style="display:flex">
      <div :class="$style.colorTest1" />
      <div :class="$style.colorTest2" />
    </div>
    <FormMultiselect
      v-model="sample4"
      style="max-width: 370px"
      itemsColor="primary"
      placeholder="Multiselect"
      description="Target all channels that publish their posts in languages listed here."
      notFoundText="No items found"
      :items="sample4a"
    />
    <FormTextInput
      v-model="sample1"
      label="piska"
      :rules="rules1"
      hintText="Hello World!"
    />
    <FormTextInput
      v-model="sample2"
      :rules="rules1"
      hintText="Hello World!"
      prefix="@"
    />
    <FormTextInput
      v-model="sample3"
      :rules="rules1"
      prefix="$"
      placeholder="0.00"
      inputmode="decimal"
    />
    <FormTextInput
      v-model="sample3"
      :rules="rules1"
      placeholder="Desc"
      inputmode="decimal"
      description="Target all channels that publish their posts in languages listed here."
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import { FormTextInput, FormMultiselect } from '../components'

export default defineComponent({
  components: {
    FormTextInput,
    FormMultiselect,
  },

  data: () => ({
    sample1: 'sample',
    sample2: 'a',
    sample3: '',
    sample4: [],
    sample4a: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6'],
    rules1: [(e) => (e !== 'a' ? undefined : 'Should no be "a"!')],
  }),
})
</script>

<style lang="stylus" module>
.wrapper {
  min-height: 100vh
  display: grid
  place-items: center
  gap: 16px
}

.colorTest1 {
  width: 200px
  height: 100px
  background-color: $colors.gray400
}
.colorTest2 {
  width: 200px
  height: 100px
  background-color: #d9d9d9
}
</style>
