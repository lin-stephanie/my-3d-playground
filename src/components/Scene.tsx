import { Canvas } from '@react-three/fiber'
import BackgroundWall from '@/components/BackgroundWall'
import styles from '@/styles/Scene.module.css'

export default function Scene() {
  return (
    <Canvas
      className={styles.canvas}
      // 启用场景中物体的阴影效果，这意味着灯光和物体之间的相互作用会产生阴影，使场景更加逼真
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

        // 表示渲染完成后保留在绘图缓冲区中的图像，对渲染结果进行捕获和保存非常有用，如实现屏幕截图功能
        // preserveDrawingBuffer: true

        // 优先使用高性能的图形硬件
        powerPreference: 'high-performance',
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 10],
      }}

      // 意味着所有与 Canvas 交互的事件将被这个指定的元素接收和处理
      // eventSource={document.getElementById('root')!}

      // 定义事件名称的前缀
      // eventPrefix="client"
    >
      <ambientLight intensity={3} />

      <BackgroundWall />
    </Canvas>
  )
}
