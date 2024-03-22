import type { DefaultTheme } from 'styled-components'

export const darkThemeConfig: DefaultTheme = {
  text: {
    neon: false,
    shadow: false,
  },
  threeD: {
    spotlight: false,
    imageZoom: false,
    float: false,
  },
}

export const lightThemeConfig: DefaultTheme = {
  text: {
    neon: true,
    shadow: true,
  },
  threeD: {
    spotlight: true,
    imageZoom: true,
    float: true,
  },
}
