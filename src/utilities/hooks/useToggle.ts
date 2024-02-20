import { useCallback, useState } from 'react'

const useToggle = (defaultValue?: boolean) => {
  const [value, setValue] = useState(!!defaultValue)

  const toggle = useCallback(() => setValue((pre) => !pre), [])

  return [value, toggle]
}

export default useToggle
