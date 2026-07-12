import { intro } from '../data.js'

export default function Intro() {
  return (
    <section id="about" className="secx intro reveal">
      <div className="shell">
        <p className="intro-lead">{intro[0]}</p>
        <p className="intro-sub">{intro[1]}</p>
        <a className="dl-btn" href="/Naveen_Kumar_Resume.pdf" download="Naveen_Kumar_Resume.pdf">
          Download résumé
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3v12" />
            <path d="M7 12l5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
        </a>
      </div>
    </section>
  )
}
