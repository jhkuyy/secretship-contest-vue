<template>
  <div :class="$style.root">
    <Icon
      v-if="shown"
      name="loader"
      :class="$style.icon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Icon from './Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },

  data: () => ({
    shown: false,
  }),

  created() {
    setTimeout(() => {
      this.shown = true
    }, 300)
  },
})
</script>

<style lang="stylus" module>
.root {
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  flex-grow: 1
}

.icon {
  fill: #fff
  width: 18px
  height: 18px
  animation: rotate infinite 1s linear
}

@keyframes rotate {
  to {
    transform: rotateZ(1turn)
  }
}
</style>
