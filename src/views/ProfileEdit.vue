<template>
  <div :class="['container d-flex flex-column align-items-center', $style.root]">
    <Form
      :class="$style.form"
      @submit="onSubmit"
    >
      <template #default="{ isAllFieldsValid }">
        <FormLabel>Profile Edit</FormLabel>
        <FormTextInput
          v-model="firstName"
          autocomplete="given-name"
          :class="$style.input"
          :label="t('page.profile_edit.form.firstname.label')"
          :rules="userNameRules"
        />
        <FormTextInput
          v-model="lastName"
          autocomplete="family-name"
          :class="$style.input"
          :label="t('page.profile_edit.form.lastname.label')"
          :rules="userNameRules"
        />

        <Button
          :class="$style.submitButton"
          :disabled="!isAllFieldsValid"
        >
          {{ t('page.profile_edit.form.save_button') }}
        </Button>
      </template>
    </Form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import {
  Form,
  FormTextInput,
  FormLabel,
  Button,
} from '../components'
import { Route } from '../lib'
import { useUser } from '../store'

export default defineComponent({
  components: {
    Form,
    FormLabel,
    FormTextInput,
    Button,
  },

  setup() {
    const { user, edit } = useUser()
    const { push } = useRouter()
    const { t } = useI18n()

    const firstName = ref(user.firstName)
    const lastName = ref(user.lastName)

    const userNameRules = [
      (e) => (!e ? t('page.profile_edit.form.rule') : undefined),
    ]

    return {
      t,
      firstName,
      lastName,
      userNameRules,
      onSubmit: () => {
        edit({
          firstName: firstName.value,
          lastName: lastName.value,
        })
        push({ name: Route.APP_LIST })
      },
    }
  },
})
</script>

<style lang="stylus" module>
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
