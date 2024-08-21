// External modules
import React from 'react'
import Image from 'next/image'

// Internal modules
import './OurWay.scss'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import Header from 'Components/Header/Header'
import ItemStep from 'Components/ItemStep/ItemStep'
import Footer from 'Components/Footer/Footer'
import TechStack from 'Components/TechStack/TechStack'
import {AppContext} from '../../AppContext'

// Assets
import servicesElement from 'Assets/Utilities/Elements/desktop/home-hero/services-card.png'

export default function OurWay() {

  // Global state
  const {state} = React.useContext(AppContext)

  // Local state
  const [language, setLanguage] = React.useState(state.language_content)

  // Scroll effect
  React.useEffect(() => {

    const container = document.getElementById('our-way')

    container.scrollIntoView({behavior: 'smooth'})

  }, [])

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content)

  }, [state.language])

  return (
    <main id='our-way'>
      <Header />

      {/* Section title */}
      <section className='primary-section'>
        <div className='container'>
          <div className='main-title'>
            <h1>
              {language.home.services.title_section}
            </h1>
            <h5>
              {language.home.services.label_section}
            </h5>
          </div>
        </div>
      </section>
      {/* Section steps */}
      <section className='process-steps'>
        <div className='container'>
          <div className='container-steps'>
            {
              language.our_way.items.map((item, index) => (
                <>
                  <h3>0{item.number}</h3>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </>
              ))
            }
            {/* <ItemStep /> */}
          </div>
        </div>
      </section>
      {/* Section cards */}
      <section className='services-card'>
        <div className='container'>
          <div className='container-dev-card'>
            <div id="title-and-services">
              <h2>
                {language.home.services.development.title}
              </h2>
              <div className='services-card'>
                <div id="services">
                  <div className='services-description' id="design-side">
                    <h3>
                      {language.home.services.development.service_1}
                    </h3>
                    <h3>
                      {language.home.services.development.service_2}
                    </h3>
                    <h3>
                      {language.home.services.development.service_3}
                    </h3>
                  </div>
                  <div className='services-description' id="dev-side">
                    <h3>
                      {language.home.services.development.service_4}
                    </h3>
                    <h3>
                      {language.home.services.development.service_5}
                    </h3>
                    <h3>
                      {language.home.services.development.service_6}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Image src={servicesElement} alt='services' id='services-element'/>
          </div>
        </div>
      </section>

      {/* Section projects */}
      <section className='highlighted-project'>
        <div className='container'>
          <h2>
            {language.home.projects_section.title}
          </h2>
          <ProjectDetails />
        </div>
      </section>
      <Footer />
    </main>
  )

}