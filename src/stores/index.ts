import { create } from 'zustand'
import { createSelectors } from './createSelectors'
import { createThemeSlice, type ThemeSlice } from './slices/theme'
import { createDebugSlice, type DebugSlice } from './slices/debug'

const useStoreBase = create<ThemeSlice & DebugSlice>()((...a) => ({
  ...createThemeSlice(...a),
  ...createDebugSlice(...a),
}))

export const useStore = createSelectors(useStoreBase)
