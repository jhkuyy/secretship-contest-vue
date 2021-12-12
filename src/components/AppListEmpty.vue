<template>
  <div :class="$style.root">
    <div :class="$style.img">
      <img
        src="../assets/images/apps_empty.svg"
        alt="oops"
      >
    </div>

    <h2>{{ t('page.app_add.apps_empty.title') }}</h2>
    <p>{{ t('page.app_add.apps_empty.subtitle') }}</p>
    <Button :to="{ name: Route.APP_ADD }">
      {{ t('page.app_list.button_add') }}
    </Button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Button from './Button.vue'
import { Route } from '../lib'

const { t } = useI18n()
</script>

<style lang="stylus" module>
.root {
  text-align: center

  h2 {
    font-size: 17px
    font-weight 500
    margin: 24px 0 8px
  }

  p {
    margin-bottom 48px
  }
}

.img {
  width: 100px
  height: 100px
  margin: 0 auto
}
</style>
