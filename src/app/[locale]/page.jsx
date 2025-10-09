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
import { FaArrowRight } from "react-icons/fa6";
import SwipeBanner from 'Components/SwipeBanner/SwipeBanner'
import Clarity from "@microsoft/clarity"

export default function Home() {
  const projects = useTranslations('home.projects_section')
  const clutch = useTranslations('home.clutch')
  const bannersLang = useTranslations('home.banners')

  const banners = [
  {
    desktop_url: '/Assets/Images/Slide-Banner-Ebook-01.jpg',
    mobile_url: '/Assets/Images/Slide-Banner-Ebook-01-Posteo.jpg',
    decorations: true,
    content: (
      <div className={styles.container_content}>
        <h1 id={styles.title}>{bannersLang('banner_1.title')}</h1>
        <h2 id={styles.subtitle} className={styles.shaking}>
          {
            bannersLang('banner_1.legend').split(' ').map((word, index) => (
              <span key={index}>
                {word}
              </span>
            ))
          }
        </h2>

        <a href='/en/ebook' className={styles.ebook_btn_list} onClick={() => Clarity.event("Click Banner Ebook")}>
          {bannersLang('banner_1.button')} <FaArrowRight />
        </a>
      </div>
    )
  },
  {
    desktop_url: '/Assets/Images/hero-transparency-bg-desktop.png',
    mobile_url: '/Assets/Images/hero-transparency-bg-mobile.png',
    decorations: false,
    content: (
      <div className={styles.container_content}>
        <picture>
          <img src="/Assets/Images/logo-transparency.svg" alt="transparency logo" className={styles.transparency_logo} />
        </picture>
        <h3 id={styles.transparency_subtitle} className={styles.shaking}>
          {bannersLang('banner_2.legend')}
        </h3>

        <a href='https://www.transparency.ar' target='_blank' className={styles.ebook_btn_list} onClick={() => Clarity.event("Click Banner Transparency")}>
          {bannersLang('banner_2.button')} <FaArrowRight />
        </a>
      </div>
    )
  }
]

  return (
    <main id='home' className={styles.home}>

      <Header />

      <section className={styles.primary_section}>
        <SwipeBanner banners={banners} />
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