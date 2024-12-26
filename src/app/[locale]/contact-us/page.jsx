'use client'

// External modules
import React from 'react'
import { useTranslations } from 'next-intl'

// Internal modules
import styles from './contact-us.module.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ContactForm from 'Components/ContactForm/ContactForm'
import ElementTitle from 'Components/ElementTitle/ElementTitle'

export default function ContactUs() {

  // Constants
  const contactPage = useTranslations('contact')

  React.useEffect(() => {

    if (typeof document !== 'undefined') {
      const container = document?.getElementById('contact_us')

      if (container) {
        container.scrollIntoView({behavior: 'smooth'})
      }
    }

  }, [])

  return (
    <main id={styles.contact_us}>
      <Header />

      {/* Section title */}
      <section className={styles.section_title}>
        <div className={`container ${styles.container}`}>
          <div className={styles.main_title}>
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

      <section id={styles.form_map_section}>

        {/* Contact form */}
        <ContactForm />

      </section>

      <Footer />
    </main>
  )

}