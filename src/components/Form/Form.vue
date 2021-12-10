<template>
  <form @submit.prevent="$emit('submit')">
    <slot :isAllFieldsValid="isAllFieldsValid" />
  </form>
</template>

<script>
import {
  defineComponent,
  provide,
  reactive,
  computed,
} from 'vue'

import formContextKey from './formContextKey'

export default defineComponent({
  expose: ['isAllFieldsValid'],

  emits: ['submit'],

  setup() {
    const fieldsStatusRefs = reactive([])

    provide(formContextKey, {
      addStatusRef: (ref) => fieldsStatusRefs.push(ref),
      removeStatusRef: (ref) => fieldsStatusRefs.filter((e) => e !== ref),
    })

    return {
      isAllFieldsValid: computed(() => fieldsStatusRefs.every((v) => v.value)),
    }
  },
})
</script>
