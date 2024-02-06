import { Vector3 } from 'three'
import { useState, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { SpotLight, useDepthBuffer } from '@react-three/drei'

// eslint-disable-next-line react/prop-types
export default function MovingSpot({ applyDepthBuffer = false, ...props }) {
  const [temp] = useState(() => new Vector3())

  // fix: property 'target' does not exist on type 'never'
  const light = useRef<React.ElementRef<typeof SpotLight>>(null)

  const depthBuffer = useDepthBuffer({ frames: 1 })
  const viewport = useThree((state) => state.viewport)

  useFrame((state) => {
    if (light.current) {
      light.current.target.position.lerp(
        temp.set(
          (state.pointer.x * viewport.width) / 2,
          (state.pointer.y * viewport.height) / 2,
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
      castShadow
      angle={0.35}
      penumbra={1}
      distance={6}
      intensity={2}
      attenuation={5.5}
      anglePower={4}
      depthBuffer={applyDepthBuffer ? depthBuffer : undefined}
      {...props}
    />
  )
}
