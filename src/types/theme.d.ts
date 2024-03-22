import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    text: {
      neon: boolean
      shadow: boolean
    }
    threeD: {
      spotlight: boolean
      imageZoom: boolean
      float: boolean
    }
  }
}
