import styled, { keyframes, css } from 'styled-components'
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
  color: ${({ theme }) =>
    theme.text.neon ? theme.colors.yellow[200] : theme.colors.yellow[50]};
  font-family: 'neon';
  font-size: 1.1rem;
  line-height: 90px;
  letter-spacing: 1px;
  /* text-shadow: -0.2vw 0.2vw 0.2vw ${(props) =>
    props.theme.colors.yellow[700]}; */
  text-shadow: -0.2vw 0.2vw 0.2vw
    ${({ theme }) => (theme.text.neon ? theme.colors.yellow[700] : 'none')};

  /* corr */
  /* animation: 6s ${(props) => createNeonAnimation(props.theme)} ease-in-out */

  /* err: styled-components.js?v=9d6b6166:843 Uncaught Error: It seems you are interpolating a keyframe declaration
  (hufiPi) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as
  keyframes are now injected on-demand. Please wrap your string in the css\`\` helper which ensures the styles are
  injected correctly.  */
  /* https://styled-components.com/docs/api#css */
  /* animation: ${({ theme }) =>
    theme.text.neon
      ? `6s ${createNeonAnimation(theme)} ease-in-out infinite`
      : 'none'}; */

  /* corr */
  /* animation: ${({ theme }) =>
    theme.text.neon
      ? css`6s ${createNeonAnimation(theme)} ease-in-out infinite`
      : 'none'}; */
  ${({ theme }) =>
    theme.text.neon &&
    css`
      animation: 6s ${createNeonAnimation(theme)} ease-in-out infinite;
    `}
`

const Profile = () => {
  return (
    <StyledP>{`<A food-loving, self-taught front-end developer />`}</StyledP>
  )
}

export default Profile
