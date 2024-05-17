// External Modules
import React from 'react'

// Internal modules
import './OurCustomers.scss'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import WhatsappBubble from 'Components/WhatsappBubble/WhatsappBubble'
import {AppContext} from '../../AppContext'

export default function OurCustomers() {

  // Global state
  const {state} = React.useContext(AppContext)

  // Local state
  const[language, setLanguage] = React.useState(state.language_content.our_customers)

  // Effects
  React.useEffect(() => {

    const container = document.getElementById('our-customers')

    container.scrollIntoView({behavior: 'smooth'})

  }, [])

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.our_customers)

  }, [state.language])

  return (
    <main id='our-customers'>
      {/* Header */}
      <Header />

      {/* WhatsApp Bubble */}
      <WhatsappBubble />

      {/* Title */}
      <section className='section-title'>
        <div className='container'>
          <div className='main-title'>
            <h5>
              {language.label}
            </h5>
            <h1>
              {language.title}
            </h1>
          </div>
        </div>
      </section>
      {/* Card info */}
      <section className='info'>
        <div className='container'>
          <div className='container-card'>
            <div className='text-card'>
              {language.card}
            </div>
          </div>
        </div>
      </section>
      {/* Section projects */}
      <section className='container-project-detail'>
        <div className='container'>
          <ProjectDetails />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  )

}
