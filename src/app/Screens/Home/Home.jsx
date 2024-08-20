// External modules
import React from 'react'
import Image from 'next/image'

// Internal modules
import './Home.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import {AppContext} from '../../AppContext'
import ContactForm from 'Components/ContactForm/ContactForm'
import InsigniaClutch from 'Components/InsigniaClutch/InsigniaClutch'
import bannerImg from 'Assets/Images/home_banner.jpg'
import firstElement from 'Assets/Utilities/Elements/desktop/home-hero/left-elements.png'
import secondElement from 'Assets/Utilities/Elements/desktop/home-hero/right-elements.png'
import servicesElement from 'Assets/Utilities/Elements/desktop/home-hero/services-card.png'

export default function Home() {

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
          <Image src={firstElement} alt="element" id='element-left'/>
          <Image src={secondElement} alt="element" id='element-right'/>
        </div>
      </section>

      <section className='services-card'>
        <div className='container'>
          <div className='container-dev-card'>
            <div id="title-and-services">
              <h2>
                {language.services.development.title}
              </h2>
              <div className='services-card'>
                <div id="services">
                  <div className='services-description' id="design-side">
                    <h3>
                      {language.services.development.service_1}
                    </h3>
                    <h3>
                      {language.services.development.service_2}
                    </h3>
                    <h3>
                      {language.services.development.service_3}
                    </h3>
                  </div>
                  <div className='services-description' id="dev-side">
                    <h3>
                      {language.services.development.service_4}
                    </h3>
                    <h3>
                      {language.services.development.service_5}
                    </h3>
                    <h3>
                      {language.services.development.service_6}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Image src={servicesElement} alt='services' id='services-element'/>
          </div>
        </div>
      </section>

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