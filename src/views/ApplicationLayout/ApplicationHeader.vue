<template>
  <div class="container">
    <div :class="[$style.header, needBorder && $style.border]">
      <Logo :class="$style.logo" />

      <UserChip />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { UserChip, Logo } from '../../components'
import { RouteMeta } from '../../lib'

const route = useRoute()

const needBorder = computed(() => !route.meta[RouteMeta.HIDE_HEADER_BORDER])
</script>

<style lang="stylus" module>
.header {
  min-height: 63px
  display: flex
  align-items: center
  padding: 15px 0 14px

  &.border {
    border-bottom: 1px solid $colors.gray300
  }
}

.logo {
  margin-right: auto
}
</style>
