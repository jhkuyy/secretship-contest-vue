<template>
  <router-link
    :class="$style.root"
    to="/"
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
import { defineComponent } from 'vue'
import Icon from './Icon.vue'

export default defineComponent({
  components: {
    Icon,
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
