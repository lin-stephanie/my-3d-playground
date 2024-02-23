import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor, Image } from '@react-three/drei'
import type { GroupProps } from '@react-three/fiber'

interface FrameProp extends GroupProps {
  imageUrl: string
}

// const GOLDENRATIO = 1.61803398875

const Frame = ({ imageUrl, castShadow, ...props }: FrameProp) => {
  // fix: Property 'material' does not exist on type 'never'.ts(2339)
  const image = useRef<React.ElementRef<typeof Image>>(null)
  const frame = useRef(null)

  const [zoom, setZoom] = useState(1)
  const [rnd] = useState(() => Math.random())
  const [hovered, setHover] = useState(false)

  useCursor(hovered)

  // const [, params] = useRoute('/item/:id')
  // const isActive = params?.id === name

  useFrame((state, _delta) => {
    if (image.current) {
      const newZoom =
        1.6 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 3
      setZoom(newZoom)

      // image.current.material.zoom = 1.6 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2

      /* easing.damp3(
        image.current.scale,
        [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1],
        0.1,
        dt
      ) */
    }

    /* easing.dampC(
      frame.current.material.color,
      hovered ? 'orange' : 'white',
      0.1,
      dt
    ) */
  })

  return (
    <group {...props}>
      <mesh
        castShadow
        name="frame"
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        scale={[2.5, 3, 0.05]}
        position={[1, 1, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="black"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          position={[-0.005, 0, 0.2]}
          scale={[0.9, 0.93, 0.9]}
          raycast={() => null}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          ref={image}
          url={imageUrl}
          position={[-0.005, 0, 0.7]}
          raycast={() => null}
          scale={[0.85, 0.9]}
          zoom={zoom}
        />
      </mesh>
    </group>
  )
}

export default Frame
