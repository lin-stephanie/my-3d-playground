import 'styled-components'

interface GeneralTheme {
  colors: {
    /* err: A record is preferred over an index signature. eslint(@typescript-eslint/consistent-indexed-object-style) */
    // red: { [key: number]: string }
    red: Record<number, string>
    yellow: Record<number, string>
    stone: Record<number, string>
    gray: Record<number, string>
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
