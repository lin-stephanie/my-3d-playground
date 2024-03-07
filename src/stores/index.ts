import { create } from 'zustand'
import { createThemeSlice } from './slices/theme'
import type { ThemeSlice } from './slices/theme'
import { createSelectors } from './createSelectors'

const useStoreBase = create<ThemeSlice>()((...a) => ({
  ...createThemeSlice(...a),
}))

export const useStore = createSelectors(useStoreBase)
