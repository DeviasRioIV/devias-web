'use client'

// External Modules
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useParams, usePathname, useRouter } from 'next/navigation'

// Internal modules
import styles from './header.module.scss'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'

// Assets
import logo from 'Assets/Utilities/Logos/logo-devias.svg'

export default function Header() {

  // Local state
  const [isOpen, setIsOpen] = React.useState(false)
  const [locale, setLocale] = React.useState('en')

  // Constants

  const links = [
    { href: '', label: 'home' },
    { href: '/about-us', label: 'about_us' },
    { href: '/our-projects', label: 'projects' },
    { href: '/our-way', label: 'our_workflow' },
    { href: '/ebook', label: 'ebook' },
    { href: '/contact-us', label: 'contact', isButton: true },
  ]

  const pathname = usePathname()

  const router = useRouter()

  const params = useParams()

  const headerLink = useTranslations('header.links')

  //Locale Effect
  React.useEffect(() => {

    const locale = params.locale

    setLocale(locale)

  }, [params])

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
    <header className={styles.header}>
      <nav className={styles.container_header}>
        <div className={`container ${styles.container}`}>

          {/* Logo */}
          <section className={styles.container_header_logo}>
            <Link href={`/${locale}/`}>
              <Image src={logo.src} alt='dev-logo' width={115} height={115}/>
            </Link>
          </section>

          {/* NavBar */}
          <section className={`${styles.container_header_links} ${isOpen ? styles.show : ''}`}>
            <ul>
              {links.map((link, index) => {
                const isActive = pathname === `/${locale}${link.href}`

                return (
                  <li
                    key={index}
                    className={link.isButton ? styles.container_btn_contact : ''}
                  >
                    <Link
                      href={`/${locale}${link.href}`}
                      className={`${isActive ? styles.active : ''}`}
                      id={link.isButton ? styles.btn_contact : ''}
                    >
                      {headerLink(link.label)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Language Toggle */}

          <section className={styles.language_toggle}>
            <button className={`${locale === 'en' ? styles.active : ''}`} onClick={() => selectLanguage('en')}>
              EN
            </button>
            |
            <button className={`${locale === 'es' ? styles.active : ''}`} onClick={() => selectLanguage('es')}>
              ES
            </button>
          </section>

          {/* Burger button responsive */}
          <button className={styles.menu_toggle} onClick={handleMenuToggle}>
            <span className={styles.navbar_toggler_icon}>
              {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </span>
          </button>
        </div>
      </nav>
    </header>
  )

}

