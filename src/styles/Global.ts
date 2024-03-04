import 'normalize.css'

import '@/assets/fonts/RubikWetPaint/RubikWetPaint.css'
import '@/assets/fonts/Neon/Neon.css'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    padding: 0;
    margin: 0;
  }

  html,
  body,
  #root {
    overflow: hidden;

    width: 100%;
    height: 100%;

    user-select: none;
  }

  body {
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
export default GlobalStyle
