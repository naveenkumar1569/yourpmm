import { useEffect, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { caseStudies, caseOrder } from '../data.js'
import useReveal from '../useReveal.js'
import Footer from '../components/Footer.jsx'
import Contact from '../components/Contact.jsx'

// Wrap **key phrases** in an accent highlight so the eye catches them.
function fmt(text) {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? (
      <mark className="hl" key={i}>
        {part}
      </mark>
    ) : (
      part
    ),
  )
}

// Highlight numbers in purple (accent color) and reduce general text weight.
function formatSummary(text) {
  if (!text) return ''
  const regex = /(\b\d+(?:\+|-|%)?|~\d+%|\bTwo\b|\bfive\b|\bzero\b)/i
  return text.split(regex).map((part, i) => {
    if (regex.test(part)) {
      return (
        <span className="glance__highlight" key={i}>
          {part}
        </span>
      )
    }
    return part
  })
}

function StatPills({ stats }) {
  return (
    <div className="statrow">
      {stats.map((s) => (
        <div className="statpill" key={s.label}>
          <span className="statpill__n">{s.num}</span>
          <span className="statpill__l">{s.label}</span>
        </div>
      ))}
    </div>
  )
}

/* ---- Artifact blocks ---- */
function Metrics({ items, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="metrics">
        {items.map((m) => (
          <div className="metric" key={m.label}>
            <div className="metric__n">{m.num}</div>
            <div className="metric__l">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SpecSheet({ items, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="spec">
        {items.map((s) => (
          <div className="spec__cell" key={s.k}>
            <div className="spec__k">{s.k}</div>
            <div className="spec__v">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Timeline({ steps, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <ol className="timeline">
        {steps.map((st, i) => (
          <li className="tl" key={i}>
            <span className="tl__dot" />
            <div className="tl__body">
              <span className="tl__phase">{st.phase}</span>
              <span className="tl__t">{st.t}</span>
              {st.d && <span className="tl__d">{st.d}</span>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Checklist({ items, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="checklist">
        {items.map((it) => (
          <div className="check" key={it}>
            <span className="check__tick">✓</span>
            <span>{it}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Flow({ nodes, title, loop }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="flowx">
        {nodes.map((n, i) => (
          <div className="fstepx" key={i}>
            <span className="fstepx__n">{String(i + 1).padStart(2, '0')}</span>
            <span className="fstepx__t">{n}</span>
          </div>
        ))}
        {loop && (
          <div className="fstepx fstepx--loop">
            <span className="fstepx__n" aria-hidden="true">
              ↻
            </span>
            <span className="fstepx__t">Feeds back to the top</span>
          </div>
        )}
      </div>
    </div>
  )
}

function Bars({ items, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="bars">
        {items.map((b) => (
          <div className="bar" key={b.label}>
            <span className="bar__label">{b.label}</span>
            <span className="bar__track">
              <span className="bar__fill" style={{ width: `${b.value}%` }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Artifacts({ items, title, note }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="artifacts">
        {items.map((it) => (
          <span className="artifact" key={it}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 3v5h5" />
              <path d="M7 3h8l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
            </svg>
            {it}
          </span>
        ))}
      </div>
      {note && <p className="artifacts__note">{note}</p>}
    </div>
  )
}

function Readiness({ pct, items, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="readiness">
        <div className="readiness__head">
          <span className="readiness__pct">{pct}%</span>
          <span className="readiness__cap">launch-ready at GA</span>
        </div>
        <div className="readiness__bar">
          <span style={{ width: `${pct}%` }} />
        </div>
        <div className="readiness__grid">
          {items.map((it) => (
            <div className="rcheck" key={it}>
              <span className="rcheck__t">✓</span>
              {it}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Evolution({ items, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="evo">
        {items.map((it, i) =>
          it.pivot ? (
            <div className="evo__pivot" key={i}>
              <span className="evo__pivotlabel">{it.label}</span>
              <p className="evo__quote">“{it.text}”</p>
            </div>
          ) : (
            <div className="evo__ver" key={i}>
              <span className="evo__tag">
                {it.v} · {it.tag}
              </span>
              <p className="evo__text">{it.text}</p>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

function Decision({ items, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="decision">
        {items.map((c) => (
          <div className="dcell" key={c.k}>
            <span className="dcell__k">{c.k}</span>
            <p className="dcell__v">{fmt(c.v)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Compare({ items, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="compare">
        {items.map((c) => (
          <div className="cmp" key={c.label}>
            <span className="cmp__label">{c.label}</span>
            <div className="cmp__row">
              <span className="cmp__target">Target {c.target}</span>
              <span className="cmp__arrow">→</span>
              <span className="cmp__actual">{c.actual}</span>
            </div>
            {c.delta && <span className="cmp__delta">{c.delta}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

/* Metric → downstream impact chain: connect the dots. */
function Chain({ items, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="chain">
        {items.map((s, i) => (
          <div className="chainstep" key={i}>
            {i > 0 && (
              <div className="chain__link" aria-hidden="true">
                <span className="chain__arw">↓</span>
                {s.via && <span className="chain__via">{s.via}</span>}
              </div>
            )}
            <div className={`cnode ${s.highlight ? 'cnode--hl' : ''}`}>
              {s.list ? (
                <div className="cnode__chips">
                  {s.list.map((c) => (
                    <span className="cnode__chip" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              ) : (
                <>
                  {s.n && <span className="cnode__n">{s.n}</span>}
                  <span className="cnode__v">{fmt(s.v)}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* Senior-PMM decision framing: Risk / Decision / Trade-off / Result. */
function Tradeoff({ items, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className="tradeoff">
        {items.map((c) => (
          <div className={`tocell tocell--${c.tone || 'default'}`} key={c.k}>
            <span className="tocell__k">{c.k}</span>
            <p className="tocell__v">{fmt(c.v)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* Behind-the-scenes: the work behind the work. */
function Process({ items, title }) {
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <ol className="process">
        {items.map((p, i) => (
          <li className="pstep" key={i}>
            <span className="pstep__idx">{String(i + 1).padStart(2, '0')}</span>
            <div className="pstep__body">
              <span className="pstep__t">{p.t}</span>
              {p.d && <span className="pstep__d">{fmt(p.d)}</span>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* A real launch artifact, framed like an internal document. */
function AssetDoc({ asset, title }) {
  const d = asset.doc
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <figure className="asset">
        <div className={`asset__doc ${asset.blur ? 'is-blur' : ''}`}>
          <div className="asset__chrome">
            <span className="asset__dots">
              <i /> <i /> <i />
            </span>
            <span className="asset__file">{asset.file}</span>
            <span className="asset__conf">Internal</span>
          </div>
          {asset.src ? (
            <img className="asset__img" src={asset.src} alt={asset.caption || ''} />
          ) : (
            <div className="asset__page">
              <div className="asset__dochead">
                <span className="asset__doctitle">{d.title}</span>
                {d.badge && <span className="asset__badge">{d.badge}</span>}
              </div>
              {d.positioning && (
                <div className="asset__field">
                  <span className="asset__flabel">Positioning statement</span>
                  <p className="asset__ftext">{d.positioning}</p>
                </div>
              )}
              {d.primary && (
                <div className="asset__field">
                  <span className="asset__flabel">Primary message</span>
                  <p className="asset__ftext asset__ftext--lead">{d.primary}</p>
                </div>
              )}
              {d.pillars && (
                <div className="asset__pillars">
                  {d.pillars.map((p) => (
                    <div className="asset__pillar" key={p.k}>
                      <span className="asset__pk">{p.k}</span>
                      <span className="asset__pv">{p.v}</span>
                    </div>
                  ))}
                </div>
              )}
              {d.proof && (
                <div className="asset__field">
                  <span className="asset__flabel">Proof points</span>
                  <ul className="asset__proof">
                    {d.proof.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        {asset.caption && <figcaption className="asset__cap">{asset.caption}</figcaption>}
      </figure>
    </div>
  )
}

function Videos({ items, title }) {
  const [active, setActive] = useState(null)
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div className={`videos ${items.length === 1 ? 'videos--feature' : ''}`}>
        {items.map((v) => (
          <div className="vid" key={v.id}>
            <div className="vid__frame">
              {active === v.id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
                  title={`${v.company}: ${v.title}`}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button
                  className="vid__thumb"
                  onClick={() => setActive(v.id)}
                  aria-label={`Play video: ${v.company} testimonial`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={`${v.company} customer story`}
                    loading="lazy"
                  />
                  <span className="vid__play" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
            <div className="vid__meta">
              <span className="vid__company">{v.company}</span>
              <span className="vid__title">{v.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Gallery({ items, title }) {
  const cols = Math.min(items.length, 3)
  return (
    <div className="art">
      {title && <p className="art__label">{title}</p>}
      <div
        className="gallery"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {items.map((it, i) => (
          <figure className="shot" key={i}>
            {it.src ? (
              <img className="shot__img" src={it.src} alt={it.caption || ''} />
            ) : (
              <span className="shot__ph">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                <span className="shot__phtext">Image placeholder</span>
              </span>
            )}
            {it.caption && <figcaption className="shot__cap">{it.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </div>
  )
}

function Block({ b }) {
  switch (b.type) {
    case 'metrics':
      return <Metrics items={b.items} title={b.title} />
    case 'spec':
      return <SpecSheet items={b.items} title={b.title} />
    case 'timeline':
      return <Timeline steps={b.steps} title={b.title} />
    case 'checklist':
      return <Checklist items={b.items} title={b.title} />
    case 'flow':
      return <Flow nodes={b.nodes} title={b.title} loop={b.loop} />
    case 'bars':
      return <Bars items={b.items} title={b.title} />
    case 'readiness':
      return <Readiness pct={b.pct} items={b.items} title={b.title} />
    case 'evolution':
      return <Evolution items={b.items} title={b.title} />
    case 'decision':
      return <Decision items={b.items} title={b.title} />
    case 'compare':
      return <Compare items={b.items} title={b.title} />
    case 'chain':
      return <Chain items={b.items} title={b.title} />
    case 'tradeoff':
      return <Tradeoff items={b.items} title={b.title} />
    case 'process':
      return <Process items={b.items} title={b.title} />
    case 'asset':
      return <AssetDoc asset={b.asset} title={b.title} />
    case 'videos':
      return <Videos items={b.items} title={b.title} />
    case 'gallery':
      return <Gallery items={b.items} title={b.title} />
    case 'artifacts':
      return <Artifacts items={b.items} title={b.title} note={b.note} />
    default:
      return (
        <div className="sblock">
          {b.label && <p className="sblock__label">{b.label}</p>}
          {b.pull && <p className="sblock__pull">{fmt(b.pull)}</p>}
          {(b.paras || []).map((p, j) => (
            <p className="sblock__para" key={j}>
              {fmt(p)}
            </p>
          ))}
          {b.list && (
            <ul className="sblock__list">
              {b.list.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          )}
          {b.stats && <StatPills stats={b.stats} />}
        </div>
      )
  }
}

function Story({ s, num, id }) {
  return (
    <div className="story reveal" id={id}>
      <div className="story__head">
        <span className="story__num">{num}</span>
        <div className="story__heading">
          {s.kicker && <p className="story__kicker">{s.kicker}</p>}
          <h3 className="story__title">{s.title}</h3>
        </div>
      </div>
      <div className="story__body">
        {s.blocks.map((b, i) => (
          <Block b={b} key={i} />
        ))}

        {s.reflection && (
          <div className="reflect">
            <p className="reflect__label">What I’d do differently today</p>
            <p className="reflect__text">{fmt(s.reflection)}</p>
          </div>
        )}
      </div>
    </div>
  )
}

/* Artifacts revealed inside the interactive playbook panel. */
function PlaybookArt({ art }) {
  switch (art.type) {
    case 'framework':
      return (
        <div className="pbart pbart--framework">
          {art.rows.map((r) => (
            <div className="pbfw" key={r.k}>
              <span className="pbfw__k">{r.k}</span>
              <span className="pbfw__v">{r.v}</span>
            </div>
          ))}
        </div>
      )
    case 'table':
      return (
        <div className="pbart pbart--table">
          {art.rows.map((r) => (
            <div className="pbrow" key={r.k}>
              <span className="pbrow__k">{r.k}</span>
              <span className="pbrow__dots" aria-hidden="true" />
              <span className="pbrow__v">{r.v}</span>
            </div>
          ))}
          {art.note && <p className="pbart__note">{art.note}</p>}
        </div>
      )
    case 'tiers':
      return (
        <div className="pbart pbart--tiers">
          {art.items.map((t) => (
            <div className="pbtier" key={t.k}>
              <span className="pbtier__k">{t.k}</span>
              <span className="pbtier__v">{t.v}</span>
            </div>
          ))}
        </div>
      )
    case 'battlecard':
      return (
        <div className="pbart pbart--battle">
          <div className="pbbc pbbc--us">
            <span className="pbbc__side">{art.us.label}</span>
            <ul>
              {art.us.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="pbbc pbbc--them">
            <span className="pbbc__side">{art.them.label}</span>
            <ul>
              {art.them.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    case 'checklist':
      return (
        <div className="pbart pbart--check">
          {art.items.map((it) => (
            <div className="pbcheck" key={it}>
              <span className="pbcheck__tick">✓</span>
              <span>{it}</span>
            </div>
          ))}
        </div>
      )
    case 'deep':
      return (
        <div className="pbart">
          <div className={`pbdeep ${art.layout === 'stack' ? 'pbdeep--stack' : ''}`}>
            {art.items.map((it, i) => (
              <div className="pbrec" key={i}>
                {it.tag && <span className="pbrec__tag">{it.tag}</span>}
                {it.head && <p className="pbrec__head">{fmt(it.head)}</p>}
                {(it.lines || []).map((ln, j) => (
                  <p className="pbrec__line" key={j}>
                    {ln.k && <span className="pbrec__k">{ln.k}</span>}
                    <span className="pbrec__v">{fmt(ln.v)}</span>
                  </p>
                ))}
              </div>
            ))}
          </div>
          {art.note && <p className="pbart__note">{fmt(art.note)}</p>}
        </div>
      )
    default:
      return null
  }
}

/* Inside my GTM playbook: a clickable pipeline of every stage I run. */
function Playbook({ lead, stages }) {
  const firstArt = stages.findIndex((s) => s.art)
  const [active, setActive] = useState(firstArt === -1 ? 0 : firstArt)
  const s = stages[active]
  return (
    <div className="playbook">
      {lead && <p className="clead">{fmt(lead)}</p>}
      <div className="pb">
        <div className="pb__rail" role="tablist" aria-label="GTM stages">
          {stages.map((st, i) => (
            <button
              key={st.k}
              role="tab"
              aria-selected={i === active}
              className={`pbchip ${i === active ? 'is-on' : ''} ${st.art ? 'has-art' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="pbchip__n">{String(i + 1).padStart(2, '0')}</span>
              <span className="pbchip__k">{st.k}</span>
              {st.art && <span className="pbchip__dot" aria-hidden="true" />}
            </button>
          ))}
        </div>
        <div className="pb__panel" role="tabpanel">
          <div className="pb__head">
            <span className="pb__stage">{s.k}</span>
            {s.art && <span className="pb__tag">Artifact</span>}
          </div>
          <p className="pb__do">{fmt(s.do)}</p>
          {s.art && <PlaybookArt art={s.art} />}
          <p className="pb__hint">
            Every stage opens the thinking and the artifact behind it. Click any step.
          </p>
        </div>
      </div>
    </div>
  )
}

function GlanceShot({ shot, title }) {
  const shots = shot.shots || [{ src: shot.src, caption: shot.caption }]
  const [i, setI] = useState(0)
  const multi = shots.length > 1
  const current = shots[i]

  return (
    <figure className="glanceshot">
      <div className="glanceshot__frame">
        <img
          className="glanceshot__img"
          src={current.src}
          alt={current.caption || `${title} product screenshot`}
          loading="lazy"
        />
        {multi && (
          <>
            <button
              type="button"
              className="glanceshot__nav glanceshot__nav--prev"
              onClick={() => setI((p) => (p - 1 + shots.length) % shots.length)}
              aria-label="Previous screenshot"
            >
              ‹
            </button>
            <button
              type="button"
              className="glanceshot__nav glanceshot__nav--next"
              onClick={() => setI((p) => (p + 1) % shots.length)}
              aria-label="Next screenshot"
            >
              ›
            </button>
          </>
        )}
      </div>
      {current.caption && <figcaption className="glanceshot__cap">{current.caption}</figcaption>}
      {multi && (
        <div className="glanceshot__dots">
          {shots.map((s, idx) => (
            <button
              type="button"
              key={s.src}
              className={`glanceshot__dot ${idx === i ? 'is-on' : ''}`}
              onClick={() => setI(idx)}
              aria-label={`Show screenshot ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </figure>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const cs = caseStudies[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useReveal([slug])

  if (!cs) return <Navigate to="/" replace />

  const i = caseOrder.indexOf(slug)
  const prevSlug = caseOrder[(i - 1 + caseOrder.length) % caseOrder.length]
  const nextSlug = caseOrder[(i + 1) % caseOrder.length]
  const accentStyle = { '--accent': cs.accent }

  return (
    <div className="cs" style={accentStyle}>
      <header className="cs-header">
        <div className="cs-header__inner">
          <Link className="cs-back" to="/#experience">
            <span className="arw">←</span> Back to home
          </Link>
          <Link className="cs-logo" to="/">
            Naveen Kumar
          </Link>
        </div>
      </header>

      <section className="chero">
        <div className="shell">
          <div className="crumb">
            <span className="crumb__num">{cs.num}</span>
            <span className="crumb__dot" />
            <span>{cs.kind}</span>
          </div>
          <h1 className={`chero__title ${cs.logo ? 'chero__title--logo' : ''}`}>
            {cs.logo ? (
              <img
                className={`brandlogo ${cs.logoDark ? 'brandlogo--dark' : ''}`}
                src={cs.logo}
                alt={cs.title}
              />
            ) : (
              cs.title
            )}
          </h1>
          <p className="chero__tag">{cs.tagline}</p>
          <div className="cactions">
            {cs.link && (
              <a
                className="btn btn--primary"
                href={cs.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live product <span className="arw">↗</span>
              </a>
            )}
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="meta">
            {cs.meta.map((m) => (
              <div className="mcell" key={m.k}>
                <div className="mk">{m.k}</div>
                <div className="mv">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {cs.summary && (
        <section className="glance">
          <div className="shell">
            <p className="glance__label">At a glance</p>
            <p className="glance__thesis">{formatSummary(cs.summary)}</p>
            {(cs.execStats || cs.stats) && (
              <div
                className={`execgrid execgrid--col${Math.min((cs.execStats || cs.stats).length, 4)}`}
              >
                {(cs.execStats || cs.stats).map((s) => (
                  <div className="execstat" key={s.label}>
                    <div className="execstat__n">{s.num}</div>
                    <p className="execstat__l">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
            {cs.statsNote && <p className="glance__note">{cs.statsNote}</p>}
            {cs.glanceShot && <GlanceShot shot={cs.glanceShot} title={cs.title} />}
          </div>
        </section>
      )}

      <section className="csec reveal">
        <div className="shell">
          <p className="eyebrow">Overview</p>
          <p className="clead">{fmt(cs.overview)}</p>
          {cs.overviewBody.map((p, idx) => (
            <p className="cpara" key={idx}>
              {fmt(p)}
            </p>
          ))}
        </div>
      </section>

      {cs.framework && (
        <section className="csec reveal">
          <div className="shell">
            <p className="eyebrow">How I work</p>
            <p className="clead">{cs.framework.lead}</p>
            <div className="framework">
              {cs.framework.steps.map((st) => (
                <div className="fstep" key={st.t}>
                  <span className="fstep__n">{st.n}</span>
                  <span className="fstep__t">{st.t}</span>
                  <span className="fstep__d">{st.d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {cs.stories && (
        <section className="csec reveal">
          <div className="shell">
            <p className="eyebrow">{cs.storiesLabel || 'Featured work'}</p>
            <div className="stories-container">
              <div className="stories">
                {cs.stories.map((s, i) => (
                  <Story key={i} s={s} num={String(i + 1).padStart(2, '0')} id={`story-${i}`} />
                ))}
              </div>
              {slug === 'zoho-projects' && (
                <aside className="stories-index">
                  <div className="stories-index__sticky">
                    <p className="stories-index__title">Index</p>
                    <ol className="stories-index__list">
                      {cs.stories.map((s, i) => (
                        <li key={i} className="stories-index__item">
                          <a href={`#story-${i}`} className="stories-index__link">
                            <span className="stories-index__num">{String(i + 1).padStart(2, '0')}</span>
                            <span className="stories-index__text">{s.kicker || s.title}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>
      )}

      {cs.did && (
        <section className="csec reveal">
          <div className="shell">
            <p className="eyebrow">What I did</p>
            <div className="did">
              {cs.did.map((d) => (
                <div className="diditem" key={d}>
                  <span className="tick">✓</span>
                  <span className="didtext">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {cs.quote && (
        <section className="quote reveal">
          <div className="shell">
            <div className="qmark">&ldquo;</div>
            <p className="qtext">{cs.quote}</p>
            <p className="qby">{cs.quoteBy}</p>
          </div>
        </section>
      )}

      <div className="pager">
        <Link className="pcell prev" to={`/work/${prevSlug}`}>
          <div className="pk">← Previous</div>
          <div className="pt">{caseStudies[prevSlug].title}</div>
        </Link>
        <Link className="pcell next" to={`/work/${nextSlug}`}>
          <div className="pk">Next →</div>
          <div className="pt">{caseStudies[nextSlug].title}</div>
        </Link>
      </div>

      <Contact />

      <Footer />
    </div>
  )
}
