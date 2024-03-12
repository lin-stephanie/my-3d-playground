import { Html, useProgress } from '@react-three/drei'
import styled from 'styled-components'

type HtmlProps = React.ComponentProps<typeof Html>

type LoaderProps = HtmlProps & {
  loadingUrl: string
}

const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  /* background: #26221f; */
  background: #1b1815;

  color: white;
  font-size: 1.2rem;
  font-family:
    Rubik Wet Paint,
    Tahoma,
    system-ui,
    sans-serif;
`

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledImage = styled.img`
  width: 180px;
`

const Loader = ({ loadingUrl, ...props }: LoaderProps) => {
  const progress = useProgress((state) => state.progress)

  return (
    <Html center {...props}>
      <LoaderContainer>
        <StyledDiv>{Math.round(progress)} %</StyledDiv>
        <StyledImage src={loadingUrl} alt="Loading" />
      </LoaderContainer>
    </Html>
  )
}

export default Loader
