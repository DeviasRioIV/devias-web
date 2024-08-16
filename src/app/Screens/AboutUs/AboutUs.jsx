// External Modules
import React from 'react'

// Internal modules
import './AboutUs.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import {AppContext} from '../../AppContext'

export default function AboutUs() {

  // Global state
  const {state} = React.useContext(AppContext)

  // Local state
  const [language, setLanguage] = React.useState(state.language_content.about_us)

  // Scroll Effect
  React.useEffect(() => {

    const container = document.getElementById('about-us')

    container.scrollIntoView({behavior: 'smooth'})

  }, [])

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.about_us)

  }, [state.language])

  return (
    <main id='about-us'>
      <Header />

      <section className='section-title'>
        <div className='container'>
          <div className='main-title'>
            <h5>
              {language.label}
            </h5>
            <h1>
              {language.title}
            </h1>
          </div>
        </div>
      </section>
      <section className='section-info'>
        <div className='container'>
          <div className='container-card'>
            <div className='text-card'>
              {language.card}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )

}
