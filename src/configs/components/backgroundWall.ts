import { colors } from '@/configs/colors'
import type { FolderParams, Tuple3 } from '@/types/controls'

export const bwConfigs = {
  bw_wall: 'wallUrl1',
  bw_color: colors.stone[700],
  bw_position: [0, 0, 0] as Tuple3,
}

export const bwControls: FolderParams[0] = {
  bw_wall: {
    value: 'wallUrl1',
    options: ['wallUrl1', 'wallUrl2', 'wallUrl3', 'wallUrl4'],
  },
  bw_color: colors.stone[700],
  bw_position: [0, 0, 0] as Tuple3,
}
