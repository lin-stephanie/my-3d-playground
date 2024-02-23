import { useGLTF, useTexture } from '@react-three/drei'
import type { MeshProps } from '@react-three/fiber'
import type { GLTF } from 'three-stdlib'

interface FrameProp extends MeshProps {
  imageUrl: string
  modelUrl: string
  matcapUrl: string
}

type GLTFResult = GLTF & {
  nodes: {
    Cube009: THREE.Mesh
  }
  materials: Record<string, never>
}

const Frame = ({ imageUrl, modelUrl, matcapUrl, ...props }: FrameProp) => {
  // @ts-expect-error (for 'materials' is declared but its value is never read.ts(6133))
  const { scene, nodes, materials } = useGLTF(modelUrl) as GLTFResult

  // const fbx = useFBX(modelUrl)

  const matcapTexture = useTexture(matcapUrl)

  // console.log('nodes', nodes)
  // console.log('materials', materials)
  // console.log('fbx', fbx)

  return (
    <group scale={2.5}>
      <mesh
        castShadow
        geometry={nodes.Cube009.geometry}
        // material={nodes.Cube009.material}
        // position={nodes.Cube009.position}
        // rotation={[0, Math.PI / 2, 0]}
        rotation={nodes.Cube009.rotation}
        // scale={[0.045, 0.582, 0.458]}
        scale={nodes.Cube009.scale}
        {...props}
      >
        <meshMatcapMaterial matcap={matcapTexture} color={'#78716c'} />
      </mesh>
    </group>
  )
}

export default Frame
