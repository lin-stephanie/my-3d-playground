import { useEffect } from 'react'
import { useStore } from '@/stores'
import { useBrowserLocation } from 'wouter/use-browser-location'

// export const useDebugListener = ( toggleDebug: DebugSlice['toggleDebug']): void => {
export const useDebugListener = (): void => {
  const toggleDebug = useStore.use.toggleDebug()
  const [location] = useBrowserLocation()

  useEffect(() => {
    const isDebug = location === '/debug'
    toggleDebug(isDebug)
  }, [location, toggleDebug])
}
