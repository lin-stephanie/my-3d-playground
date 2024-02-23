import { Vector3 } from 'three'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { SpotLight, useDepthBuffer } from '@react-three/drei'

// fix: 'applyDepthBuffer' is missing in props validation.eslint(react/prop-types)
type SpotLightProps = React.ComponentProps<typeof SpotLight>

type MovingSpotProps = SpotLightProps & {
  applyDepthBuffer?: boolean
  applyCastShadow?: boolean
}

const MovingSpot = ({
  applyDepthBuffer = false,
  applyCastShadow = false,
  ...props
}: MovingSpotProps) => {
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
      distance={6}
      intensity={2}
      attenuation={5.5}
      anglePower={4}
      castShadow={applyCastShadow}
      depthBuffer={applyDepthBuffer ? depthBuffer : undefined}
      {...props}
    />
  )
}

export default MovingSpot
