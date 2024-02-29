import { Suspense } from 'react'
import Scene from './Scene'

export default function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            fontSize: '100px',
            textAlign: 'center',
          }}
        >
          Loading...
        </div>
      }
    >
      <Scene />
    </Suspense>
  )
}
