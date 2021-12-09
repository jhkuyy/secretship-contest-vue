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
      return new Date(this.value).toLocaleDateString('en')
    },
  },
})
</script>
