<template>
  <ApplicationHeader />
  <RouterView />
</template>

<script>
import { defineComponent } from 'vue'
import ApplicationHeader from './ApplicationHeader.vue'

export default defineComponent({
  components: {
    ApplicationHeader,
  },
})
</script>

<style scoped>

</style>
