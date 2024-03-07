import { Html } from '@react-three/drei'
import styled, { ThemeProvider } from 'styled-components'
import { useStore } from '@/stores'
import Greeting from './Greeting'
import Profile from './Profile'

// type HtmlProps = React.ComponentProps<typeof Html>

const StyledHtml = styled(Html)`
  pointer-events: none;
`

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  margin-top: 6%;

  font-family: 'Rubik Wet Paint', system-ui, sans-serif;
`

const Introduction = () => {
  const themeConfig = useStore.use.themeConfig()

  return (
    <StyledHtml center>
      <ThemeProvider theme={themeConfig}>
        <StyledDiv>
          <Greeting />
          <Profile />
        </StyledDiv>
      </ThemeProvider>
    </StyledHtml>
  )
}

export default Introduction
