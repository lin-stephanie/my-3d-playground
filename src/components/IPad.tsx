import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import IPadLockScreen from '@/components/IPadLockScreen'
import type { GroupProps } from '@react-three/fiber'
import type { GLTF } from 'three-stdlib'
import type { IPadLockScreenProps } from '@/components/IPadLockScreen'

type IpadProps = GroupProps & {
  modelUrl: string
  lockScreenConfig: IPadLockScreenProps
}

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
    Plane_1: THREE.Mesh
    Plane_2: THREE.Mesh
    Plane_3: THREE.Mesh
  }
  materials: {
    Metal: THREE.MeshStandardMaterial
    MatteBlack: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Glass: THREE.MeshPhysicalMaterial
  }
}

const IPad = ({ modelUrl, lockScreenConfig, ...props }: IpadProps) => {
  const { nodes, materials } = useGLTF(modelUrl) as GLTFResult

  return (
    <group {...props}>
      <group position={[1.607, 2.883, 0.03]}>
        <mesh
          castShadow
          geometry={nodes.Plane.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.MatteBlack}
        />
        <mesh
          castShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          geometry={nodes.Plane_3.geometry}
          material={materials.Glass}
        />
        <IPadLockScreen {...lockScreenConfig} />
      </group>
    </group>
  )
}

export default IPad
