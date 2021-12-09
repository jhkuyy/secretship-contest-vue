<template>
  {{ text }}
</template>

<script>
import { defineComponent } from 'vue'

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },

  computed: {
    text() {
      return new Date(this.value).toLocaleDateString('en', options)
    },
  },
})
</script>
