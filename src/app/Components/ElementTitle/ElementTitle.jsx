// External modules
import React from 'react'
import Image from 'next/image'

// Internal modules
import './ElementTitle.scss'

//Assets

//Mobile elements
import contactElementMobile     from 'Assets/Utilities/Elements/mobile/section-name-elements/contact-us.png'
import ourWorkflowElementMobile from 'Assets/Utilities/Elements/mobile/section-name-elements/our-workflow.png'
import projectElementMobile     from 'Assets/Utilities/Elements/mobile/section-name-elements/projects.png'

export default function ElementTitle({page}) {

  // Local state
  const [width, setWidh] = React.useState(null)
  const [elementMobile, setElementMobile] = React.useState(null)

  // Effect
  React.useEffect(() => {

    if (typeof window !== 'undefined') {

      setWidh(window.innerWidth)
      setElementMobile(
        {
          contact: contactElementMobile,
          ourWorkflow: ourWorkflowElementMobile,
          project: projectElementMobile
        }
      )

    }

  }, [])
  return (
    <>
      {
        width & width <= 768 && (
          <Image
            src={elementMobile && elementMobile[page]}
            alt="element"
            width={500}
            height={300}
            id={'element-mobile'}
          />
        )
      }
    </>
  )
}
