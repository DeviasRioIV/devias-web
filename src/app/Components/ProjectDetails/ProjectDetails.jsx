// External Modules
import React from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router'
import {AppContext} from '../../AppContext'

// Internal modules
import './ProjectDetails.scss'
import Card from './Card/Card'

export default function ProjectDetails({customerView, page}) {

  // Global State
  const {state} = React.useContext(AppContext)

  // Local State
  const [projectsList, setProjectsList]       = React.useState(state.language_content.our_customers.projects)
  const [visibleProjects, setVisibleProjects] = React.useState(page ? 6 : 3)
  const [loading, setLoading]                 = React.useState(false)

  // Constants
  const {client} = useParams()

  React.useEffect(() => {

    if(customerView) {

      if (customerView) {

        const newList = state.language_content.our_customers.projects.filter(item => item.code !== client)

        setProjectsList(newList)

      }

    } else {

      setProjectsList(state.language_content.our_customers.projects)

    }

  }, [client, state.language])

  const showMore = () => {

    setLoading(true)

    setTimeout(() => {

      setVisibleProjects(visibleProjects + 3)
      setLoading(false)

    }, 500)

  }

  return (

    <>
      <div className="container-projects">
        {projectsList?.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className='project-detail'>
            {/* Link image */}
            <div className='project-thumbnail'>
              <Link to={`/customer/${project.code}`}>
                <Card img={project.img_page} alt={project.name} background={project.color}/>
              </Link>
            </div>
            {/* Contain Info */}
            <div className='contain-info'>
              <div className='project-title'>
                <Link to={`/customer/${project.code}`}>
                  {project.name}
                </Link>
              </div>
              {/* Description */}
              <div className='project-description'>
                <p>
                  {project.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      {
        !page &&
        <div className='see-all'>
          <Link to='/our-projects'>
            See all projects
          </Link>
        </div>
      }

      {/* Lets this comment until know what they want to do with this functionality */}
      {page && visibleProjects < projectsList.length && (
        <div id='container-button-spinner'>
          {
            !loading
              ? <button onClick={() => showMore()}> Show More Projects </button>
              : <div className='icon-container'> <i className='fa-solid fa-circle-notch fa-spin' /> </div>
          }
        </div>
      )}
    </>
  )

}
