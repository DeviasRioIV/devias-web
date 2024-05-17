// External modules
import React from 'react'

// Internal modules
import './Home.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import TechStack from 'Components/TechStack/TechStack'
import WhatsappBubble from 'Components/WhatsappBubble/WhatsappBubble'
import {AppContext} from '../../AppContext'
import ContactForm from 'Components/ContactForm/ContactForm'

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

      {/* WhatsApp Bubble */}
      <WhatsappBubble />

      <section className='primary-section'>
        <div className='container'>
          <div className='main-title'>
            <h1>
              {language.main_title.title}
            </h1>
          </div>
          <div className='section-description'>
            <h4>
              {language.main_title.legend}
            </h4>
          </div>
        </div>
      </section>

      <section className='services-card'>
        <div className='container'>
          <div className='row'>
            <div className='container-dev-card'>
              <div className='dev-card'>
                <h2>
                  {language.services.development.title}
                </h2>
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
            </div>
            <div className='container-design-card'>
              <div className='design-card'>
                <h2>
                  {language.services.design.title}
                </h2>
                <h3>
                  {language.services.design.service_1}
                </h3>
                <h3>
                  {language.services.design.service_2}
                </h3>
                <h3>
                  {language.services.design.service_3}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      <section className='highlighted-project'>
        <div className='container'>
          <h2>
            {language.projects_section.title}
          </h2>
          <ProjectDetails />
        </div>
      </section>

      {/* Contact form */}
      <ContactForm home />

      <Footer />
    </main>
  )

}