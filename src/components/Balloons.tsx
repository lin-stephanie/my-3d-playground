import { useState } from 'react'
import {
  useGLTF,
  useTexture,
  Instances,
  Instance,
  Float,
  useCursor,
} from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import { useStore } from '@/stores'
import { consoleLog } from '@/utils'
import type { GroupProps, ThreeEvent } from '@react-three/fiber'
import type { InstanceProps, FloatProps } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import type { ThemeSetting } from '@/stores/slices/theme'

type BalloonProps = Partial<InstanceProps> & {
  themeType: ThemeSetting
}

type FloatingBalloonProps = BalloonProps & {
  floatConfig?: Partial<FloatProps>
}

type BalloonsProps = GroupProps & {
  modelUrl: string
  matcapUrl: string
  balloons: BalloonProps[]
  floatConfig?: Partial<FloatProps>
  position: [number, number, number]
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

const Balloon = ({ themeType, ...props }: BalloonProps) => {
  const setThemeConfig = useStore.use.setThemeConfig()
  const debug = useStore.use.debug()

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    /* avoid events being handled incorrectly by later objects */
    e.stopPropagation()

    setThemeConfig(themeType)
    consoleLog(debug, 'themeType', themeType)
  }

  return <Instance {...props} onClick={handleClick} />
}

const FloatingBalloon = ({ floatConfig, ...props }: FloatingBalloonProps) => {
  const { threeD } = useStore.use.themeConfig()

  return threeD.float ? (
    <Float
      speed={1}
      rotationIntensity={0.1}
      floatIntensity={3}
      floatingRange={[-0.1, 0.1]}
      {...floatConfig}
    >
      <Balloon {...props} />
    </Float>
  ) : (
    <Balloon {...props} />
  )
}

const Balloons = ({
  modelUrl,
  matcapUrl,
  balloons,
  floatConfig,
  position,
  ...props
}: BalloonsProps) => {
  const { nodes } = useGLTF(modelUrl) as GLTFResult

  const matcapTexture = useTexture(matcapUrl)

  const [hover, setHover] = useState(false)
  useCursor(hover)

  const spring = useSpring({
    to: { position: position },
    from: { position: [position[0] + 3, position[1], position[2]] },
    delay: 1600,
    config: { duration: 600 },
  })

  return (
    <a.group
      position={spring.position.to((x, y, z) => [x, y, z])}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      {...props}
    >
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
          <FloatingBalloon key={index} floatConfig={floatConfig} {...balloon} />
        ))}
      </Instances>
    </a.group>
  )
}

export default Balloons
