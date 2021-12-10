<template>
  {{ text }}
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },

  computed: {
    text() {
      return this.value.toLocaleString('en', { style: 'currency', currency: 'USD' })
    },
  },
})
</script>
