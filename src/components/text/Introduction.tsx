import { Html } from '@react-three/drei'
import styled, { ThemeProvider } from 'styled-components'
import { useStore } from '@/stores'
import Greeting from './Greeting'
import Profile from './Profile'

// type HtmlProps = React.ComponentProps<typeof Html>

const StyledHtml = styled(Html)`
  pointer-events: none;
`

const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  margin-top: 10%;

  font-family:
    Rubik Wet Paint,
    Tahoma,
    system-ui,
    sans-serif;

  @media (max-width: 1280px) {
    margin-top: 12%;
  }

  @media (max-width: 1024px) {
    margin-top: 14%;
  }

  @media (max-width: 768px) {
    margin-top: 16%;
  }
`

const Introduction = () => {
  const themeConfig = useStore.use.themeConfig()

  return (
    <StyledHtml center>
      <ThemeProvider theme={themeConfig}>
        <IntroContainer>
          <Greeting />
          <Profile />
        </IntroContainer>
      </ThemeProvider>
    </StyledHtml>
  )
}

export default Introduction
