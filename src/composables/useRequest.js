import { ref } from 'vue'

export const RequestState = {
  LOADING: Symbol('Request state loading'),
  SUCCESS: Symbol('Request state success'),
  ERROR: Symbol('Request state error'),
}

export default function useRequest(func) {
  const state = ref(null)
  const error = ref(null)

  async function requestWrapper(...args) {
    state.value = RequestState.LOADING
    try {
      const response = await func(...args)
      state.value = RequestState.SUCCESS
      return response
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('useRequest error', e)
      state.value = RequestState.ERROR
      error.value = e.message
    }

    return null
  }

  return [requestWrapper, state, error]
}
