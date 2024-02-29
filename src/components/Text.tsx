import { Html } from '@react-three/drei'

// type HtmlProps = React.ComponentProps<typeof Html>

const Text = () => {
  return (
    <Html center wrapperClass="html__wrapper">
      <div className="text__container">
        <h2 className="text__greet text--gradient" data-text="Hey there, I am">
          Hey there, I am
        </h2>
        <h1 className="text__name text--gradient" data-text="Stephanie Lin">
          Stephanie Lin
        </h1>
        <p className="text__intro text--neon">{`<A food-loving, self-taught front-end developer />`}</p>
      </div>
    </Html>
  )
}

export default Text
