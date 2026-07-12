import { Link } from 'react-router-dom'
import { zoho } from '../data.js'

export default function Zoho() {
  return (
    <section id="experience" className="secx zoho reveal">
      <div className="shell">
        <div className="zoho-panel">
          <div className="zoho-head">
            <img className="zoho-logo" src="/logos/zoho.svg" alt="Zoho" />
            <span className="zoho-badge">Primary experience · 2016 — Present</span>
          </div>

          <h2 className="zoho-title">{zoho.title}</h2>

          <div className="prose">
            {zoho.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="suite">
            {zoho.suite.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="statgrid">
            {zoho.stats.map((s) => (
              <div className="statc" key={s.label}>
                <div className="statc__n">{s.num}</div>
                <div className="statc__l">{s.label}</div>
              </div>
            ))}
          </div>

          <Link className="btn-solid" to={`/work/${zoho.caseSlug}`}>
            Read the full Zoho story <span className="arw">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
