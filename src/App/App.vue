<template>
  <img
    alt="Vue logo"
    src="../assets/logo.png"
  >
  <p>{{ isAuthorized }}</p>

  <AuthWidget telegram-bot-name="SecretshipContestVueBot" />
</template>

<script>
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { AuthWidget } from './components'
import { useUser } from './store'

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
