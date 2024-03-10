import { useEffect } from 'react'
import { useStore } from '@/stores'

export const useThemeSystem = () => {
  const theme = useStore.use.theme()
  const setSystemTheme = useStore.use.setSystemTheme()
  const setThemeConfig = useStore.use.setThemeConfig()

  useEffect(() => {
    setSystemTheme()

    const matcher = window.matchMedia('(prefers-color-scheme: dark)')

    const onChange = () => {
      setSystemTheme()
      if (theme === 'system') setThemeConfig('system')
    }

    matcher.addEventListener('change', onChange)

    return () => {
      matcher.removeEventListener('change', onChange)
    }
  }, [setSystemTheme, setThemeConfig, theme])
}
