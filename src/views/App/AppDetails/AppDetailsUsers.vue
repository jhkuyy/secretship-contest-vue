<template>
  <h4 class="my-3">
    {{ t('page.app_users.title') }}
  </h4>

  <p class="my-3 text-secondary text-center">
    {{ t('page.app_users.empty') }}
  </p>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()

    return { t }
  },
})
</script>
