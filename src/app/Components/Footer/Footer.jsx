// External Modules
import React from 'react'
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";

// Internal modules
import './Footer.scss'
import Link from 'next/link'

// Assets
import logoDevias from 'Assets/Utilities/Logos/iso-eslogan.svg'

export default function Footer() {

  // Local state
  const [language, setLanguage] = React.useState(state.language_content.footer.links)

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.footer.links)

  }, [state.language])

  return (
    <footer>
      <section className='container'>
        <div className='container-footer-links'>
          <ul>
            <li>
              <Link href='/about-us'> {language.about_us} </Link>
            </li>
            <li>
              <Link href='/our-projects'> {language.projects} </Link>
            </li>
            <li>
              <Link href='/our-way'> {language.our_workflow} </Link>
            </li>
            <li>
              <Link href='/contact-us'> {language.contact} </Link>
            </li>
          </ul>
        </div>
        <div id='social-icons'>
          <a href='https://www.facebook.com/devias.ar' target='_blank' rel='noreferrer'>
            <i>
              <RiFacebookFill />
            </i>
          </a>
          <a href='https://www.linkedin.com/company/devias-ar/mycompany/?viewAsMember=true' target='_blank' rel='noreferrer'>
            <i>
              <RiLinkedinFill />
            </i>
          </a>
          <a href='https://www.instagram.com/devias.ar/?hl=es-la' target='_blank' rel='noreferrer'>
            <i>
              <RiInstagramLine />
            </i>
          </a>
        </div>
        <div className='container-footer-logo'>
          <Link href='/'>
            <img src={logoDevias.src} alt='dev-logo' />
          </Link>
        </div>
      </section>
    </footer>
  )

}
