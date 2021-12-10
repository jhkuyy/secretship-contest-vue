<template>
  <div class="container">
    <div :class="$style.header">
      <Logo :class="$style.logo" />

      <UserChip />
    </div>
  </div>
</template>

<script setup>
import { UserChip, Logo } from '../../components'
</script>

<style lang="stylus" module>
.header {
  min-height: 64px
  display: flex
  align-items: center
  padding: 14px 0
  border-bottom: 1px solid $colors.gray300
}

.logo {
  margin-right: auto
}
</style>
