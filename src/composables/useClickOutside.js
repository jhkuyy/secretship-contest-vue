import { onUnmounted, unref } from 'vue'

import useEventListener from './useEventListener'

const eventList = ['mouseup', 'touchend']

function unrefElement(elRef) {
  return unref(elRef)?.$el ?? unref(elRef)
}

export default function useClickOutside() {
  function onClickOutside(target, callback) {
    const listener = (event) => {
      const el = unrefElement(target)
      if (!el) return

      if (el === event.target || event.composedPath().includes(el)) return

      callback(event)
    }

    let disposables = eventList.map((event) => (
      useEventListener(window, event, listener, { passive: true })))

    const stopListener = () => {
      disposables.forEach((dispose) => dispose())
      disposables = []
    }

    onUnmounted(stopListener)

    return stopListener
  }

  return {
    onClickOutside,
  }
}
