// External modules
import React from 'react'
import Image from 'next/image'
import {useParams} from 'react-router'

// Internal modules
import './Customer.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import TechStack from 'Components/TechStack/TechStack';
import {AppContext} from '../../../AppContext'

// Assets
import imgPlaceholder from 'Assets/Projects/no-thumbnail.webp'

export default function Costumer() {

  // Global State
  const {state} = React.useContext(AppContext)

  // Constants
  const [projects, setProjects] = React.useState(state.language_content.our_customers.projects)
  // const projects = json.projects
  const isInCustomerView = true

  const {client} = useParams()

  const customer = projects.filter(project => project.code === client)

  // Scroll effect
  React.useEffect(() => {

    if (typeof document !== 'undefined') {

      const container = document?.getElementById('customer-single-page')
  
      container.scrollIntoView({behavior: 'smooth'})

    }


  }, [client])

  React.useEffect(() => {

    setProjects(state.language_content.our_customers.projects)

  }, [state.language])

  return (
    customer.map((customer, index) => (
      <main key={index} id='customer-single-page'>
        <Header />
        {/* Section title */}
        <section className='section-title'>
          <div className='container'>
            <div className='main-title'>
              <h1>
                {customer.name}
              </h1>
            </div>
          </div>
        </section>
        {/* Section post */}
        <section className='post-content'>
          <div className='container'>
            <div className='contain-content'>
              <div className='customer-page' style={{background: customer.color}}>
                <Image src={customer.img_page ? customer.img_page : imgPlaceholder} alt={customer.name} width={300} height={300}/>
              </div>
              <div className='customer-logo'>
                <img src={customer.img_logo ? customer.img_logo : ''} alt={customer.name} />
              </div>
              {
                customer.project_description.map((desc, index) => (
                  <div key={index} className='project-description'>
                    {desc.title ? <h3 className='description-title' >{desc.title}</h3> : ''}
                    <p>
                      {desc.description}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* Section stech */}
        <TechStack tech_stack={customer.tech_stack} />

        {/* Section projects */}
        <section className='highlighted-project'>
          <div className='container'>
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
