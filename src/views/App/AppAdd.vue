<template>
  <div :class="['container d-flex flex-column align-items-center', $style.root]">
    <Form
      :class="$style.form"
      @submit="onSubmit"
    >
      <template #default="{ isAllFieldsValid }">
        <FormLabel>App Add</FormLabel>
        <FormTextInput
          v-model="appName"
          :class="$style.input"
          placeholder="App name"
          hintText="Should be at least 4 symbols long"
          :rules="appNameRules"
        />
        <FormTextInput
          v-model="appLink"
          :class="$style.input"
          placeholder="App link"
          :rules="appLinkRules"
        />
        <FormMultiselect
          v-model="appCategories"
          :class="$style.input"
          placeholder="App categories"
          :items="categories"
          :rules="appCategoriesRules"
        />

        <Button
          :class="$style.submitButton"
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
  FormLabel,
  FormTextInput,
  FormMultiselect,
  Button,
} from '../../components'
import { apiClient } from '../../core/services'

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

// TODO: use i18n
export default defineComponent({
  components: {
    Form,
    FormLabel,
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
      // TODO: implement
      apiClient.addApp({})
    },
  },
})
</script>

<style lang="stylus"  module>
.root {
  padding-top: 25px
}

.form {
  display: flex
  flex-direction: column
  max-width: 400px
  width: 100%
}

.input {
  margin: 10px 0 15px
}

.submitButton {
  margin-top: 10px
}
</style>
