import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useCursor, Image, useTexture } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import { easing } from 'maath'
import { useStore } from '@/stores'
import type { MeshProps, GroupProps, Vector3 } from '@react-three/fiber'
import type { ImageProps } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

type FrameProps = MeshProps & {
  modelUrl: string
  matcapUrl: string
  setHover: (value: boolean) => void
}

type PhotoProps = ImageProps & {
  hover: boolean
}

type PhotoFrameProps = Omit<
  FrameProps & PhotoProps & GroupProps,
  'hover' | 'setHover'
> & {
  photoUrl: string
  framePos: Vector3
  frameScale: Vector3
  photoPos: Vector3
  photoScale: [number, number]
  position: [number, number, number]
}

type GLTFResult = GLTF & {
  nodes: {
    mesh: THREE.Mesh
    mesh_1: THREE.Mesh
  }
  materials: {
    T_Picture: THREE.MeshStandardMaterial
    T_Frame: THREE.MeshStandardMaterial
  }
}

const Frame = ({
  modelUrl,
  matcapUrl,
  setHover,
  children,
  ...props
}: FrameProps) => {
  const { nodes, materials } = useGLTF(modelUrl) as GLTFResult
  const matcapTexture = useTexture(matcapUrl)

  // console.log(nodes)

  return (
    <mesh
      castShadow
      geometry={nodes.mesh_1.geometry}
      // material={materials.T_Frame}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      {...props}
    >
      <meshMatcapMaterial matcap={matcapTexture} color={'#9ca3af'} />
      <mesh
        castShadow
        geometry={nodes.mesh.geometry}
        material={materials.T_Picture}
      />
      {children}
    </mesh>
  )
}

const Photo = ({ hover, scale, ...props }: PhotoProps) => {
  /* the exclamation mark is a non-null assertion that will let TS know that
  ref.current is defined when we access it in effects (!not in a frame loop). */
  const photo = useRef<React.ElementRef<typeof Image>>(null!)

  const {
    threeD: { imageZoom },
  } = useStore.use.themeConfig()

  // console.log('imageZoom', imageZoom)

  const [zoom, setZoom] = useState(1)
  const [rnd] = useState(() => Math.random())

  const [scaleX, scaleY] = scale as [number, number]

  useFrame((state, delta) => {
    if (photo.current) {
      if (imageZoom) {
        const newZoom =
          1.05 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 1.5) / 20
        setZoom(newZoom)
      }

      easing.damp3(
        photo.current.scale,
        [scaleX * (hover ? 0.92 : 1), scaleY * (hover ? 0.92 : 1), 1],
        0.1,
        delta
      )
    }
  })

  return (
    <Image
      ref={photo}
      zoom={zoom}
      scale={scale}
      /* disable ray detection for some components that don't require user interaction */
      raycast={() => null}
      {...props}
    />
  )
}

const PhotoFrame = ({
  modelUrl,
  matcapUrl,
  photoUrl,
  framePos,
  frameScale,
  photoPos,
  photoScale,
  position,
  ...props
}: PhotoFrameProps) => {
  const [hover, setHover] = useState(false)
  useCursor(hover)

  const spring = useSpring({
    to: { position: position },
    from: { position: [position[0] - 6, position[1], position[2]] },
    config: { duration: 800 },
  })

  return (
    // <a.group {...props} position={spring.position.to((x, y, z) => [x, y, z])}>
    // @ts-expect-error (for SpringValue<number[]> is not assignable to Vector3)
    // Spring type is Vector3 Type (Typescript return error on position)
    // https://github.com/pmndrs/react-spring/issues/1302
    <a.group position={spring.position} {...props}>
      <Frame
        modelUrl={modelUrl}
        matcapUrl={matcapUrl}
        position={framePos}
        scale={frameScale}
        setHover={setHover}
      />
      <Photo
        url={photoUrl}
        position={photoPos}
        scale={photoScale}
        hover={hover}
      />
    </a.group>
  )
}

export default PhotoFrame
