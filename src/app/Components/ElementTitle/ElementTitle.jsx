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

  // Constant
  const width = window.innerWidth

  const elementMobile = {
    contact: contactElementMobile,
    ourWorkflow: ourWorkflowElementMobile,
    project: projectElementMobile
  }

  return (
    <>
      {
        width <= 768 && (
          <Image
            src={elementMobile[page]}
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
