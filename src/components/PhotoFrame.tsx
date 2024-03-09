import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useCursor, Image, useTexture } from '@react-three/drei'
import { easing } from 'maath'
import type { MeshProps, GroupProps, Vector3 } from '@react-three/fiber'
import type { ImageProps } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

type FrameProp = MeshProps & {
  modelUrl: string
  matcapUrl: string
  setHover: (value: boolean) => void
}

type PhotoProp = ImageProps & {
  hover: boolean
}

type PhotoFrameProp = Omit<
  FrameProp & PhotoProp & GroupProps,
  'hover' | 'setHover'
> & {
  photoUrl: string
  framePos: Vector3
  frameScale: Vector3
  photoPos: Vector3
  photoScale: [number, number]
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
}: FrameProp) => {
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
      <meshMatcapMaterial
        matcap={matcapTexture}
        // color={'#78716c'}
        color={'#9ca3af'}
        // color={'#a8a29e'}
      />
      <mesh
        castShadow
        geometry={nodes.mesh.geometry}
        material={materials.T_Picture}
      />
      {children}
    </mesh>
  )
}

const Photo = ({ hover, scale, ...props }: PhotoProp) => {
  const photo = useRef<React.ElementRef<typeof Image>>(null!)

  const [zoom, setZoom] = useState(1)
  const [rnd] = useState(() => Math.random())

  const [scaleX, scaleY] = scale as [number, number]

  useFrame((state, delta) => {
    if (photo.current) {
      const newZoom =
        1.05 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 20
      setZoom(newZoom)

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
      raycast={() => null}
      scale={scale}
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
  ...props
}: PhotoFrameProp) => {
  const [hover, setHover] = useState(false)

  useCursor(hover)

  return (
    <group {...props}>
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
    </group>
  )
}

export default PhotoFrame
