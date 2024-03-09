import type { StateCreator } from 'zustand'
import type { DefaultTheme } from 'styled-components'
import { darkThemeConfig, lightThemeConfig } from '@/configs/theme'

export type ThemeSetting = 'light' | 'dark' | 'system'
export type systemThemeSetting = 'light' | 'dark' | undefined

export interface ThemeSlice {
  theme: ThemeSetting
  systemTheme: systemThemeSetting
  themeConfig: DefaultTheme

  setSystemTheme: () => void
  setThemeConfig: (theme: ThemeSetting) => void
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  theme: 'dark',
  systemTheme: undefined,
  themeConfig: darkThemeConfig,

  /* simpler when not relying on state */
  setSystemTheme: () => {
    const newSystemTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    set({ systemTheme: newSystemTheme })
  },

  /* more applicable when relying on state */
  /* setSystemTheme: () =>
    set(() => {
      const newSystemTheme =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      return { systemTheme: newSystemTheme }
    }), */

  setThemeConfig: (theme: ThemeSetting) =>
    set((state) => {
      const newThemeConfig =
        theme === 'light'
          ? lightThemeConfig
          : theme === 'dark'
            ? darkThemeConfig
            : state.systemTheme === 'dark'
              ? darkThemeConfig
              : lightThemeConfig

      return { theme, themeConfig: newThemeConfig }
    }),
})
