<template>
  <p>{{ isAuthorized }}</p>

  <AuthWidget telegram-bot-name="SecretshipContestVueBot" />

  <RouterLink
    v-for="link in links"
    :key="link.name"
    :to="link.path"
    :class="$style.link"
  >
    {{ link.name }}
  </RouterLink>

  <RouterView />
</template>

<script>
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { AuthWidget } from './components'
import { useUser } from './store'
import { Routes } from './router'

export default defineComponent({
  components: {
    AuthWidget,
    RouterView,
    RouterLink,
  },

  setup() {
    const store = useUser()
    const { isAuthorized } = storeToRefs(store)

    return {
      isAuthorized,
    }
  },

  computed: {
    links() {
      return [
        {
          name: Routes.WELCOME,
          path: '/',
        },
        {
          name: Routes.APP_ADD,
          path: '/app-add',
        },
        {
          name: Routes.APP_DETAILS,
          path: '/app-details',
        },
        {
          name: Routes.APP_LIST,
          path: '/app-list',
        },
        {
          name: Routes.PROFILE_EDIT,
          path: '/profile-edit',
        },
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
