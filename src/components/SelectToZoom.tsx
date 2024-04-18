// import { useBounds } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import type { GroupProps } from '@react-three/fiber'

const SelectToZoom = ({ children }: GroupProps) => {
  // const api = useBounds()

  const spring = useSpring({
    to: { position: [0, 0, 0] },
    from: { position: [0, 3, 0] },
    delay: 1000,
    config: { duration: 300 },
  })

  return (
    <a.group
      position={spring.position.to((x, y, z) => [x, y, z])}

      /* onClick={(e) => (
        console.log(e),
        e.stopPropagation(),
        api.refresh(e.object).reset().fit().clip()
      )}

      onPointerMissed={(e) => {
        console.log(e)
        if (e.button === 0) {
          console.log(1)
          // api.refresh().reset().fit()
          api
            .refresh()
            .moveTo([0, 0, 10])
            .lookAt({ target: [0, 0, 0], up: [0, 1, 0] })
            .fit()
            .clip()
        }
      }} */
    >
      {children}
    </a.group>
  )
}

export default SelectToZoom
