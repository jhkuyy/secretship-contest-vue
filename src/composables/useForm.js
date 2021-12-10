import { inject, watchEffect, isRef } from 'vue'

import formContextKey from '../components/Form/formContextKey'

export default function useForm(isValid) {
  if (!isRef(isValid)) throw new TypeError('isValid should be Ref')

  const { addStatusRef, removeStatusRef } = inject(formContextKey)

  watchEffect((onInvalidate) => {
    addStatusRef(isValid)
    onInvalidate(() => removeStatusRef(isValid))
  }, { flush: 'sync' })
}
