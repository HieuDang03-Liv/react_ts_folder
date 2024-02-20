import { RefObject, useEffect } from 'react'

type Handler = (event: MouseEvent) => void

const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mouseup'
) => {
  useEffect(() => {
    const elem = ref.current

    const eventCallback = (e: MouseEvent) => {
      if (!elem || elem.contains(e.target as Node)) {
        return
      }

      handler(e)
    }

    elem?.addEventListener(mouseEvent, eventCallback)

    return () => elem?.removeEventListener(mouseEvent, eventCallback)
  }, [])
}

export default useOutsideClick
