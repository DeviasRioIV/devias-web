// External Modules
import React from 'react'
import Link from 'next/link'

// Internal modules
import './Header.scss'
import {RxHamburgerMenu, RxCross2} from 'react-icons/rx'
import en from 'Helpers/english.json'
import es from 'Helpers/spanish.json'

// Assets
import logo from 'Assets/Utilities/Logos/logo-devias.svg'
import {AppContext} from '../../AppContext'

export default function Header() {

  // Global State
  const {state, dispatch} = React.useContext(AppContext)

  // Local state
  const [isOpen, setIsOpen] = React.useState(false)
  const [language, setLanguage] = React.useState(state.language_content.header.links)

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.header.links)

  }, [state.language])

  // Effects
  React.useEffect(() => {

    if(state.language === 'en') {

      dispatch({
        type: 'UPDATE_CONTENT_LANGUAGE',
        data: en
      })

    } else if (state.language === 'es') {

      dispatch({
        type: 'UPDATE_CONTENT_LANGUAGE',
        data: es
      })

    }

  },[])

  React.useEffect(() => {

    // Remove loader
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        const loader = document?.getElementById('loader')
        loader?.classList.add('leave')
        setTimeout(() => {
  
          loader?.remove()
  
        }, 200)
        document?.body.classList.remove('loading')
      }

    }, 300)

  }, [])

  // Methods
  const handleMenuToggle = () => {

    setIsOpen(!isOpen)

  }

  const selectLanguage = (lan) => {

    if (lan === 'en') {

      dispatch({
        type: 'UPDATE_LANGUAGE',
        data: 'en'
      })

      dispatch({
        type: 'UPDATE_CONTENT_LANGUAGE',
        data: en
      })

    } else {

      dispatch({
        type: 'UPDATE_LANGUAGE',
        data: 'es'
      })

      dispatch({
        type: 'UPDATE_CONTENT_LANGUAGE',
        data: es
      })

    }

  }

  return (
    <header>
      <nav className='container-header'>
        <div className='container'>

          {/* Logo */}
          <section className='container-header-logo'>
            <Link href='/'>
              <img src={logo.src} alt='dev-logo' />
            </Link>
          </section>

          {/* NavBar */}
          <section className={`container-header-links ${isOpen ? 'show' : ''}`}>
            <ul>
              <li>
                <Link
                  className={({isActive, isPending}) =>
                    isPending ? 'pending' : isActive ? 'active' : ''}
                  href='/'
                > {language.home}
                </Link>
              </li>
              <li>
                <Link
                  className={({isActive, isPending}) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} href='/about-us'
                > {language.about_us}
                </Link>
              </li>
              <li>
                <Link
                  className={({isActive, isPending}) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} href='/our-projects'
                > {language.projects}
                </Link>
              </li>
              <li>
                <Link
                  className={({isActive, isPending}) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} href='/our-way'
                > {language.our_workflow}
                </Link>
              </li>
              <li className='line' />
              <li className='container-btn-contact'>
                <Link
                  id='btn-contact' className={({isActive, isPending}) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} href='/contact-us'
                > {language.contact}
                </Link>
              </li>
            </ul>
          </section>

          {/* Language Toggle */}

          <section className='language-toggle'>
            <button className={`${state.language === 'en' ? 'active' : ''}`} onClick={() => selectLanguage('en')}>
              EN
            </button>
            |
            <button className={`${state.language === 'es' ? 'active' : ''}`} onClick={() => selectLanguage('es')}>
              ES
            </button>
          </section>

          {/* Burguer button responsive */}
          <button className='menu-toggle' onClick={handleMenuToggle}>
            <span className='navbar-toggler-icon'>
              {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </span>
          </button>
        </div>
      </nav>
    </header>
  )

}

