// External modules
import React from 'react'
import {Link} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, Navigation} from 'swiper/modules'

// Internal modules
import './InsigniaClutch.scss'

// Styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Assets
import itServicesCompany from 'Assets/InsigniaClutch/top_clutch.co_app_development_company_real_estate_argentina.png'
import webDevelopersArgentina from 'Assets/InsigniaClutch/top_clutch.co_web_developers_government_argentina.png'
import ecommerceDevelopersArgentina from 'Assets/InsigniaClutch/top_clutch.co_e-commerce_developers_medical_argentina.png'
import itServicesCompanyRealEstate from 'Assets/InsigniaClutch/top_clutch.co_it_services_company_real_estate_argentina.png'
import ErpConsultingCompany from 'Assets/InsigniaClutch/top_clutch.co_erp_consulting_company_argentina_2024.png'
import softwareDeveloperArgentina from 'Assets/InsigniaClutch/top_clutch.co_software_developers_government_argentina.png'
import softwareDeveloperRealEstate from 'Assets/InsigniaClutch/top_clutch.co_software_developers_real_estate_argentina.png'
import appDevelopmentCompanyRealEstate from 'Assets/InsigniaClutch/top_clutch.co_app_development_company_real_estate_argentina.png'
import itServicesCompanyMedical from 'Assets/InsigniaClutch/top_clutch.co_it_services_company_medical_argentina.png'

export default function InsigniaClutch() {

  // Local state
  const [cantInsignia, setCantInsignia] = React.useState(5)

  // Constants
  const insignias = ([
    {
      title: 'Top Clutch It Services Company Government Argentina',
      img: itServicesCompany
    },
    {
      title: 'Top Clutch It Services Company Government Argentina',
      img: webDevelopersArgentina
    },
    {
      title: 'Top Clutch E-commerce Developers Medical Argentina',
      img: ecommerceDevelopersArgentina
    },
    {
      title: 'Top Clutch It Services Company Real Estate Argentina',
      img: itServicesCompanyRealEstate
    },
    {
      title: 'Top Clutch Erp Consulting Company Argentina 2024',
      img: ErpConsultingCompany
    },
    {
      title: 'Top Clutch Software Developers Government Argentina',
      img: softwareDeveloperArgentina
    },
    {
      title: 'Top Clutch Software Developers Real Estate Argentina',
      img: softwareDeveloperRealEstate
    },
    {
      title: 'Top Clutch App Development Company Real Estate Argentina',
      img: appDevelopmentCompanyRealEstate
    },
    {
      title: 'Top Clutch It Services Company Medical Argentina',
      img: itServicesCompanyMedical
    }
  ])

  //Effect to indicate the number of badges to display
  React.useEffect(() => {

    let cant = 0

    const width = window.innerWidth

    if (width >= 992) {

      cant = 5

    } else if (width >= 768) {

      cant = 4

    } else if (width >= 576) {

      cant = 3

    } else if (width >= 460) {

      cant = 2

    } else {

      cant = 1

    }

    const handleResize = () => {

      let cantResize = 0
      const newWidth = window.innerWidth

      if (newWidth >= 992) {

        cantResize = 5

      } else if (newWidth >= 768) {

        cantResize = 4

      } else if (newWidth >= 576) {

        cantResize = 3

      } else if (newWidth >= 460) {

        cantResize = 2

      } else {

        cantResize = 1

      }

      setCantInsignia(cantResize)

    }

    window.addEventListener('resize', handleResize)

    setCantInsignia(cant)

    return () => window.removeEventListener('resize', handleResize)

  }, [])

  return (
    <div id='insignia-carousel'>
      <div className='container'>
        <div className='carousel-container'>

          <Swiper
            slidesPerView={cantInsignia}
            spaceBetween={25}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='swiper'
          >

            {insignias.map((insignia, index) => (
              <SwiperSlide key={index}>

                <Link to='https://clutch.co/profile/devias?utm_source=clutch_top_company_badge&utm_medium=image_embed#highlights' target='_blank'>
                  <img src={insignia.img} alt={insignia.title} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )

}
