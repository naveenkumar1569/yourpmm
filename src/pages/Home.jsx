import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import AskMe from '../components/AskMe.jsx'
import Zoho from '../components/Zoho.jsx'
import Building from '../components/Building.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import useReveal from '../useReveal.js'

export default function Home() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AskMe />
        <Zoho />
        <Building />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
