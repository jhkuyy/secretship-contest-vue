<template>
  <h4 class="my-3">
    {{ t('page.app_settings.title') }}
  </h4>

  <p class="my-3 text-secondary text-center">
    {{ t('page.app_settings.empty') }}
  </p>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
