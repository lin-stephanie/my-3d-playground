import styled, { css } from 'styled-components'

const gradientStyles = css`
  position: relative;

  color: transparent;
  white-space: nowrap;

  &::before {
    content: attr(data-text);

    position: absolute;
    top: 4%;
    left: -0.5%;

    color: black;
    white-space: nowrap;
    text-shadow:
      -1px -1px 3px #ff8080,
      -1px -1px 3px #fee2e2;
  }

  &::after {
    content: attr(data-text);

    position: absolute;
    top: 0%;
    left: 0%;

    background: linear-gradient(120deg, #561410 0%, #f87171 75%, #fecaca 100%);
    background-clip: text;

    white-space: nowrap;
  }
`

const StyledH1 = styled.h1`
  ${gradientStyles}

  margin: 0;

  font-size: 7rem;
  letter-spacing: 3px;
`

const StyledH2 = styled.h2`
  ${gradientStyles}

  margin-left: 248px;

  font-size: 4rem;
  letter-spacing: 1px;
`

const Greeting = () => (
  <>
    <StyledH2 data-text="Hey there, I am">Hey there, I am</StyledH2>
    <StyledH1 data-text="Stephanie Lin">Stephanie Lin</StyledH1>
  </>
)

export default Greeting
