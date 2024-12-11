'use client'

// External modules
import React from 'react'

// Internal modules
import './contact-us.module.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ContactForm from 'Components/ContactForm/ContactForm'
import ElementTitle from 'Components/ElementTitle/ElementTitle'

export default function ContactUs() {

  // Local state
  const [language, setLanguage] = React.useState(state.language_content.contact)

  React.useEffect(() => {

    if (typeof document !== 'undefined') {
      const container = document?.getElementById('contact-us')

      container.scrollIntoView({behavior: 'smooth'})
    }

  }, [])

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.contact)

  }, [state.language_content.contact])

  return (
    <main id='contact-us'>
      <Header />

      {/* Section title */}
      <section className='section-title'>
        <div className='container'>
          <div className='main-title'>
          <ElementTitle page={'contact'}/>
            <h1>
              {language.title}
            </h1>
            <h5>
              {language.sub_title}
            </h5>
          </div>
        </div>
      </section>

      <section id='form-map-section'>

        {/* Contact form */}
        <ContactForm />

      </section>

      <Footer />
    </main>
  )

}