import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useStore } from '@/stores'
import { useThemeSystem } from '@/hooks'

import BackgroundWall from '@/components/BackgroundWall'
import Introduction from '@/components/text/Introduction'
import MovingSpotlights from '@/components/MovingSpotlights'
import PhotoFrame from '@/components/PhotoFrame'
import Balloons from '@/components/Balloons'

import wallUrl from '@/assets/images/wall1.jpg'

import photoUrl from '@/assets/images/photo-stone-700.png'
import frameModel from '@/assets/models/photo-frame1.glb?url'
import frameMatcapUrl from '@/assets/textures/C30C0C_9F0404_830404_5C0404-512px.png'

import balloonModel from '@/assets/models/balloon2.glb?url'
import balloonMatcapUrl from '@/assets/textures/B0A2A8_866A63_E8E9F2_614C4F-512px.png'

export default function Scene() {
  const { colors } = useStore.use.themeConfig()

  /* listen for system theme changes via media queries (prefers-color-scheme: dark) */
  useThemeSystem()

  return (
    <Canvas
      // 设置canvas元素样式
      style={{ touchAction: 'none' }}
      // className="canvas__container"
      // 启用渲染器的阴影映射功能使得场景能够处理和渲染阴影
      shadows
      // 像素比
      dpr={Math.min(window.devicePixelRatio, 2)}
      // 配置渲染器实例对象
      gl={{
        // 抗锯齿效果可以平滑边缘
        antialias: true,

        // 允许画布背景透明（不遮挡下面的文本或其他界面元素）
        // alpha: true,

        // 表示渲染完成后保留在绘图缓冲区中的图像，有利于对渲染结果进行捕获和保存（如实现屏幕截图功能）
        // preserveDrawingBuffer: true

        // 优先使用高性能的图形硬件
        // powerPreference: 'high-performance',
      }}
      // 透视相机配置
      /* camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 10],
      }} */

      // 使用正交相机
      orthographic={true}
      // 正交相机配置
      camera={{ zoom: 100, near: 0.1, far: 200, position: [0, 0, 10] }}

      // 使用`THREE.NoToneMapping`而不是`THREE.ACESFilmicToneMapping
      // flat={true}

      // 意味着所有与 Canvas 交互的事件将被这个指定的元素接收和处理
      // eventSource={document.getElementById('root')!}

      // 定义事件名称的前缀
      // eventPrefix="client"
    >
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />

      <ambientLight intensity={2} />

      {/* <directionalLight castShadow position={[4, 1, 6]} intensity={0.5} /> */}
      {/* <directionalLight castShadow position={[1, 1, 1]} intensity={0.5} /> */}
      <directionalLight castShadow position={[6, 4, 6]} intensity={0.8} />

      <MovingSpotlights
        spotlights={[
          { color: colors.red[200], position: [7, 0, 0] },
          { color: colors.red[200], position: [-7, 0, 0] },
          { color: colors.red[200], position: [0, 0, 0] },
        ]}
        position={[0, 3.3, 2]}
      />

      <BackgroundWall
        receiveShadow
        wallUrl={wallUrl}
        color={colors.stone[700]}
        position={[0, 0, 0]}
      >
        <Introduction />
      </BackgroundWall>

      {/* <Frame
        castShadow
        imageUrl={cartoonPortraitUrl}
        position={[3, -1, 0.2]}
      /> */}
      {/* <Frame
        modelUrl={frameModel}
        matcapUrl={matcapUrl}
        imageUrl={cartoonPortraitUrl}
        position={[1, 0, 0]}
      /> */}
      <PhotoFrame
        modelUrl={frameModel}
        matcapUrl={frameMatcapUrl}
        photoUrl={photoUrl}
        framePos={[0, 0, 0.18]}
        frameScale={[0.25, 0.19, 0.25]}
        photoPos={[-0.01, 0, 0.18]}
        photoScale={[2, 2.6]}
        position={[-2.8, 1.6, 0]}
        rotation={[0, 0, 0.05]}
        scale={0.56}
      />

      <Balloons
        modelUrl={balloonModel}
        matcapUrl={balloonMatcapUrl}
        balloons={[
          {
            position: [-1.5, 0.1, 2],
            rotation: [0, 0, 0.3],
            scale: 1,
            color: colors.red[800],
            themeType: 'dark',
          },
          {
            position: [0, 0, 6],
            rotation: [0, 0, 0],
            scale: 1,
            color: colors.red[300],
            themeType: 'system',
          },
          {
            position: [1.5, 0.2, 4],
            rotation: [0, 0, -0.3],
            scale: 1,
            color: colors.red[100],
            themeType: 'light',
          },
        ]}
        floatConfig={{
          speed: 1,
          rotationIntensity: 0.1,
          floatIntensity: 3,
          floatingRange: [-0.1, 0.1],
        }}
        position={[6.2, -2.5, 0]}
        rotation={[0, 0, 0.1]}
        scale={0.36}
      />
    </Canvas>
  )
}
