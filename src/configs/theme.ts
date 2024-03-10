import type { DefaultTheme } from 'styled-components'
import type { GeneralTheme } from '@/types/theme'

const generalThemeConfig: GeneralTheme = {
  colors: {
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      350: '#ff8080',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      940: '#561410',
      950: '#450a0a',
    },
    yellow: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
      950: '#422006',
    },
    stone: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
      950: '#0c0a09',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
  },
}

export const darkThemeConfig: DefaultTheme = {
  ...generalThemeConfig,
  text: {
    shadowAnimation: false,
  },
  threeD: {
    spotlight: false,
    imageZoom: false,
    float: false,
  },
}

export const lightThemeConfig: DefaultTheme = {
  ...generalThemeConfig,
  text: {
    shadowAnimation: true,
  },
  threeD: {
    spotlight: true,
    imageZoom: true,
    float: true,
  },
}
