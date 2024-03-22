import { useControls, folder } from 'leva'

export type Tuple2 = [number, number]
export type Tuple3 = [number, number, number]
export type FolderParams = Parameters<typeof folder>
export type useControlsReturn = ReturnType<typeof useControls>
export type CompControls = Record<string, ReturnType<typeof folder>>
