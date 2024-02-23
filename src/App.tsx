import { Suspense } from 'react'
import Scene from './Scene'
import Overlay from './Overlay'

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Scene />
      <Overlay />
    </Suspense>
  )
}
