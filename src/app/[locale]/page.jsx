'use client'

// External modules
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// Internal modules
import styles from './home.module.scss'
import Header from '../Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import ContactForm from 'Components/ContactForm/ContactForm'
import InsigniaClutch from 'Components/InsigniaClutch/InsigniaClutch'
import ServicesCard from 'Components/ServicesCard/ServicesCard'

// Assets
import bannerImg from 'Assets/Images/home_banner.jpg'
import firstElementDesktop from 'Assets/Utilities/Elements/desktop/home-hero/left-elements.png'
import firstElementMobile from 'Assets/Utilities/Elements/mobile/home-hero/home-left-elements.png'
import secondElementDesktop from 'Assets/Utilities/Elements/desktop/home-hero/right-elements.png'
import secondElementMobile from 'Assets/Utilities/Elements/mobile/home-hero/home-top-right-element.png'
import bottomElementMobile from 'Assets/Utilities/Elements/mobile/home-hero/home-bottom-right-element.png'

export default function Home() {

  // Local state
  const [width, setWidth] = React.useState(window.innerWidth)
  const [isShaking, setIsShaking] = React.useState(false)

  const mainTitle = useTranslations('home.main_title')
  const projects = useTranslations('home.projects_section')
  const clutch = useTranslations('home.clutch')

  React.useEffect(() => {

    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize)

      // Cleanup event listener when component unmounts
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }

  }, [])

  // Scroll & animation effect
  React.useEffect(() => {

    if (typeof document !== 'undefined') {

      const container = document?.getElementById('home')

      container.scrollIntoView({behavior: 'smooth'})

      const humanizing = document.getElementById('humanizing')
      const digital = document.getElementById('digital')
      if (humanizing) {

        humanizing.style.animation = 'slideRight 0.6s ease-in-out'
        digital.style.animation = 'slideRight 0.6s ease-in-out'
        setTimeout(() => {

          humanizing.style.animation = 'scaleUpAndDown 0.6s ease-in-out'
          digital.style.animation = 'shake 0.4s ease-in-out'

        }, [1000])
      }

      const interval = setInterval(() => {
        setIsShaking(true)

        setTimeout(() => {
          setIsShaking(false)
        }, 400)
      }, 6000)

      return () => clearInterval(interval)
    }

  }, [])

  return (
    <main id='home' className={styles.home}>

    <title>Devias</title>
    <meta name="description" content="Humanizing Digital Products" />

      <Header />

      <section className={styles.primary_section}>
        <div className={styles.container}>
          <div className={styles.container_titles}>
            <h1 id='humanizing' className={styles.humanizing}>Humanizing</h1>
            <h1 id='digital' className={isShaking ? 'shaking' : ''}>
              Digital
              <br />
              Products
            </h1>
          </div>

          <div id='placeholder'/>
          <Image priority src={bannerImg} alt="banner" id='banner'/>
          <Image src={width > 768 ? firstElementDesktop : firstElementMobile} alt="element" id='element-left'/>
          <Image src={width > 768 ? secondElementDesktop : secondElementMobile} alt="element" id='element-right'/>
          {
            width <= 768 ? <Image src={bottomElementMobile} alt="element" id='element-bottom'/> : ''
          }
        </div>
      </section>

      {/* Section cards */}
      <ServicesCard />

      <section className={styles.highlighted_project}>
        <div className={styles.container}>
          <h2>
            {projects('title')}
          </h2>
          {/* <ProjectDetails /> */}
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