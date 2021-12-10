<template>
  <div :class="$style.root">
    <Loader v-if="loading" />

    <ErrorFetched
      v-else-if="error"
      @reload="$emit('reload')"
    />

    <slot v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ErrorFetched from './ErrorFetched.vue'
import Loader from './Loader.vue'

export default defineComponent({
  components: {
    ErrorFetched,
    Loader,
  },

  props: {
    loading: Boolean,
    error: Boolean,
  },

  emits: ['reload'],
})
</script>

<style lang="stylus" module>
.root {
  display: contents
}
</style>
