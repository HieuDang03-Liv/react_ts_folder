import { parseJSON, stringifyJSON } from '@utilities/helpers/convertJSON'
import { useState } from 'react'

const useLocalStorage = (key: string, initialValue: string | number | boolean) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? parseJSON(item) : initialValue
  })

  const setValue = (value: unknown) => {
    const storingValue = value instanceof Function ? value(storedValue) : value

    setStoredValue(storingValue)

    const stringifiedToJSON = stringifyJSON(storingValue)
    if (stringifiedToJSON) {
      window.localStorage.setItem(key, stringifiedToJSON)
    } else {
      console.error(`Cannot save the item with value: ${value} to the local storage.`)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
