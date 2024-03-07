import 'styled-components'

interface GeneralTheme {
  colors: {
    red: {
      50: string
      100: string
      200: string
      300: string
      350: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
      940: string
      950: string
    }
    yellow: {
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
      950: string
    }
    stone: {
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
      950: string
    }
    gray: {
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
      950: string
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends GeneralTheme {
    text: {
      shadowAnimation: boolean
    }
    threeD: {
      spotlight: boolean
      imageZoom: boolean
    }
  }
}
