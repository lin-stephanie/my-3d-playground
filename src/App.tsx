import { Canvas } from '@react-three/fiber'
import { StatsGl } from '@react-three/drei'
import { Leva } from 'leva'
import Scene from './Scene'
import { useStore } from '@/stores'

export default function App() {
  const debug = useStore.use.debug()

  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <>
      {debug && (
        <Leva
          collapsed={true}
          flat={false}
          theme={{
            fonts: { mono: 'Brush Script MT' },
          }}
        />
      )}
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

        // 使用`THREE.NoToneMapping`而不是`THREE.ACESFilmicToneMapping`
        // flat={true}

        // 意味着所有与 Canvas 交互的事件将被这个指定的元素接收和处理
        // eventSource={document.getElementById('root')!}

        // 定义事件名称的前缀
        // eventPrefix="client"
      >
        <Scene />
        {debug && <StatsGl />}
      </Canvas>
    </>
    // </Suspense>
  )
}
