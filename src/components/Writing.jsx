import { writing } from '../data.js'

export default function Writing() {
  return (
    <section id="writing" className="section">
      <div className="container">
        <p className="section__label">Writing</p>
        <h2 className="section__title">
          Notes on marketing, GTM, and building SaaS.
        </h2>

        <div className="writing__grid">
          {writing.map((post) => (
            <article className="write-card" key={post.title}>
              <p className="write-card__meta">{post.meta}</p>
              <h3 className="write-card__title">{post.title}</h3>
              <p className="write-card__excerpt">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
