import type { FolderParams, Tuple3 } from '@/types/controls'

export const dlConfigs = {
  dl_intensity: 1,
  dl_position: [6, 4, 6] as Tuple3,
  dlh_size: 0.6,
  dlh_color: 'cyan',
}

export const dlControls: FolderParams[0] = {
  dl_intensity: {
    value: dlConfigs.dl_intensity,
    min: 0.5,
    max: 3,
    step: 0.1,
  },
  dl_position: dlConfigs.dl_position,
  dlh_size: dlConfigs.dlh_size,
  dlh_color: dlConfigs.dlh_color,
}
