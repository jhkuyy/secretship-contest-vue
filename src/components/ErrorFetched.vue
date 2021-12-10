<template>
  <div :class="$style.root">
    <p :class="$style.text">
      {{ t('error_fetched.text') }}
    </p>

    <Button @click="$emit('reload')">
      {{ t('error_fetched.repeat') }}
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useI18n } from 'vue-i18n'
import Button from './Button.vue'

export default defineComponent({
  components: {
    Button,
  },

  emits: ['reload'],

  setup() {
    const { t } = useI18n()

    return { t }
  },
})
</script>

<style lang="stylus" module>
.root {
  flex-grow: 1
  display: flex
  flex-flow: column nowrap
  align-items: center
  justify-content: center
}

.text {
  font-size: 16px
  font-weight: 500
  color: #fff
  margin-bottom: 35px
}
</style>
