import { Suspense } from 'react'
import Scene from '@/components/Scene'
import Overlay from '@/components/Overlay'

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Scene />
      <Overlay />
    </Suspense>
  )
}
