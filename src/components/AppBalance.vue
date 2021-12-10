<template>
  <div :class="$style.root">
    {{ balance }} TON
    ≈
    <CurrencyChip :value="balance * 3" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CurrencyChip from './CurrencyChip.vue'

export default defineComponent({
  components: { CurrencyChip },
  props: {
    balance: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="stylus" module>
.root {
  font-weight: bold
}
</style>
