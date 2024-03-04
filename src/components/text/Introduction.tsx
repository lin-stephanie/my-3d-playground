import { Html } from '@react-three/drei'
import styled from 'styled-components'
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

  color: white;
  font-family: 'Rubik Wet Paint', system-ui, sans-serif;
`

const Introduction = () => {
  return (
    <StyledHtml center>
      <StyledDiv>
        <Greeting />
        <Profile />
      </StyledDiv>
    </StyledHtml>
  )
}

export default Introduction
