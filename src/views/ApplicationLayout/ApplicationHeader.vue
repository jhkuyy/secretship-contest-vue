<template>
  <div class="container">
    <div :class="$style.header">
      <Logo :class="$style.logo" />

      <UserChip />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { UserChip, Logo } from '../../components'

export default defineComponent({
  components: {
    Logo,
    UserChip,
  },
})
</script>

<style lang="stylus" module>
.header {
  min-height: 64px
  display: flex
  align-items: center
  padding: 14px 0
  // TODO: move color to variables
  border-bottom: 1px solid #e6e6e6;
}

.logo {
  margin-right: auto
}
</style>
