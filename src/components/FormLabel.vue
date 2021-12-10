<template>
  <div :class="$style.label">
    <slot />
  </div>
</template>

<style lang="stylus" module>
.label {
  margin: 0 15px 10px 15px
  font-weight: 600
  font-size: 15px
}
</style>
