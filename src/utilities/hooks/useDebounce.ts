import { useEffect, useCallback } from 'react'

const useDebounce = (effect: Function, deps: Array<unknown>, delay = 500) => {
  const callback = useCallback(effect, deps)

  useEffect(() => {
    const timeout = setTimeout(callback, delay)
    return () => clearTimeout(timeout)
  }, [callback, delay])
}

export default useDebounce
