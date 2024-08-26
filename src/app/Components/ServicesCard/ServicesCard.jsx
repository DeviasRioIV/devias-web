// External modules
import React from 'react'
import Image from 'next/image'

// Internal modules
import './ServicesCard.scss'

// Assets
import servicesElement from 'Assets/Utilities/Elements/desktop/home-hero/services-card.png'

export default function ServicesCard({ services }) {

  return (
    <section id='services-card'>
        <div className='container'>
          <div className='container-dev-card'>
            <div id="title-and-services">
              <h2>
                {services.title}
              </h2>
              <div className='services-card'>
                <div id="services">
                  <div className='services-description' id="design-side">
                    <h3>
                      {services.service_1}
                    </h3>
                    <h3>
                      {services.service_2}
                    </h3>
                    <h3>
                      {services.service_3}
                    </h3>
                  </div>
                  <div className='services-description' id="dev-side">
                    <h3>
                      {services.service_4}
                    </h3>
                    <h3>
                      {services.service_5}
                    </h3>
                    <h3>
                      {services.service_6}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Image src={servicesElement} alt='services' id='services-element'/>
          </div>
        </div>
      </section>
  )
}
