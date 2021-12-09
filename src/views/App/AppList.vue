<template>
  <div class="container p-0 mt-3">
    <div class="d-flex">
      <div class="flex-grow-1">
        <input type="text">
      </div>
      <div class="ms-3">
        <Button :to="{ name: Route.APP_ADD }">
          {{ t('page.app_list.button_add') }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { Button } from '../../components'
import { Route } from '../../lib'

export default defineComponent({
  components: {
    Button,
  },

  setup() {
    const { t } = useI18n()

    return { Route, t }
  },
})
</script>
