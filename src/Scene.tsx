import { Suspense } from 'react'
import { DirectionalLightHelper } from 'three'
import { OrbitControls, Helper } from '@react-three/drei'
import { useStore } from '@/stores'
import { useThemeSystem, useDebugListener } from '@/hooks'
import { consoleLog } from '@/utils'

import BackgroundWall from '@/components/BackgroundWall'
import Introduction from '@/components/text/Introduction'
import MovingSpotlights from '@/components/MovingSpotlights'
import PhotoFrame from '@/components/PhotoFrame'
import Balloons from '@/components/Balloons'
import Loader from '@/components/Loader'

import wallUrl from '@/assets/images/wall1.jpg'

import photoUrl from '@/assets/images/photo-stone-700.png'
import frameModel from '@/assets/models/photo-frame1.glb?url'
import frameMatcapUrl from '@/assets/textures/C30C0C_9F0404_830404_5C0404-512px.png'

import balloonModel from '@/assets/models/balloon2.glb?url'
import balloonMatcapUrl from '@/assets/textures/B0A2A8_866A63_E8E9F2_614C4F-512px.png'

import loadingUrl from '@/assets/images/circle1.gif'

export default function Scene() {
  const { colors } = useStore.use.themeConfig()
  const debug = useStore.use.debug()

  /* effect: listen for system theme changes via media queries (prefers-color-scheme: dark) */
  useThemeSystem()

  /* effect: listen for path changes to debug to enable debug mode */
  useDebugListener()
  consoleLog(debug, 'debug', debug)

  return (
    <Suspense fallback={<Loader loadingUrl={loadingUrl} />}>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />

      <ambientLight intensity={2} />

      <directionalLight castShadow position={[6, 4, 6]} intensity={0.8}>
        {debug && <Helper type={DirectionalLightHelper} args={[1, 'cyan']} />}
      </directionalLight>

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
    </Suspense>
  )
}
