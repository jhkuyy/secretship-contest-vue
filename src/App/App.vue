<template>
  <img
    src="../assets/logo.png"
    alt="Vue logo"
  >
  <p>{{ isAuthorized }}</p>

  <AuthWidget telegram-bot-name="SecretshipContestVueBot" />
</template>

<script>
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { AuthWidget } from '../components'
import { useUser } from '../store'

export default defineComponent({
  components: {
    AuthWidget,
  },

  setup() {
    const store = useUser()
    const { isAuthorized } = storeToRefs(store)

    return {
      isAuthorized,
    }
  },
})
</script>

<style lang="stylus">
#app {
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

  a, a:hover {
    color: $colors.primary
  }

  *,
  ::before,
  ::after {
    flex 0 0 auto
  }
}
</style>
