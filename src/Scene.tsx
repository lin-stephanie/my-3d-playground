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
import Pegboard from '@/components/Pegboard'
import IPad from '@/components/IPad'
import Earphone from '@/components/Earphone'

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
        <Pegboard
          modelUrl={assets.pegboardModel}
          matcapUrl={assets.pegboardMatcapUrl}
          position={[1.9, -0.7, 0.1]}
          rotation={[0, 0, 0]}
          scale={[6.1, 3, 1]}
          hooksConfig={{
            hook1: { position: [0.121, 1.07, 0.014] },
            hook2: { position: [0.184, 1.088, 0.014] },
          }}
          holdersConfig={{
            holder1: { position: [-0.196, 0.752, 0.014] },
            holder2: { position: [-0.154, 0.752, 0.014] },
          }}
        >
          <IPad
            modelUrl={assets.iPadModel}
            lockScreenConfig={{
              position: [-0.002, 0.004, 0.002],
              rotation: [0, 0, Math.PI / 2],
              distanceFactor: 10,
              $screensaverUrl: assets.screensaverUrl,
            }}
            position={[-2.87, 3.7, 0.05]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.585, 0.625, 0.55]}
          />
          <Earphone
            modelUrl={assets.earphoneModel}
            matcapUrl={assets.earphoneMatcapUrl}
            position={[0.62, 2.45, 0.22]}
            rotation={[-1.7, -2.12, 1.55]}
            scale={0.146}
          />
        </Pegboard>
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
        position={[
          isMd ? viewportWidth * 0.28 : viewportWidth * 0.4,
          isMd ? -viewportHeight * 0.385 : -viewportHeight * 0.34,
          configs.b_position[2],
        ]}
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
