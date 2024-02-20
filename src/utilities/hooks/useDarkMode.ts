import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const isOSDarkThemeByDefault = window.matchMedia('(prefers-color-scheme: dark)').matches

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme', isOSDarkThemeByDefault)

  useEffect(() => {
    const className = 'dark'
    const bodyClass = window.document.body.classList

    enabled ? bodyClass.add(className) : bodyClass.remove(className)
  }, [enabled])

  return [enabled, setEnabled]
}

export default useDarkMode
