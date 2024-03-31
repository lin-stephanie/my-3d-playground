import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import type { GroupProps } from '@react-three/fiber'
import type { GLTF } from 'three-stdlib'

type EarphoneProps = GroupProps & {
  modelUrl: string
  matcapUrl: string
}

type GLTFResult = GLTF & {
  nodes: {
    Earphone: THREE.Mesh
  }
  materials: Record<string, never>
}

export function Earphone({ modelUrl, matcapUrl, ...props }: EarphoneProps) {
  const { nodes } = useGLTF(modelUrl) as GLTFResult
  const matcapTexture = useTexture(matcapUrl)

  return (
    <group {...props}>
      <mesh
        castShadow
        geometry={nodes.Earphone.geometry}
        // material={nodes.Earphone.material}
        // position={[1.861, -2.274, 0.145]}
        // rotation={[0.955, 0.785, 2.356]}
        scale={0.01}
      >
        <meshMatcapMaterial matcap={matcapTexture} />
      </mesh>
    </group>
  )
}

export default Earphone
