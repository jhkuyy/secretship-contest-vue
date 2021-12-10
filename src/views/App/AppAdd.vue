<template>
  <div :class="['container', $style.root]">
    <h1>App Add</h1>

    <Form
      :class="$style.form"
      @submit="onSubmit"
    >
      <template #default="{ isAllFieldsValid }">
        <FormTextInput
          v-model="appName"
          placeholder="App name"
          hintText="Should be at least 4 symbols long"
          :rules="appNameRules"
        />
        <FormTextInput
          v-model="appLink"
          placeholder="App link"
          :rules="appLinkRules"
        />
        <FormMultiselect
          v-model="appCategories"
          placeholder="App categories"
          :items="categories"
          :rules="appCategoriesRules"
        />

        <Button
          type="submit"
          :disabled="!isAllFieldsValid"
        >
          Save
        </Button>
      </template>
    </Form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import {
  Form,
  FormTextInput,
  FormMultiselect,
  Button,
} from '../../components'

const appNameRules = [
  (name) => (!name ? 'Can not be empty!' : undefined),
  (name) => (name.length < 4 ? 'Too short!' : undefined),
]

const appLinkRules = [
  (link) => (!link ? 'Can not be empty!' : undefined),
  (link) => {
    try {
      new URL(link) // eslint-disable-line no-new
    } catch {
      return 'Not valid url!'
    }
    return undefined
  },
]

const appCategoriesRules = [
  (categories) => (categories.length === 0 ? 'Can not be empty!' : undefined),
]

export default defineComponent({
  components: {
    Form,
    FormTextInput,
    FormMultiselect,
    Button,
  },

  data: () => ({
    appName: '',
    appLink: '',
    appCategories: [],
    categories: ['Game', 'Casino', 'Util'],
    appNameRules,
    appLinkRules,
    appCategoriesRules,
  }),

  methods: {
    onSubmit() {
      console.log('>>')
    },
  },
})
</script>

<style lang="stylus"  module>
.root {}

.form {
  display: flex
  flex-direction: column
  gap: 16px
}
</style>
