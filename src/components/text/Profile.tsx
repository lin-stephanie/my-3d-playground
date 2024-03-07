import styled, { keyframes } from 'styled-components'

import { useTheme } from 'styled-components'

const neonAnimation = keyframes`
  0%, 100% {
    color: ${(props) => props.theme.colors.yellow[200]};
    text-shadow:
      0 0 0.2vw #dc2626,
      0 0 0.3vw #dc2626,
      -0.2vw 0.2vw 0.2vw #ca8a04;
  }
  50% {
    color: #fefce8;
    text-shadow: 0 0 0.1vw #a16207;
  }
`
const StyledP = styled.p`
  color: ${(props) => props.theme.colors.yellow[200]};
  font-family: 'neon';
  font-size: 1.1rem;
  line-height: 90px;
  letter-spacing: 1px;
  text-shadow: -0.2vw 0.2vw 0.2vw #ca8a04;

  animation: ${neonAnimation} 6s ease-in-out infinite;
`

const Profile = () => {
  const theme = useTheme()
  console.log('theme3: ', theme)
  return (
    <StyledP>{`<A food-loving, self-taught front-end developer />`}</StyledP>
  )
}

export default Profile
