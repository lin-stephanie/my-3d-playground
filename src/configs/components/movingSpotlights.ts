import { colors } from '@/configs/colors'
import type { FolderParams, Tuple3 } from '@/types/controls'

export const slConfigs = {
  sl_color: colors.red[200],
  sl_position: [0, 3.3, 2] as Tuple3,
  sl_position1: [-7, 0, 0] as Tuple3,
  sl_position2: [0, 0, 0] as Tuple3,
  sl_position3: [7, 0, 0] as Tuple3,
}

export const slControls: FolderParams[0] = slConfigs
