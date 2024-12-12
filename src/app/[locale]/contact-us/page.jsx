'use client'

// External modules
import React from 'react'
import { useTranslations } from 'next-intl'

// Internal modules
import './contact-us.module.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ContactForm from 'Components/ContactForm/ContactForm'
import ElementTitle from 'Components/ElementTitle/ElementTitle'

export default function ContactUs() {

  // Constants
  const contactPage = useTranslations('contact')

  React.useEffect(() => {

    if (typeof document !== 'undefined') {
      const container = document?.getElementById('contact-us')

      container.scrollIntoView({behavior: 'smooth'})
    }

  }, [])

  return (
    <main id='contact-us'>
      <Header />

      {/* Section title */}
      <section className='section-title'>
        <div className='container'>
          <div className='main-title'>
          <ElementTitle page={'contact'}/>
            <h1>
              {contactPage('title')}
            </h1>
            <h5>
              {contactPage('sub_title')}
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