import { useThree } from '@react-three/fiber'
import { useState, useEffect } from 'react'

interface calculateState {
  sceneWidthFactor: number
  sceneHeightFactor: number
  is2Xl: boolean
  isXl: boolean
  isLg: boolean
  isMd: boolean
  isSm: boolean
  isXs: boolean
}

interface respState extends calculateState {
  viewportWidth: number
  viewportHeight: number
}

const calculateFactor = (): calculateState => {
  const sceneWidthFactor = Math.min(Math.max(window.innerWidth / 1536, 0.5), 2)
  const sceneHeightFactor = Math.min(
    Math.max(window.innerHeight / 750, 0.8),
    1.5
  )

  const is2Xl = window.innerWidth < 1536
  const isXl = window.innerWidth < 1280
  const isLg = window.innerWidth < 1024
  const isMd = window.innerWidth < 768
  const isSm = window.innerWidth < 576
  const isXs = window.innerWidth < 460

  return {
    sceneWidthFactor,
    sceneHeightFactor,
    is2Xl,
    isXl,
    isLg,
    isMd,
    isSm,
    isXs,
  }
}

export const useResponsive = (): respState => {
  const { width: viewportWidth, height: viewportHeight } = useThree(
    (state) => state.viewport
  )

  const [resp, setResp] = useState<respState>(() => {
    return {
      viewportWidth,
      viewportHeight,
      ...calculateFactor(),
    }
  })

  useEffect(() => {
    setResp({
      viewportWidth,
      viewportHeight,
      ...calculateFactor(),
    })
  }, [viewportWidth, viewportHeight])

  return resp
}
