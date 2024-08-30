// External modules
import React from 'react'
import Image from 'next/image'

// Internal modules
import './Home.scss'
import {AppContext} from '../../AppContext'
import Header from 'Components/Header/Header'
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
  // Global state
  const {state} = React.useContext(AppContext)

  // Local state
  const [width, setWidth] = React.useState(window.innerWidth)
  const [isShaking, setIsShaking] = React.useState(false)
  const [language, setLanguage] = React.useState(state.language_content.home)
    

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize)

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.home)

  }, [state.language])

  // Scroll & animation effect
  React.useEffect(() => {

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

  }, [])

  return (
    <main id='home'>

      <Header />

      <section className='primary-section'>
        <div className='container'>
          <div className="container-titles">
            <h1 id='humanizing'>Humanizing</h1>
            <h1 id='digital' className={isShaking ? 'shaking' : ''}>
              Digital 
              <br />
              Products
            </h1>
          </div>

          <div id='placeholder'/>
          <Image src={bannerImg} alt="banner" id='banner'/>
          <Image src={width > 768 ? firstElementDesktop : firstElementMobile} alt="element" id='element-left'/>
          <Image src={width > 768 ? secondElementDesktop : secondElementMobile} alt="element" id='element-right'/>
          {
            width <= 768 ? <Image src={bottomElementMobile} alt="element" id='element-bottom'/> : ''
          }
        </div>
      </section>

      {/* Section cards */}
      <ServicesCard services={language.services.development}/>

      <section className='highlighted-project '>
        <div className='container'>
          <h2>
            {language.projects_section.title}
          </h2>
          <ProjectDetails />
        </div>

      </section>

      {/* Insignias Clutch */}
      <InsigniaClutch title={language.clutch} />

      {/* Contact form */}
      <ContactForm home />

      <Footer />
    </main>
  )

}