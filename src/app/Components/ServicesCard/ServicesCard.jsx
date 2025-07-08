// External modules
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// Internal modules
import styles from './services-card.module.scss'

// Assets
import servicesElement from 'Assets/Utilities/Elements/desktop/home-hero/services-card.png'

export default function ServicesCard() {

  const services = useTranslations('home.services')

  return (
    <section id={styles.services_card}>
        <div className={`container ${styles.container}`}>
          <div className={styles.container_dev_card}>
            <div id={styles.title_and_services}>
              <h2>
                {services('development.title')}
              </h2>
              <div className={styles.services_card}>
                <div id={styles.services}>
                  <div className={styles.services_description} id={styles.design_side}>
                    <h3>
                      {services('development.service_1')}
                    </h3>
                    <h3>
                      {services('development.service_2')}
                    </h3>
                    <h3>
                      {services('development.service_3')}
                    </h3>
                  </div>
                  <div className={styles.services_description} id={styles.dev_side}>
                    <h3>
                      {services('development.service_4')}
                    </h3>
                    <h3>
                      {services('development.service_5')}
                    </h3>
                    <h3>
                      {services('development.service_6')}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Image src={servicesElement} alt='services' id={styles.services_element}/>
          </div>
        </div>
      </section>
  )
}
