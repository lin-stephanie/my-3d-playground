import styled, { keyframes } from 'styled-components'

const neonAnimation = keyframes`
  0%, 100% {
    color: #fef08a;
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
  color: #fef08a;
  font-family: 'neon';
  font-size: 1.1rem;
  line-height: 90px;
  letter-spacing: 1px;
  text-shadow: -0.2vw 0.2vw 0.2vw #ca8a04;

  animation: ${neonAnimation} 6s ease-in-out infinite;
`

const Profile = () => (
  <StyledP>{`<A food-loving, self-taught front-end developer />`}</StyledP>
)

export default Profile
