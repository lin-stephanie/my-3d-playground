import { useEffect, useState } from 'react'
import { Plane, useTexture, useAspect } from '@react-three/drei'
import wallUrl from '@/assets/wall3.jpg'

interface Size {
  width: number
  height: number
}

export default function BackgroundWall() {
  const [size, setSize] = useState<Size | undefined>()

  const scale = useAspect(
    size ? size.width : 1600,
    size ? size.height : 1000,
    1.05
  )

  const texture = useTexture(wallUrl)

  useEffect(() => {
    if (texture.image) {
      setSize({
        width: texture.image.width,
        height: texture.image.height,
      })
    }
  }, [texture])

  return (
    // <mesh
    //   position={[0, 0, 0]}
    //   scale={scale}
    // >
    //   <planeGeometry args={[1, 1]} />
    //   <meshToonMaterial
    //     map={texture}
    //     color="#393939"
    //     color="#44403c"
    //   />
    // </mesh>

    <Plane args={[1, 1]} position={[0, 0, 0]} scale={scale}>
      <meshToonMaterial map={texture} color="#44403c" />
    </Plane>
  )
}
