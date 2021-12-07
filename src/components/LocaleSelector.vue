<template>
  <select
    :value="locale"
    @change="setLocale($event.target.value)"
  >
    <option
      v-for="option in availableLocales"
      :key="option"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { availableLocales, locale } = useI18n()

    const setLocale = (newLocale) => {
      locale.value = newLocale
    }

    return {
      locale,
      availableLocales,
      setLocale,
    }
  },
}
</script>

<style scoped>

</style>
