import { Suspense, useState } from 'react'
import { DirectionalLightHelper } from 'three'
import { OrbitControls, Helper } from '@react-three/drei'

import { useStore } from '@/stores'
import { useThemeSystem, useDebugListener, useResponsive } from '@/hooks'
import { consoleLog } from '@/utils'
import { compConfigs } from '@/configs/components'
import { assets } from '@/configs/assets'

import BackgroundWall from '@/components/BackgroundWall'
import Introduction from '@/components/text/Introduction'
import MovingSpotlights from '@/components/MovingSpotlights'
import PhotoFrame from '@/components/PhotoFrame'
import Balloons from '@/components/Balloons'
import Loader from '@/components/Loader'
import ControlsPanel from '@/components/ControlsPanel'

export default function Scene() {
  const debug = useStore.use.debug()

  /* effect: listen for system theme changes via media queries (prefers-color-scheme: dark) */
  useThemeSystem()

  /* effect: listen for path changes to debug to enable debug mode */
  useDebugListener()
  consoleLog(debug, 'debug', debug)

  /* controls */
  const [configs, setConfigs] = useState(compConfigs)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleControlsChange = (controls: any) => {
    setConfigs(controls)
  }

  /* responsive */
  /* const viewport = useThree((state) => state.viewport)
  const sceneWidthFactor = Math.min(Math.max(window.innerWidth / 1536, 0.5), 2)
  // const sceneHeightFactor = Math.min(Math.max(window.innerHeight / 738, 0.5), 2)
  const ballonsScaleFactor = Math.min(
    Math.max(window.innerHeight / 750, 0.8),
    1.5
  )
  console.log(window.innerWidth, viewport.width)
  const isXl = window.innerWidth < 1280 // 1280 is the breakpoint for mobile devices (xl tailwind)
  const isLg = window.innerWidth < 1024 // 1024 is the breakpoint for mobile devices (lg tailwind)
  const isMd = window.innerWidth < 768 // 768 is the breakpoint for mobile devices (md tailwind)
  const isSm = window.innerWidth < 576 */

  const {
    viewportWidth,
    viewportHeight,
    sceneWidthFactor,
    sceneHeightFactor,
    isXl,
    isLg,
    isMd,
    isSm,
  } = useResponsive()

  return (
    <Suspense fallback={<Loader loadingUrl={assets.loadingUrl} />}>
      {debug && <ControlsPanel onControlsChange={handleControlsChange} />}

      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />

      <ambientLight intensity={configs.al_intensity} />

      <directionalLight
        castShadow
        intensity={configs.dl_intensity}
        position={configs.dl_position}
      >
        {debug && (
          <Helper
            type={DirectionalLightHelper}
            args={[configs.dlh_size, configs.dlh_color]}
          />
        )}
      </directionalLight>

      <MovingSpotlights
        spotlights={[
          { color: configs.sl_color, position: configs.sl_position1 },
          { color: configs.sl_color, position: configs.sl_position2 },
          { color: configs.sl_color, position: configs.sl_position3 },
        ]}
        position={configs.sl_position}
      />

      <BackgroundWall
        receiveShadow
        wallUrl={assets[configs.bw_wall]}
        color={configs.bw_color}
        position={configs.bw_position}
      >
        <Introduction />
      </BackgroundWall>

      <group scale={sceneWidthFactor}>
        <PhotoFrame
          modelUrl={assets.frameModel}
          matcapUrl={assets.frameMatcapUrl}
          photoUrl={assets.photoUrl}
          framePos={configs.f_position}
          frameScale={configs.f_scale}
          photoPos={configs.p_position}
          photoScale={configs.p_scale}
          position={configs.pf_position}
          rotation={configs.pf_rotation}
          scale={configs.pf_scale}
        />
      </group>

      <Balloons
        modelUrl={assets.balloonModel}
        matcapUrl={assets.balloonMatcapUrl}
        balloons={[
          {
            themeType: 'dark',
            position: configs.b_position1,
            rotation: configs.b_rotation1,
            scale: configs.b_scale1,
            color: configs.b_color1,
          },
          {
            themeType: 'system',
            position: configs.b_position2,
            rotation: configs.b_rotation2,
            scale: configs.b_scale2,
            color: configs.b_color2,
          },
          {
            themeType: 'light',
            position: configs.b_position3,
            rotation: configs.b_rotation3,
            scale: configs.b_scale3,
            color: configs.b_color3,
          },
        ]}
        floatConfig={{
          speed: configs.bf_speed,
          rotationIntensity: configs.bf_rotationIntensity,
          floatIntensity: configs.bf_floatIntensity,
          floatingRange: configs.bf_floatingRange,
        }}
        position={
          [
            /* isXs
              ? configs.b_position[0] * sceneWidthFactor * 0.35
              : isSm
                ? configs.b_position[0] * sceneWidthFactor * 0.6
                : isMd
                  ? configs.b_position[0] * sceneWidthFactor * 0.65
                  : isLg
                    ? configs.b_position[0] * sceneWidthFactor * 0.8
                    : isXl
                      ? configs.b_position[0] * sceneWidthFactor * 0.9
                      : configs.b_position[0] * sceneWidthFactor, */
            isMd ? viewportWidth * 0.28 : viewportWidth * 0.4,
            /* isSm
              ? configs.b_position[1] * sceneHeightFactor * 1.15
              : isMd
                ? configs.b_position[1] * sceneHeightFactor * 1.1
                : isLg
                  ? configs.b_position[1] * sceneHeightFactor * 1.05
                  : isXl
                    ? configs.b_position[1] * sceneHeightFactor * 1.05
                    : configs.b_position[1] * sceneHeightFactor, */
            isMd ? -viewportHeight * 0.385 : -viewportHeight * 0.34,
            configs.b_position[2],
          ]
          // [6.2, -2.5, 0]
          // configs.b_position
        }
        rotation={configs.b_rotation}
        scale={
          isSm
            ? configs.b_scale * sceneHeightFactor * 0.65
            : isMd
              ? configs.b_scale * sceneHeightFactor * 0.75
              : isLg
                ? configs.b_scale * sceneHeightFactor * 0.85
                : isXl
                  ? configs.b_scale * sceneHeightFactor * 0.95
                  : configs.b_scale * sceneHeightFactor
        }
      />
    </Suspense>
  )
}
