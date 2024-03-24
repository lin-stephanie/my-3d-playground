import type { FolderParams, Tuple2, Tuple3 } from '@/types/controls'

export const pfConfigs = {
  f_position: [0, 0, 0.18] as Tuple3,
  f_scale: [0.25, 0.19, 0.25] as Tuple3,
  p_position: [-0.01, 0, 0.18] as Tuple3,
  p_scale: [2, 2.6] as Tuple2,
  pf_position: [-2.8, 1.6, 0] as Tuple3,
  pf_rotation: [0, 0, 0.05] as Tuple3,
  pf_scale: 0.58,
}

export const pfControls: FolderParams[0] = {
  f_position: pfConfigs.f_position,
  f_scale: pfConfigs.f_scale,
  p_position: pfConfigs.p_position,
  p_scale: {
    value: pfConfigs.p_scale,
    joystick: 'invertY',
    step: 0.1,
  },
  pf_position: pfConfigs.pf_position,
  pf_rotation: pfConfigs.pf_rotation,
  pf_scale: {
    value: pfConfigs.pf_scale,
    min: 0,
    max: 1,
    step: 0.01,
  },
}
