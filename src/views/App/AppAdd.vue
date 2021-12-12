<template>
  <div :class="['container d-flex flex-column align-items-center', $style.root]">
    <Form
      :class="$style.form"
      @submit="onSubmit"
    >
      <template #default="{ isAllFieldsValid }">
        <FormLabel>{{ t('page.app_add.form.label') }}</FormLabel>
        <FormTextInput
          v-model="app.name"
          :class="$style.input"
          :placeholder="t('page.app_add.form.name.placeholder')"
          :hintText="t('page.app_add.form.name.hintText')"
          :rules="appNameRules"
        />
        <FormTextInput
          v-model="app.link"
          :class="$style.input"
          :placeholder="t('page.app_add.form.link.placeholder')"
          :rules="appLinkRules"
        />
        <FormMultiselect
          v-model="app.categories"
          :class="$style.input"
          :placeholder="t('page.app_add.form.categories.placeholder')"
          :items="categories"
          :rules="appCategoriesRules"
          :notFoundText="t('page.app_add.form.categories.not_found')"
        />

        <Button
          :class="$style.submitButton"
          type="submit"
          :disabled="!isAllFieldsValid"
        >
          {{ t('page.app_add.form.button') }}
        </Button>
      </template>
    </Form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import { useI18n } from 'vue-i18n'
import {
  Form,
  FormLabel,
  FormTextInput,
  FormMultiselect,
  Button,
} from '../../components'
import { apiClient } from '../../core/services'
import { Route } from '../../lib'

export default defineComponent({
  components: {
    Form,
    FormLabel,
    FormTextInput,
    FormMultiselect,
    Button,
  },

  setup() {
    const { t } = useI18n()

    const appNameRules = [
      (name) => (!name ? t('page.app_add.form.rule.empty') : undefined),
    ]

    const appLinkRules = [
      (link) => (!link ? t('page.app_add.form.rule.empty') : undefined),
      (link) => {
        try {
          new URL(link) // eslint-disable-line no-new
        } catch {
          return t('page.app_add.form.rule.url')
        }
        return undefined
      },
    ]

    const appCategoriesRules = [
      (categories) => (categories.length === 0 ? t('page.app_add.form.rule.empty') : undefined),
    ]

    return {
      t,
      appNameRules,
      appLinkRules,
      appCategoriesRules,
    }
  },

  data: () => ({
    app: {
      name: '',
      link: '',
      categories: [],
    },
    categories: ['Game', 'Casino', 'Util'],
  }),

  methods: {
    async onSubmit() {
      await apiClient.addApp(this.app)
      await this.$router.push({ name: Route.APP_LIST })
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
