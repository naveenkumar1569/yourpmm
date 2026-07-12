import { contact } from '../data.js'

function Arrow() {
  return (
    <svg
      className="ccard__arw"
      width="16"
      height="16"
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

const MailIcon = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const PhoneIcon = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
  </svg>
)

const LinkedInIcon = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z" />
  </svg>
)

export default function Contact() {
  const cards = [
    { icon: MailIcon, k: 'Email', v: contact.email, href: `mailto:${contact.email}`, ext: false },
    { icon: PhoneIcon, k: 'Phone', v: contact.phone, href: contact.phoneHref, ext: false },
    { icon: LinkedInIcon, k: 'LinkedIn', v: contact.linkedinLabel, href: contact.linkedin, ext: true },
  ]

  return (
    <section id="contact" className="secx contactx reveal">
      <div className="shell">
        <p className="eyebrow">Contact</p>
        <h2 className="secx__title">Let’s talk.</h2>
        <p className="secx__intro">
          Open to conversations about product marketing, GTM, and building SaaS.
        </p>

        <div className="ccards">
          {cards.map((c) => (
            <a
              key={c.k}
              className="ccard"
              href={c.href}
              {...(c.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Arrow />
              <span className="ccard__icon">{c.icon}</span>
              <span className="ccard__k">{c.k}</span>
              <span className="ccard__v">{c.v}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
