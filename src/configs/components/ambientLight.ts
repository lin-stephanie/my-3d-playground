import type { FolderParams } from '@/types/controls'

export const alConfigs = {
  al_intensity: 2.2,
}

export const alControls: FolderParams[0] = {
  al_intensity: {
    value: alConfigs.al_intensity,
    min: 1,
    max: 3,
    step: 0.1,
  },
}
