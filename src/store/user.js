import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({
    user: null,
  }),

  getters: {
    isAuthorized: (state) => !!state.user,
  },

  actions: {
    login(user) {
      this.user = user
    },

    logout() {
      this.user = null
    },
  },
})
