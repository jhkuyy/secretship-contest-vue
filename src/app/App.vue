<template>
  <p>{{ isAuthorized }}</p>

  <AuthWidget
    telegram-bot-name="SecretshipContestVueBot"
    @auth="onAuth"
  />

  <RouterLink
    v-for="link in links"
    :key="link"
    :to="{ name: link }"
    :class="$style.link"
  >
    {{ link }}
  </RouterLink>

  <RouterView />
</template>

<script>
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { AuthWidget } from '../components'
import { Routes } from '../router'
import { useUser } from '../store'

export default defineComponent({
  components: {
    AuthWidget,
    RouterView,
    RouterLink,
  },

  setup() {
    const store = useUser()
    const router = useRouter()
    const { isAuthorized } = storeToRefs(store)

    const onAuth = async (user) => {
      await store.login(user)
      await router.push({ name: Routes.APP_LIST })
    }

    return {
      isAuthorized,
      onAuth,
    }
  },

  computed: {
    links() {
      return [
        Routes.WELCOME,
        Routes.APP_ADD,
        Routes.APP_LIST,
        Routes.PROFILE_EDIT,
      ]
    },
  },
})
</script>

<style module>
.link {
  margin-right: 15px
}
</style>
