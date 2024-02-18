import { Canvas } from '@react-three/fiber'
import BackgroundWall from '@/components/BackgroundWall'
import MovingSpot from '@/components/MovingSpot'

export default function Scene() {
  return (
    <Canvas
      style={{ touchAction: 'none' }}
      // className={styles.canvas}
      // 启用渲染器的阴影映射功能使得场景能够处理和渲染阴影
      // shadows

      // 使用正交相机
      // orthographic={true}

      // Target pixel ratio
      dpr={Math.min(window.devicePixelRatio, 2)}
      // Use `THREE.NoToneMapping` instead of `THREE.ACESFilmicToneMapping
      // flat={true}

      // A threejs renderer instance
      gl={{
        // 允许画布背景透明（不遮挡下面的文本或其他界面元素）
        // alpha: true,

        // 抗锯齿效果可以平滑边缘
        antialias: true,

        // 表示渲染完成后保留在绘图缓冲区中的图像，有利于对渲染结果进行捕获和保存（如实现屏幕截图功能）
        // preserveDrawingBuffer: true

        // 优先使用高性能的图形硬件
        // powerPreference: 'high-performance',
      }}
      // perspective camera
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 10],
      }}

      // orthographic camera
      // camera={{ zoom: 1, near: 0.1, far: 200, position: [0, 0, 10] }}

      // 意味着所有与 Canvas 交互的事件将被这个指定的元素接收和处理
      // eventSource={document.getElementById('root')!}

      // 定义事件名称的前缀
      // eventPrefix="client"
    >
      <ambientLight intensity={3} />

      {/* <MovingSpot
        color="#f87171"
        position={[4, 3.1, 2]}
        applyDepthBuffer={false}
      />

      <MovingSpot
        color="#f87171"
        position={[-4, 3.1, 2]}
        applyDepthBuffer={false}
      /> */}

      <MovingSpot
        color="#f87171"
        position={[0, 3.1, 2]}
        applyDepthBuffer={false}
      />

      <BackgroundWall position={[0, 0, 0]} />
    </Canvas>
  )
}
