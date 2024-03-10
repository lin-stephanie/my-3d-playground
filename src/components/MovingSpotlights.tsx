import { Vector3 } from 'three'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { SpotLight, useDepthBuffer } from '@react-three/drei'
import { useStore } from '@/stores'
import type { GroupProps } from '@react-three/fiber'

// fix: 'applyDepthBuffer' is missing in props validation.eslint(react/prop-types)
type SpotLightProps = React.ComponentProps<typeof SpotLight>

type MovingSpotlightProps = Partial<SpotLightProps> & {
  applyDepthBuffer?: boolean
}

type MovingSpotlightsProps = GroupProps & {
  spotlights: MovingSpotlightProps[]
}

const MovingSpotlight = ({
  applyDepthBuffer = false,
  ...props
}: MovingSpotlightProps) => {
  const [temp] = useState(() => new Vector3())

  // fix: property 'target' does not exist on type 'never'.ts(2339)
  const light = useRef<React.ElementRef<typeof SpotLight>>(null)

  const depthBuffer = useDepthBuffer({ frames: 1 })
  // const viewport = useThree((state) => state.viewport)

  useFrame((state) => {
    if (light.current) {
      light.current.target.position.lerp(
        temp.set(
          (state.pointer.x * state.viewport.width) / 2,
          (state.pointer.y * state.viewport.height) / 2,
          0
        ),
        0.1
      )

      light.current.target.updateMatrixWorld()
    }
  })

  return (
    <SpotLight
      ref={light}
      angle={0.35}
      penumbra={1}
      distance={8}
      intensity={1}
      attenuation={7}
      anglePower={4}
      depthBuffer={applyDepthBuffer ? depthBuffer : undefined}
      {...props}
    />
  )
}

const MovingSpotlights = ({ spotlights, ...props }: MovingSpotlightsProps) => {
  const {
    threeD: { spotlight },
  } = useStore.use.themeConfig()

  // console.log('spotlight', spotlight)

  if (!spotlight) {
    return null
  }

  return (
    <group {...props}>
      {spotlights.map((spotlight, index) => (
        <MovingSpotlight key={index} {...spotlight} />
      ))}
    </group>
  )
}

export default MovingSpotlights
