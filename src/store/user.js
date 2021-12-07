import { defineStore } from 'pinia'
import appStorage from '../core/storage/AppStorage'

const USER_KEY = 'user'

export default defineStore('user', {
  state: () => ({
    user: null,
  }),

  getters: {
    isAuthorized: (state) => !!state.user,
  },

  actions: {
    async initAuthorization() {
      const user = appStorage.get(USER_KEY)

      // TODO: check auth
      const userValid = !!user

      if (userValid) {
        this.login(user)
      } else {
        this.logout()
      }
    },

    login(user) {
      this.user = user
      appStorage.set(USER_KEY, user)
    },

    logout() {
      this.user = null
      appStorage.set(USER_KEY, null)
    },
  },
})
