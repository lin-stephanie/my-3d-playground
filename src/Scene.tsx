import { Suspense, useState } from 'react'
import { DirectionalLightHelper } from 'three'
import { OrbitControls, Helper } from '@react-three/drei'

import { useStore } from '@/stores'
import { useThemeSystem, useDebugListener } from '@/hooks'
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

  /* components controls gui */
  const [configs, setConfigs] = useState(compConfigs)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleControlsChange = (controls: any) => {
    setConfigs(controls)
  }

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
        position={configs.b_position}
        rotation={configs.b_rotation}
        scale={configs.b_scale}
      />
    </Suspense>
  )
}
