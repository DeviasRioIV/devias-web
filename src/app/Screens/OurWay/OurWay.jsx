// External modules
import React from 'react'

// Internal modules
import './OurWay.scss'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import Header from 'Components/Header/Header'
import ItemStep from 'Components/ItemStep/ItemStep'
import Footer from 'Components/Footer/Footer'
import TechStack from 'Components/TechStack/TechStack'
import WhatsappBubble from 'Components/WhatsappBubble/WhatsappBubble'
import {AppContext} from '../../AppContext'

export default function OurWay() {

  // Global state
  const {state} = React.useContext(AppContext)

  // Local state
  const [language, setLanguage] = React.useState(state.language_content.home)

  // Scroll effect
  React.useEffect(() => {

    const container = document.getElementById('our-way')

    container.scrollIntoView({behavior: 'smooth'})

  }, [])

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.home)

  }, [state.language])

  return (
    <main id='our-way'>
      <Header />

      {/* WhatsApp Bubble */}
      <WhatsappBubble />

      {/* Section title */}
      <section className='primari-section'>
        <div className='container'>
          <div className='main-title'>
            <h5>
              {language.services.label_section}
            </h5>
            <h1>
              {language.services.title_section}
            </h1>
          </div>
        </div>
      </section>
      {/* Section steps */}
      <section className='process-steps'>
        <div className='container'>
          <div className='container-steps'>
            <ItemStep />
          </div>
        </div>
      </section>
      {/* Section cards */}

      <section className='services-cards'>
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
      <TechStack />
      {/* Section projects */}
      <section className='highlighted-project'>
        <div className='container'>
          <h2>
            {language.projects_section.title}
          </h2>
          <ProjectDetails />
        </div>
      </section>
      <Footer />
    </main>
  )

}