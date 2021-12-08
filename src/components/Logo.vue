<template>
  <router-link
    :class="$style.root"
    to="/"
  >
    <Icon
      :class="$style.icon"
      :size="24"
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
  color: darken($colors.primary, 10%)
  font-size 16px
  font-weight 600
  line-height 20px
  display inline-flex
  align-items center
}

.icon {
  margin-right 8px
}
</style>
