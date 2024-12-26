'use client'

// External modules
import React from 'react'
import { useTranslations } from 'next-intl'

// Internal modules
import styles from './our-customers.module.scss'
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

      const container = document?.getElementById('our_customers')

      if (container) {
        container.scrollIntoView({behavior: 'smooth'})
      }
    }


  }, [])

  return (
    <main id={styles.our_customers}>
      {/* Header */}
      <Header />

      {/* Title */}
      <section className={styles.section_title}>
        <div className={`container ${styles.container}`}>
          <div className={styles.main_title}>
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
      <section className={styles.container_project_detail}>
        <div className={`container ${styles.container}`}>
          <ProjectDetails page />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  )

}
