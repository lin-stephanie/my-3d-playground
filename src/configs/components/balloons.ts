import { colors } from '@/configs/colors'
import type { FolderParams, Tuple2, Tuple3 } from '@/types/controls'

export const bConfigs = {
  b_position: [6.2, -2.5, 0] as Tuple3,
  b_rotation: [0, 0, 0.1] as Tuple3,
  b_scale: 0.36,
  b_color1: colors.red[800],
  b_position1: [-1.5, 0.1, 2] as Tuple3,
  b_rotation1: [0, 0, 0.3] as Tuple3,
  b_scale1: 1,
  b_color2: colors.red[300],
  b_position2: [0, 0, 6] as Tuple3,
  b_rotation2: [0, 0, 0] as Tuple3,
  b_scale2: 1,
  b_color3: colors.red[100],
  b_position3: [1.5, 0.2, 4] as Tuple3,
  b_rotation3: [0, 0, -0.3] as Tuple3,
  b_scale3: 1,
  bf_speed: 1,
  bf_rotationIntensity: 0.1,
  bf_floatIntensity: 3,
  bf_floatingRange: [-0.1, 0.1] as Tuple2,
}

export const bControls: FolderParams[0] = {
  ...bConfigs,
  b_scale: {
    value: bConfigs.b_scale,
    min: 0,
    max: 1,
    step: 0.01,
  },
  b_scale1: {
    value: bConfigs.b_scale1,
    min: 0,
    max: 2,
    step: 0.1,
  },
  b_scale2: {
    value: bConfigs.b_scale2,
    min: 0,
    max: 2,
    step: 0.1,
  },
  b_scale3: {
    value: bConfigs.b_scale3,
    min: 0,
    max: 2,
    step: 0.1,
  },
  bf_speed: {
    value: bConfigs.bf_speed,
    min: 0,
    max: 2,
    step: 0.1,
  },
  bf_rotationIntensity: {
    value: bConfigs.bf_rotationIntensity,
    min: 0,
    max: 1,
    step: 0.05,
  },
  bf_floatIntensity: {
    value: bConfigs.bf_floatIntensity,
    min: 0,
    max: 10,
    step: 1,
  },
  bf_floatingRange: {
    value: bConfigs.bf_floatingRange,
    joystick: 'invertY',
    step: 0.1,
  },
}
