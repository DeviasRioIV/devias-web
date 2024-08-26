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

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  // Global state
  const {state} = React.useContext(AppContext)

  // Local state
  const [language, setLanguage] = React.useState(state.language_content.home)

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.home)

  }, [state.language])

  // Scroll effect
  React.useEffect(() => {

    const container = document.getElementById('home')

    container.scrollIntoView({behavior: 'smooth'})

  }, [])

  return (
    <main id='home'>

      <Header />

      <section className='primary-section'>
        <div className='container'>
          <div className="container-titles">
            <h1 id='humanizing'>Humanizing</h1>
            <h1 id='digital'>
              Digital <br />
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

      <section className='highlighted-project container'>

          <h2>
            {language.projects_section.title}
          </h2>
          <ProjectDetails />

      </section>

      {/* Insignias Clutch */}
      <InsigniaClutch title={language.clutch} />

      {/* Contact form */}
      <ContactForm home />

      <Footer />
    </main>
  )

}