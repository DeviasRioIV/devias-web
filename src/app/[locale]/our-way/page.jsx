'use client'

// External modules
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// Internal modules
import './OurWay.module.scss'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ServicesCard from 'Components/ServicesCard/ServicesCard'
import ElementTitle from 'Components/ElementTitle/ElementTitle'


export default function OurWay() {

  const ourWayPage = useTranslations('our_way')
  const items = ourWayPage.raw('items')

  // Scroll effect
  React.useEffect(() => {

    if (typeof document !== 'undefined') {

      const container = document?.getElementById('our-way')

      container.scrollIntoView({behavior: 'smooth'})

    }


  }, [])

  console.log(ourWayPage('items'));

  return (
    <main id='our-way'>
      <Header />

      {/* Section title */}
      <section className='primary-section'>
        <div className='container'>
          <div className='main-title'>
            <ElementTitle page={'ourWorkflow'}/>
            <h1>
              {ourWayPage('title_section')}
            </h1>
            <h5>
              {ourWayPage('label_section')}
            </h5>
          </div>
        </div>
      </section>
      {/* Section steps */}
      <section className='process-steps'>
        <div className='container'>
          <div className='container-steps'>
            {items.map((item, index) => (
              <div key={index} className='step'>
                <h3>0{item.number}</h3>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            ))}
            {/* <ItemStep /> */}
          </div>
        </div>
      </section>

      {/* Section cards */}
      <ServicesCard />

      {/* Section projects */}
      <section className='highlighted-project'>
        <div className='container'>
          <h2>
            {ourWayPage('projects_section.title')}
          </h2>
          {/* <ProjectDetails /> */}
        </div>
      </section>
      <Footer />
    </main>
  )

}