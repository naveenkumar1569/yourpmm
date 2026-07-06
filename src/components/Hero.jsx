export default function Hero() {
  return (
    <section id="top" className="hero">
      <video
        className="hero__video"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <div className="container hero__inner">
        <h1 className="hero__title">
          A product marketer <br />
          who likes to <em>build.</em>
        </h1>
      </div>
    </section>
  )
}
