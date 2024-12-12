'use client'

// External modules
import React from 'react'
import { useTranslations } from 'next-intl'

// Internal modules
import './OurCustomers.module.scss'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ElementTitle from 'Components/ElementTitle/ElementTitle'

export default function OurCustomers() {

  // Constants
  const projectsPage = useTranslations('our_customers')

  // Effects
  React.useEffect(() => {

    if (typeof document !== 'undefined'){

      const container = document?.getElementById('our-customers')

      container.scrollIntoView({behavior: 'smooth'})
    }


  }, [])

  return (
    <main id='our-customers'>
      {/* Header */}
      <Header />

      {/* Title */}
      <section className='section-title'>
        <div className='container'>
          <div className='main-title'>
            <ElementTitle page={'project'}/>
            <h1>
              {projectsPage('title')}
            </h1>
            <h2>
              {projectsPage('label')}
            </h2>
          </div>
        </div>
      </section>

      {/* Section projects */}
      <section className='container-project-detail'>
        <div className='container'>
          {/* <ProjectDetails page /> */}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  )

}
