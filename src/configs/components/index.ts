import { alConfigs } from './ambientLight'
import { dlConfigs } from './directionalLight'
import { slConfigs } from './movingSpotlights'
import { bwConfigs } from './backgroundWall'
import { pfConfigs } from './photoFrame'
import { bConfigs } from './balloons'

export const compConfigs = {
  ...alConfigs,
  ...dlConfigs,
  ...slConfigs,
  ...bwConfigs,
  ...pfConfigs,
  ...bConfigs,
}
