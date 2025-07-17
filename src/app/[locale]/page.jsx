'use client'

// External modules
// import React from 'react'
import { useTranslations } from 'next-intl'

// Internal modules
import styles from './home.module.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import ContactForm from 'Components/ContactForm/ContactForm'
import InsigniaClutch from 'Components/InsigniaClutch/InsigniaClutch'
import ServicesCard from 'Components/ServicesCard/ServicesCard'
import Banner from 'Components/Banner/Banner'
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  const projects = useTranslations('home.projects_section')
  const clutch = useTranslations('home.clutch')

  return (
    <main id='home' className={styles.home}>

      <Header />

      <section className={styles.primary_section}>
        <Banner
          backgroundImg='/Assets/Images/banner-ebook.jpg'
          title='Humanizing'
          subTitle='Digital Products'
          content={
            <a href='/en/ebook' className={styles.ebook_btn_list}>
              Descarga nuestro eBook  <FaArrowRight />
            </a>
          } 
        />
      </section>

      {/* Section cards */}
      <ServicesCard />

      <section className={styles.highlighted_project}>
        <div className={`container ${styles.container}`}>
          <h2>
            {projects('title')}
          </h2>
          <ProjectDetails />
        </div>

      </section>

      {/* Insignias Clutch */}
      <InsigniaClutch title={clutch} />

      {/* Contact form */}
      <ContactForm home />

      <Footer />
    </main>
  )
}