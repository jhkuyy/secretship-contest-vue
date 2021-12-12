<template>
  <ModalWrapper
    width="300px"
    @close="$emit('close')"
  >
    <p>{{ text }}</p>

    <template #buttons>
      <ModalButton @click="$emit('confirm')">
        {{ t('dialog_modal.yes') }}
      </ModalButton>
      <ModalButton @click="$emit('cancel')">
        {{ t('dialog_modal.no') }}
      </ModalButton>
    </template>
  </ModalWrapper>
</template>

<script>
import { defineComponent } from 'vue'

import { useI18n } from 'vue-i18n'
import { ModalWrapper, ModalButton } from './shared'

export default defineComponent({
  components: {
    ModalWrapper,
    ModalButton,
  },

  props: {
    text: {
      type: String,
      required: true,
    },
  },

  emits: ['close', 'confirm', 'cancel'],

  setup() {
    const { t } = useI18n()

    return { t }
  },
})
</script>
