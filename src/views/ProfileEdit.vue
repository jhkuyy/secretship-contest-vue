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
          label="Имя"
          :rules="userNameRules"
        />
        <FormTextInput
          v-model="lastName"
          autocomplete="family-name"
          :class="$style.input"
          label="Фамилия"
          :rules="userNameRules"
        />

        <Button
          :class="$style.submitButton"
          :disabled="!isAllFieldsValid"
        >
          Save
        </Button>
      </template>
    </Form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import {
  Form,
  FormTextInput,
  FormLabel,
  Button,
} from '../components'
import { Route } from '../lib'
import { useUser } from '../store'

const userNameRules = [
  (e) => (!e ? 'Должно быть заполнено' : undefined),
]

// TODO: use i18n
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

    const firstName = ref(user.firstName)
    const lastName = ref(user.lastName)

    return {
      firstName,
      lastName,
      userNameRules,
      onSubmit: () => {
        edit({
          firstName: firstName.value,
          lastName: lastName.value,
        })
        push(Route.APP_LIST)
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
