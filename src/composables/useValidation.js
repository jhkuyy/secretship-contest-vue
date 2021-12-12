import {
  ref,
  computed,
  watchEffect,
  unref,
} from 'vue'

export default function useValidation(value, rules, isValidationEnabled = true) {
  let lastIsValid = true
  let lastValidationError
  const isValid = ref(true)
  const validationError = ref()

  watchEffect(() => {
    const validationBrokenRule = unref(rules).find((rule) => rule(value.value))

    if (validationBrokenRule !== undefined) {
      lastIsValid = false
      lastValidationError = validationBrokenRule(value.value)
    } else {
      lastIsValid = true
      lastValidationError = undefined
    }

    isValid.value = lastIsValid
    validationError.value = lastValidationError
  })

  return {
    isValid: computed(() => (unref(isValidationEnabled) ? isValid.value : true)),
    validationError: computed(
      () => (unref(isValidationEnabled) ? validationError.value : undefined),
    ),
  }
}
