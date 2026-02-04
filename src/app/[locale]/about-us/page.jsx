'use client'

// External Modules
import React from 'react'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'

// Internal modules
import styles from './about-us.module.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import Banner from 'Components/Banner/Banner'
import mapArgentina from 'Assets/Utilities/Elements/desktop/hello-from-argentina/argentina-map.png'
import flagElementsDesktop from 'Assets/Utilities/Elements/desktop/hello-from-argentina/flag-and-elements.png'
import flagElementsMobile from 'Assets/Utilities/Elements/mobile/hello-from-argentina/flag-and-elements.png'

// Carousel images
import imageTeam_1 from 'Assets/AboutUs_Carousel/about-us-ph-1.jpg'
import imageTeam_2 from 'Assets/AboutUs_Carousel/about-us-ph-2.jpg'
import imageTeam_3 from 'Assets/AboutUs_Carousel/about-us-ph-3.jpg'
import imageTeam_4 from 'Assets/AboutUs_Carousel/about-us-ph-4.jpg'
import imageTeam_5 from 'Assets/AboutUs_Carousel/about-us-ph-5.jpg'
import { useTranslations } from 'next-intl'

export default function AboutUs() {

  // Local state
  const [isShaking, setIsShaking] = React.useState(false)
  const [width, setWidth] = React.useState(null)

  // Constants
  const imagesCarousel = [ imageTeam_1, imageTeam_2, imageTeam_3, imageTeam_4, imageTeam_5 ]

  const t = useTranslations('about_us')

  // Scroll Effect
  React.useEffect(() => {
    if (typeof window !== 'undefined') {

      setWidth(window.innerWidth)

    }


    if (typeof document !== 'undefined') {

      const container = document?.getElementById('about_us')

      container.scrollIntoView({behavior: 'smooth'})
  
      const weAre = document.getElementById('we_are')
      const devias = document.getElementById('devias')
    
      if (weAre) {
  
        weAre.style.animation = 'slideRight 0.6s ease-in-out'
        devias.style.animation = 'slideRight 0.6s ease-in-out'
        setTimeout(() => {
  
          weAre.style.animation = 'scaleUpAndDown 0.6s ease-in-out'
          devias.style.animation = 'shake 0.4s ease-in-out'
  
        }, [1000])
      }

    }
    
    const interval = setInterval(() => {
      setIsShaking(true)

      setTimeout(() => {
        setIsShaking(false)
      }, 400)
    }, 6000)

    return () => clearInterval(interval)

  }, [])

  return (
    <main id='about_us' className={styles.about_us}>
      <Header />

      <section className={styles.section_title}>
        <Banner
          backgroundImg='/Assets/Images/about-us-hero-bg.jpg'
          title={t('banner.title')}
          subTitle={t('banner.subtitle')}
          variant
          placeholder
        />
      </section>

      <section id={styles.hello_from_argentina}>
        <div className={`container ${styles.container}`}>
          <div id={styles.card}>
            <Image src={mapArgentina} alt="element" id={styles.map}/>

            <div id={styles.container_title_hello}>
              <h3 id={styles.hello} className={isShaking ? styles.shaking : ''} >{t('hello_section.hello')}</h3>
              <h3 id={styles.argentina} className={isShaking ? styles.shaking : ''}>{t('hello_section.argentina')}</h3>
              <Image src={width > 596 ? flagElementsDesktop : flagElementsMobile} alt="element" id={styles.elements}/>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.section_info}>
        <div className={`container ${styles.container}`}>
          <div className={styles.info_container}>
            <h4 className={styles.info_title}>
              {t('sections.who_we_are.title')}
            </h4>
            <p className={styles.info_text}>
              {t('sections.who_we_are.text')}
            </p>
          </div>
          <div className={styles.info_container}>
            <h4 className={styles.info_title}>
              {t('sections.philosophy.title')}
            </h4>
            <p className={styles.info_text}>
              {t('sections.philosophy.text')}
            </p>
          </div>
          <div className={styles.info_container}>
            <h4 className={styles.info_title}>
              {t('sections.why_choose_us.title')}
            </h4>
            <p className={styles.info_text}>
              {t('sections.why_choose_us.text')}
            </p>
          </div>
        </div>
      </section>

      <section id={styles.slider_team}>
        <div className={`container ${styles.container}`}>

          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
            className={`${styles.swiper_container} swiper`}
          >

            {
              imagesCarousel.map((image, index) => (
                <SwiperSlide key={index} className={styles.swiper_slide}>
                  <Image src={image} alt={`Image ${index + 1}`} className={styles.image_slide} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>

      <Footer />
    </main>
  )

}
