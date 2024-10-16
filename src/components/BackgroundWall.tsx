import { useEffect, useState } from 'react'
import { Plane, useTexture, useAspect } from '@react-three/drei'
import { DoubleSide } from 'three'

type PlaneProps = React.ComponentProps<typeof Plane>

type BackgroundWallProp = PlaneProps & {
  wallUrl: string
  color: string
}

interface Size {
  width: number
  height: number
}

const BackgroundWall = ({
  wallUrl,
  color,
  children,
  ...props
}: BackgroundWallProp) => {
  const [size, setSize] = useState<Size | undefined>()
  const texture = useTexture(wallUrl)

  const scale = useAspect(
    size ? size.width : 1600,
    size ? size.height : 1000,
    1.05
  )

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

    <Plane args={[1, 1]} scale={scale} {...props}>
      <meshToonMaterial map={texture} color={color} side={DoubleSide} />
      {children}
    </Plane>
  )
}

export default BackgroundWall
