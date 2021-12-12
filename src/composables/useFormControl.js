import { inject, watchEffect, isRef } from 'vue'

import formContextKey from '../components/Form/formContextKey'

const defaultInjectValue = {
  addStatusRef: () => {},
  removeStatusRef: () => {},
}

export default function useFormControl(isValid) {
  if (!isRef(isValid)) throw new TypeError('isValid should be Ref')

  watchEffect((onInvalidate) => {
    const { addStatusRef, removeStatusRef } = inject(formContextKey, defaultInjectValue)
    addStatusRef(isValid)
    onInvalidate(() => removeStatusRef(isValid))
  }, { flush: 'sync' })
}
