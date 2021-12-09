import { onUnmounted, unref, watch } from 'vue'

/**
 * @param {Window|HTMLElement|ref} target
 * @param {string} event
 * @param {function} listener
 * @param {object} options
 * @returns {function} stop listener function
 */
export default function useEventListener(target, event, listener, options = {}) {
  if (!target) return () => {}

  let cleanup = () => {}

  const stopWatch = watch(
    () => unref(target),
    (el) => {
      cleanup()
      if (!el) return

      el.addEventListener(event, listener, options)

      cleanup = () => {
        el.removeEventListener(event, listener, options)
        cleanup = () => {}
      }
    },
    { immediate: true },
  )

  const stopListener = () => {
    stopWatch()
    cleanup()
  }

  onUnmounted(stopListener)

  return stopListener
}
