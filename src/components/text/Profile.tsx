import styled, { keyframes } from 'styled-components'
import type { DefaultTheme } from 'styled-components'

const createNeonAnimation = (theme: DefaultTheme) => keyframes`
  0%, 100% {
    color: ${theme.colors.yellow[200]};
    text-shadow:
      0 0 0.2vw ${theme.colors.red[600]},
      0 0 0.3vw ${theme.colors.red[600]},
      -0.2vw 0.2vw 0.2vw ${theme.colors.yellow[600]};
  }
  50% {
    color: ${theme.colors.yellow[50]};
    text-shadow: 0 0 0.1vw ${theme.colors.yellow[700]};
  }
`
const StyledP = styled.p`
  color: ${(props) => props.theme.colors.yellow[200]};
  font-family: 'neon';
  font-size: 1.1rem;
  line-height: 90px;
  letter-spacing: 1px;
  text-shadow: -0.2vw 0.2vw 0.2vw ${(props) => props.theme.colors.yellow[700]};

  animation: 6s ${(props) => createNeonAnimation(props.theme)} ease-in-out
    infinite;
`

const Profile = () => (
  <StyledP>{`<A food-loving, self-taught front-end developer />`}</StyledP>
)

export default Profile
