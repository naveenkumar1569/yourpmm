import { Link } from 'react-router-dom'
import { products } from '../data.js'

function ProductRow({ p }) {
  return (
    <article
      className={`prod ${p.featured ? 'prod--featured' : ''}`}
      style={{ '--accent': p.accent }}
    >
      <div className="prod__top">
        <div className="prod__head">
          <h3 className="prod__name">
            {p.logo ? (
              <img
                className={`brandlogo brandlogo--card ${p.logoDark ? 'brandlogo--dark' : ''}`}
                src={p.logo}
                alt={p.name}
              />
            ) : (
              p.name
            )}
          </h3>
          {p.wip && <span className="prod__badge">In development</span>}
        </div>
        <div className="prod__metric">
          <div className="prod__num">{p.metric}</div>
          <div className="prod__numl">{p.metricLabel}</div>
        </div>
      </div>

      <p className="prod__tag">{p.tagline}</p>
      {p.blurb && <p className="prod__blurb">{p.blurb}</p>}

      {p.highlights && (
        <ul className="prod__highlights">
          {p.highlights.map((h) => (
            <li className="prod__hl" key={h}>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="prod__foot">
        <div className="prod__tags">
          {p.tags.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="prod__links">
          <Link className="textlink" to={`/work/${p.slug}`}>
            Read the story <span className="arw">→</span>
          </Link>
          {p.link && (
            <a
              className="textlink textlink--muted"
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site <span className="arw">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Building() {
  return (
    <section id="building" className="secx reveal">
      <div className="shell">
        <p className="eyebrow">Building</p>
        <h2 className="secx__title">
          Products I’ve built and marketed from scratch.
        </h2>
        <p className="secx__intro">
          Outside Zoho, I build AI-native SaaS. Marketing my own products, from
          the first user to the pricing page, has made me a sharper marketer.
        </p>

        <div className="prods">
          {products.map((p) => (
            <ProductRow key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
