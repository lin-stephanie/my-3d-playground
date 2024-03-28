import styled, { css } from 'styled-components'
import { colors } from '@/configs/colors'

const gradientStyles = css`
  position: relative;

  color: transparent;
  white-space: nowrap;

  &::before {
    content: attr(data-text);

    position: absolute;
    top: 4%;
    left: -0.6%;

    color: black;
    white-space: nowrap;
    text-shadow:
      -1px -1px 3px ${colors.red[350]},
      -1px -1px 3px
        ${({ theme }) =>
          theme.text.shadow ? colors.red[100] : colors.red[950]};
  }

  &::after {
    content: attr(data-text);

    position: absolute;
    top: 0%;
    left: 0%;

    background: linear-gradient(
      120deg,
      ${colors.red[940]} 0%,
      ${colors.red[400]} 75%,
      ${colors.red[200]} 100%
    );
    background-clip: text;

    white-space: nowrap;
  }
`
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const StyledP = styled.p`
  ${gradientStyles}

  font-size: 4rem;
  letter-spacing: 1px;

  @media (max-width: 1280px) {
    font-size: 3.2rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.7rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
    letter-spacing: 0.5px;
  }

  @media (max-width: 460px) {
    font-size: 1.8rem;
    letter-spacing: 0.5px;
  }
`

const StyledH1 = styled.h1`
  ${gradientStyles}

  margin: 0;

  font-size: 7rem;
  letter-spacing: 3px;

  @media (max-width: 1280px) {
    font-size: 5.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 4.2rem;
  }

  @media (max-width: 576px) {
    font-size: 4rem;
    letter-spacing: 1.5px;
  }

  @media (max-width: 460px) {
    font-size: 3rem;
    letter-spacing: 1.5px;
  }
`

const Greeting = () => (
  <StyledDiv>
    <StyledP data-text="Hey there, I am">Hey there, I am</StyledP>
    <StyledH1 data-text="Stephanie Lin">Stephanie Lin</StyledH1>
  </StyledDiv>
)

export default Greeting
