// External Modules
import React from 'react'

// Internal modules
import './Footer.scss'
import {Link, NavLink} from 'react-router-dom'
import {AppContext} from '../../AppContext'

// Assets
import logoDevias from 'Assets/Utilities/logo-devias.png'

export default function Footer() {

  // Global state
  const {state} = React.useContext(AppContext)

  // Local state
  const [language, setLanguage] = React.useState(state.language_content.footer.links)

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.footer.links)

  }, [state.language])

  return (
    <footer>
      <div id='social-icons'>
        <a href='https://www.facebook.com/devias.ar' target='_blank' rel='noreferrer'>
          <i className='fab fa-facebook' />
        </a>
        <a href='#' target='_blank' rel='noreferrer'>
          <i className='fab fa-twitter' />
        </a>
        <a href='https://www.linkedin.com/company/devias-ar/mycompany/?viewAsMember=true' target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin' />
        </a>
        <a href='https://www.instagram.com/devias.ar/?hl=es-la' target='_blank' rel='noreferrer'>
          <i className='fab fa-instagram' />
        </a>
      </div>
      <section className='container'>
        <div className='container-footer-links'>
          <ul>
            <li>
              <NavLink to='/our-customers'> {language.customers} </NavLink>
            </li>
            <li>
              <NavLink to='/about-us'> {language.about_us} </NavLink>
            </li>
            <li>
              <NavLink to='/our-way'> {language.our_way} </NavLink>
            </li>
            {/* <li>
              <NavLink to='/careers'> Careers </NavLink>
            </li> */}
          </ul>
        </div>
        <div className='container-footer-logo'>
          <Link to='/'>
            <img src={logoDevias.src} alt='dev-logo' />
          </Link>
        </div>
      </section>
    </footer>
  )

}
