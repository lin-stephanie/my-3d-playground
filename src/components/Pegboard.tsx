import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import type { GroupProps, MeshProps } from '@react-three/fiber'
import type { GLTF } from 'three-stdlib'

type PegboardProps = GroupProps & {
  modelUrl: string
  matcapUrl: string
  hooksConfig: { hook1: Partial<MeshProps>; hook2: Partial<MeshProps> }
  holdersConfig: { holder1: Partial<MeshProps>; holder2: Partial<MeshProps> }
  position: [number, number, number]
}

type GLTFResult = GLTF & {
  nodes: {
    Hook1: THREE.Mesh
    Hook2: THREE.Mesh
    Holder1: THREE.Mesh
    Holder2: THREE.Mesh
    Pegboard: THREE.Mesh
  }
  materials: {
    Pegboard: THREE.MeshStandardMaterial
  }
}

const Pegboard = ({
  modelUrl,
  matcapUrl,
  hooksConfig,
  holdersConfig,
  position,
  children,
  ...props
}: PegboardProps) => {
  const { nodes } = useGLTF(modelUrl) as GLTFResult
  const matcapTexture = useTexture(matcapUrl)

  const spring = useSpring({
    to: { position: position },
    from: { position: [position[0], position[1] + 3, position[2]] },
    delay: 1000,
    config: { duration: 600 },
  })

  return (
    <a.group position={spring.position.to((x, y, z) => [x, y, z])}>
      <group {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hook1.geometry}
          rotation={nodes.Hook1.rotation}
          scale={nodes.Hook1.scale}
          // position={[0.057, 0.809, 0.012]}
          // rotation={[0, 0, -Math.PI / 2]}
          // scale={0.039}
          {...hooksConfig.hook1}
        >
          <meshMatcapMaterial matcap={matcapTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hook2.geometry}
          rotation={nodes.Hook2.rotation}
          scale={nodes.Hook2.scale}
          // position={[0.163, 0.99, 0.012]}
          // rotation={[0, 0, -Math.PI / 2]}
          // scale={0.039}
          {...hooksConfig.hook2}
        >
          <meshMatcapMaterial matcap={matcapTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Holder1.geometry}
          rotation={nodes.Holder1.rotation}
          scale={nodes.Holder1.scale}
          // position={[0.247, 0.789, 0.012]}
          // rotation={[0, 0, -Math.PI / 2]}
          // scale={0.039}
          {...holdersConfig.holder1}
        >
          <meshMatcapMaterial matcap={matcapTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Holder2.geometry}
          rotation={nodes.Holder2.rotation}
          scale={nodes.Holder2.scale}
          // position={[0.163, 0.789, 0.012]}
          // rotation={[0, 0, -Math.PI / 2]}
          // scale={0.039}
          {...holdersConfig.holder2}
        >
          <meshMatcapMaterial matcap={matcapTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pegboard.geometry}
          // material={materials.Pegboard}
          position={[-0.027, 0.917, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.38, 0.002, 0.28]}
        >
          <meshMatcapMaterial matcap={matcapTexture} />
        </mesh>
      </group>
      {children}
    </a.group>
  )
}

export default Pegboard
