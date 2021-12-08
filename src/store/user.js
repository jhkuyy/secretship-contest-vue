import { defineStore } from 'pinia'
import appStorage from '../core/services/AppStorage'

const USER_KEY = 'user'

export default defineStore('user', {
  state: () => ({
    user: undefined,
  }),

  getters: {
    isAuthorized: (state) => state.user !== undefined,
  },

  actions: {
    async initAuthorization() {
      const user = appStorage.get(USER_KEY)
      // TODO: check auth
      const userValid = user !== undefined

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
      this.user = undefined
      appStorage.remove(USER_KEY)
    },
  },
})
