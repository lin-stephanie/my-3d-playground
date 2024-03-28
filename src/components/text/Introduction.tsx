import { Html } from '@react-three/drei'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import { useStore } from '@/stores'
import Greeting from './Greeting'
import Profile from './Profile'

// type HtmlProps = React.ComponentProps<typeof Html>

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledHtml = styled(Html)`
  pointer-events: auto;
`

const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  margin-top: 15%;

  opacity: 0;

  font-family:
    Rubik Wet Paint,
    Tahoma,
    system-ui,
    sans-serif;

  animation: 1s ${fadeIn} linear forwards;

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
