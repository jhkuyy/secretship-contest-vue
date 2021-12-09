<template>
  <router-link
    :class="$style.root"
    :to="{ name: route }"
  >
    <Icon
      :class="$style.icon"
      :size="24"
      color="#2a96ef"
      name="logo"
    />

    Telegram Ads
  </router-link>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { Route } from '../lib'
import { useUser } from '../store'
import Icon from './Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },

  setup() {
    const user = useUser()
    const { isAuthorized } = storeToRefs(user)

    const route = computed(() => (isAuthorized ? Route.APP_LIST : Route.WELCOME))

    return { route }
  },
})
</script>

<style lang="stylus" module>
.root {
  color: $colors.primary
  font-size: 16px
  font-weight: 600
  line-height: 20px
  display: inline-flex
  align-items: center

  &:hover {
    text-decoration: underline
  }
}

.icon {
  margin-right: 8px
}
</style>
