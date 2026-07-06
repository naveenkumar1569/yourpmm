import { stats } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section__label">Experience</p>
        <h2 className="section__title">
          10 years of product marketing. Built around customers, GTM, and
          growth.
        </h2>

        <div className="about__body">
          <p>
            Over the past 10 years at Zoho, I&rsquo;ve led product marketing for
            Zoho Projects, shaping go-to-market strategy, positioning, launches,
            customer advocacy, customer marketing, and sales enablement across
            North America, Europe, MENA, APAC, and ANZ.
          </p>
          <p>
            My work spans the product lifecycle, from bringing new capabilities
            to market to helping sales teams communicate value clearly in
            customer conversations.
          </p>
        </div>

        <div className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.desc}>
              <div className="stat__num">{stat.num}</div>
              <p className="stat__desc">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
