'use client'

// External Modules
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRouter, useParams } from 'next/navigation'

// Internal modules
import styles from'./project-details.module.scss'
import Card from './Card/Card'

export default function ProjectDetails({customerView, page}) {

  // Local State
  const [projectsList, setProjectsList]       = React.useState()
  const [visibleProjects, setVisibleProjects] = React.useState(page ? 6 : 3)
  const [loading, setLoading]                 = React.useState(false)
  const [client, setClient]                   = React.useState(null)
  const [cantProjects, setCantProjects]       = React.useState(0)
  const [locale, setLocale]                   = React.useState('en')

  // Constants
  const params = useParams()

  const projectsPage = useTranslations('our_customers')
  const projectList = projectsPage.raw('projects')

  //Locale Effect
  React.useEffect(() => {

    const locale = params.locale

    setLocale(locale)

    const client = params.customer

    setClient(client)

  }, [params])

  React.useEffect(() => {

    if(customerView) {

      const newList = projectList.filter(item => item.code !== client)

      setProjectsList(newList)
      setCantProjects(newList.length)

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
      <div className={styles.container_projects}>
        {projectsList?.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className={styles.project_detail}>
            {/* Link image */}
            <div className={styles.project_thumbnail}>
              <Link href={`/${locale}/our-projects/${project.code}`}>
                <Card img={project.img_page} alt={project.name} background={project.color}/>
              </Link>
            </div>
            {/* Contain Info */}
            <div className={styles.contain_info}>
              <div className={styles.project_title}>
                <Link href={`/${locale}/our-projects/${project.code}`}>
                  {project.name}
                </Link>
              </div>
              {/* Description */}
              <div className={styles.project_description}>
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
        <div className={styles.see_all}>
          <Link href={`/${locale}/our-projects`}>
            See all projects
          </Link>
        </div>
      }

      {/* Lets this comment until know what they want to do with this functionality */}
      {page && visibleProjects < cantProjects && (
        <div id={styles.container_button_spinner}>
          {
            !loading
              ? <button onClick={() => showMore()}> Show More Projects </button>
              : <div className={styles.icon_container}> <i className='fa-solid fa-circle-notch fa-spin' /> </div>
          }
        </div>
      )}
    </>
  )

}
