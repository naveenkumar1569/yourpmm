function Arrow() {
  return (
    <svg
      className="arrow"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

export default function ProjectCard({ project }) {
  const { title, description, tags, link, wip } = project

  return (
    <article className="card">
      <div className="card__head">
        <h3 className="card__title">{title}</h3>
        {wip && <span className="card__wip">In progress</span>}
      </div>

      <p className="card__desc">{description}</p>

      <div className="card__tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      {link ? (
        <a
          href={link}
          className="card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit site <Arrow />
        </a>
      ) : (
        <span className="card__link card__link--muted">
          {wip ? 'Coming soon' : 'Internal work'}
        </span>
      )}
    </article>
  )
}
