export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section__label">Contact</p>
        <h2 className="section__title">Let&rsquo;s talk.</h2>
        <p className="contact__lead">
          Open to conversations about product marketing, GTM, and building SaaS.
        </p>

        <div className="contact__links">
          <a className="contact__item" href="mailto:naveen.tv@zohocorp.com">
            <span className="contact__item-label">Email</span>
            <span className="contact__item-value">naveen.tv@zohocorp.com</span>
          </a>
          <a
            className="contact__item"
            href="https://www.linkedin.com/in/naveenkumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__item-label">LinkedIn</span>
            <span className="contact__item-value">Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
