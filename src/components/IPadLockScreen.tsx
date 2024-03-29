import { useState, useEffect } from 'react'
import { Html } from '@react-three/drei'
import styled from 'styled-components'

interface StyledHtmlProps {
  $screensaverUrl: string
}

type HtmlProps = React.ComponentProps<typeof Html>

export type IPadLockScreenProps = HtmlProps & StyledHtmlProps

const StyledHtml = styled(Html)<StyledHtmlProps>`
  width: 86px;
  height: 64.6px;
  border-radius: 2%;

  background: url(${(props) => props.$screensaverUrl}) no-repeat center center;
  background-size: cover;

  line-height: 0.9;

  pointer-events: none;
`

const ScreenContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: -2px;

  height: 100%;
  width: 100%;

  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
`

const DateDisplay = styled.div`
  margin-top: 6%;
  font-size: 0.12rem;
`

const TimeDisplay = styled.div`
  font-size: 0.65rem;
  font-weight: 600;
`

const UnlockIndicator = styled.div`
  position: absolute;
  bottom: -1%;

  width: 25%;
  height: 1px;

  background-color: white;

  transform: scaleY(0.3);
`

const IPadLockScreen = ({ ...props }: IPadLockScreenProps) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const formatDate = (time: Date) => {
    return time.toLocaleDateString('en-US' /* undefined */, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatTime = (time: Date) => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      // second: '2-digit',
      hour12: false,
    })
  }

  return (
    <StyledHtml center transform occlude {...props}>
      <ScreenContainer>
        <DateDisplay>{formatDate(currentTime)}</DateDisplay>
        <TimeDisplay>{formatTime(currentTime)}</TimeDisplay>
        <UnlockIndicator />
      </ScreenContainer>
    </StyledHtml>
  )
}

export default IPadLockScreen
