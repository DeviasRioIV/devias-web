'use client'

// External modules
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

// Internal modules
import styles from './customer.module.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import TechStack from 'Components/TechStack/TechStack'

// Assets
import imgPlaceholder from 'Assets/Projects/no-thumbnail.webp'

export default function Costumer() {

  // Local state
  const [project, setProject] = React.useState()

  // Constants
  const { customer } = useParams()
  const projectsPage = useTranslations('our_customers')

  const isInCustomerView = true

  React.useEffect(() => {

    const projectList = projectsPage.raw('projects')

    if (customer && projectList.length > 0) {

      const project = projectList.filter(item => item.code === customer)

      setProject(project)

    }

  }, [customer, projectsPage])

  // Scroll effect
  React.useEffect(() => {

    if (typeof document !== 'undefined') {

      const container = document?.getElementById('customer_single_page')

      if (container) {
        container.scrollIntoView({ behavior: 'smooth' })
      }

    }

  }, [project])

  return (
    project?.map((customer, index) => (
      <main key={index} id={styles.customer_single_page}>
        <Header />
        {/* Section title */}
        <section className={styles.section_title}>
          <div className={`container ${styles.container}`}>
            <div className={styles.main_title}>
              <h1>
                {customer.name}
              </h1>
            </div>
          </div>
        </section>
        {/* Section post */}
        <section className={styles.post_content}>
          <div className={`container ${styles.container}`}>
            <div className={styles.contain_content}>
              <div className={styles.customer_page} style={{background: customer.color}}>
                <Image src={customer.img_page ? customer.img_page : imgPlaceholder} alt={customer.name} fill/>
              </div>
              <div className={styles.customer_logo}>
                <img src={customer.img_logo ? customer.img_logo : ''} alt={customer.name} />
              </div>
              {
                customer.project_description.map((desc, index) => (
                  <div key={index} className={styles.project_description}>
                    {desc.title ? <h3 className={styles.description_title} >{desc.title}</h3> : ''}
                    <p>
                      {desc.description}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* Section tech */}
        <TechStack tech_stack={customer.tech_stack} />

        {/* Section projects */}
        <section className={styles.highlighted_project}>
          <div className={`container ${styles.container}`}>
            <h2>
              OTHER PROJECTS
            </h2>
            <ProjectDetails customerView={isInCustomerView} />
          </div>
        </section>
        <Footer />
      </main>
    ))
  )

}
