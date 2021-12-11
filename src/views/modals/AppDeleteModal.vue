<template>
  <ModalWrapper
    width="300px"
    @close="$emit('close')"
  >
    <p>You have unsaved changes, do you really want to leave this page?</p>

    <template #buttons>
      <ModalButton @click="$emit('close')">
        Да
      </ModalButton>
      <ModalButton @click="$emit('close')">
        Нет
      </ModalButton>
    </template>
  </ModalWrapper>
</template>

<script>
import { defineComponent } from 'vue'

import { ModalWrapper, ModalButton } from './shared'

export default defineComponent({
  components: {
    ModalWrapper,
    ModalButton,
  },

  emits: ['close'],
})
</script>
