import { Suspense, useContext } from 'react'
import { styled, ThemeProvider } from 'styled-components'
import Scene from './Scene'

import { useStore } from '@/stores'
import { createPortal } from 'react-dom'
import { ThemeContext } from 'styled-components'

const StyledComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.red[500]};
  padding: 20px;
  margin: 20px;
`

export default function App() {
  const themeConfig = useStore.use.themeConfig()

  return (
    <Suspense
      fallback={
        <div
          style={{
            fontSize: '100px',
            textAlign: 'center',
          }}
        >
          Loading...
        </div>
      }
    >
      <ThemeProvider theme={themeConfig}>
        <StyledComponent>TEST</StyledComponent>
        <Scene />
        {createPortal(<Profile />, document.body)}
      </ThemeProvider>
    </Suspense>
  )
}

export function Profile() {
  const theme = useContext(ThemeContext)
  console.log('theme2: ', theme)

  return <div style={{ color: theme?.colors.red[200] }}>Profile Component</div>
}
