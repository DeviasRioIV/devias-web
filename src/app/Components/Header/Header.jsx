'use client'

// External Modules
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

// Internal modules
import './Header.scss'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'

// Assets
import logo from 'Assets/Utilities/Logos/logo-devias.svg'
import { usePathname, useRouter } from 'next/navigation'

export default function Header({ params }) {

  // Local state
  const [isOpen, setIsOpen] = React.useState(false)

  const pathname = usePathname()
  const router = useRouter()
  const locale = params?.locale || 'en'

  const link = useTranslations('header.links')

  // Effects
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

    const newLanguage = lan
    const path = pathname.split('/').slice(2).join('/')
    router.push(`/${newLanguage}/${path}`)

    }


  return (
    <header>
      <nav className='container-header'>
        <div className='container'>

          {/* Logo */}
          <section className='container-header-logo'>
            <Link href={`/${locale}/`}>
              <img src={logo.src} alt='dev-logo' />
            </Link>
          </section>

          {/* NavBar */}
          <section className={`container-header-links ${isOpen ? 'show' : ''}`}>
            <ul>
              <li>
                <Link
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''}
                  href={`/${locale}/`}
                > {link('home')}
                </Link>
              </li>
              <li>
                <Link
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} href={`/${locale}/about-us`}
                > {link('about_us')}
                </Link>
              </li>
              <li>
                <Link
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} href={`/${locale}/our-projects`}
                > {link('projects')}
                </Link>
              </li>
              <li>
                <Link
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} href={`/${locale}/our-way`}
                > {link('our_workflow')}
                </Link>
              </li>
              <li className='line' />
              <li className='container-btn-contact'>
                <Link
                  id='btn-contact' className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} href={`/${locale}/contact-us`}
                > {link('contact')}
                </Link>
              </li>
            </ul>
          </section>

          {/* Language Toggle */}

          <section className='language-toggle'>
            <button className={`${locale === 'en' ? 'active' : ''}`} onClick={() => selectLanguage('en')}>
              EN
            </button>
            |
            <button className={`${locale === 'es' ? 'active' : ''}`} onClick={() => selectLanguage('es')}>
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

