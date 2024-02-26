export default function Overlay() {
  return (
    <section>
      <div className="text__container">
        <div>
          {/* 方式1（背景阴影）：通过创建两个兄弟元素分别创建层叠上下文并设置不同的z-index */}
          {/* <h2 className="text__greet text--gradient">Hey there, I am</h2>
          <h2 className="text--shadow">Hey there, I am</h2> */}

          {/* 方式2（背景阴影）：通过两个伪元素在同一个层叠上下文中 */}
          <h2
            className="text__greet text--gradient"
            data-text="Hey there, I am"
          >
            Hey there, I am
          </h2>
        </div>
        <div>
          {/* <h1 className="text__name text--gradient">Stephanie Lin</h1>
          <h1 className="text--shadow">Stephanie Lin</h1> */}

          <h1 className="text__name text--gradient" data-text="Stephanie Lin">
            Stephanie Lin
          </h1>
        </div>
      </div>
    </section>
  )
}
