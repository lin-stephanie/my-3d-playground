import {
  useGLTF,
  useTexture,
  Instances,
  Instance,
  Float,
} from '@react-three/drei'
import type { GroupProps } from '@react-three/fiber'
import type { InstanceProps } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import type { ThemeSetting } from '@/stores/slices/theme'

type FloatingBalloonProps = Partial<InstanceProps> & {
  theme: ThemeSetting
}

type BalloonInstancesProps = GroupProps & {
  modelUrl: string
  matcapUrl: string
  balloons: FloatingBalloonProps[]
  // floatConfig?: Partial<FloatProps>
}

type GLTFResult = GLTF & {
  nodes: {
    Balloon: THREE.Mesh
    Rope: THREE.Mesh
  }
  materials: {
    Balloon: THREE.MeshPhysicalMaterial
    Rope: THREE.MeshStandardMaterial
  }
}

const FloatingBalloon = ({ theme, ...props }: FloatingBalloonProps) => {
  const handleClick = (theme: ThemeSetting) => {
    console.log('theme', theme)
  }

  return (
    <Float
      speed={1}
      rotationIntensity={0.5}
      floatIntensity={6}
      floatingRange={[-0.1, 0.1]}
    >
      <Instance {...props} onClick={() => handleClick(theme)} />
    </Float>
  )
}

const Balloons = ({
  modelUrl,
  matcapUrl,
  balloons,
  ...props
}: BalloonInstancesProps) => {
  const { nodes } = useGLTF(modelUrl) as GLTFResult
  const matcapTexture = useTexture(matcapUrl)

  // console.log(nodes)

  return (
    <group {...props}>
      <Instances
        castShadow
        range={balloons.length}
        limit={balloons.length}
        geometry={nodes.Balloon.geometry}
        // material={materials.Balloon}
        scale={nodes.Balloon.scale}
        // position={[-0.01, 1.965, -0.008]}
        // scale={[1.283, 1.646, 1.278]}
        // rotation={[0, 1.571, 0]}
      >
        <meshMatcapMaterial matcap={matcapTexture} />
        {balloons.map((balloon, index) => (
          <FloatingBalloon key={index} {...balloon} />
        ))}
      </Instances>
    </group>
  )
}

export default Balloons
