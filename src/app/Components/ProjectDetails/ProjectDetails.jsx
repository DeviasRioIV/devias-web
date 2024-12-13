'use client'

// External Modules
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

// Internal modules
import './ProjectDetails.scss'
import Card from './Card/Card'

export default function ProjectDetails({customerView, page, params}) {

  // Local State
  const [projectsList, setProjectsList]       = React.useState()
  const [visibleProjects, setVisibleProjects] = React.useState(page ? 6 : 3)
  const [loading, setLoading]                 = React.useState(false)
  const [client, setClient]                   = React.useState(null)
  const [cantProjects, setCantProjects]       = React.useState(0)

  // Constants
  const router = useRouter()
  const projectsPage = useTranslations('our_customers')
  const projectList = projectsPage.raw('projects')
  const locale = params?.locale || 'en'

  React.useEffect(() => {

    if (router.isReady) {

      const { client } = router.query

      setClient(client)

    }

  }, [router.isReady, router.query])

  React.useEffect(() => {

    if(customerView) {

      if (customerView) {

        const newList = projectList.filter(item => item.code !== client)

        setProjectsList(newList)
        setCantProjects(newList.length)

      }

    } else {

      setProjectsList(projectList)
      setCantProjects(projectList.length)

    }

  }, [client, projectList, customerView])

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
              <Link href={`/${locale}/our-projects/${project.code}`}>
                <Card img={project.img_page} alt={project.name} background={project.color}/>
              </Link>
            </div>
            {/* Contain Info */}
            <div className='contain-info'>
              <div className='project-title'>
                <Link href={`/${locale}/our-projects/${project.code}`}>
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
          <Link href={`/${locale}/our-projects`}>
            See all projects
          </Link>
        </div>
      }

      {/* Lets this comment until know what they want to do with this functionality */}
      {page && visibleProjects < cantProjects && (
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
