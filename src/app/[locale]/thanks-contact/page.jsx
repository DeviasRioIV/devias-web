'use client'

// External Modules
import React from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

// Internal Modules
import styles from './thanks-contact.module.scss'

// Components
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import Link from 'next/link'

export default function ThanksContact() {

  // Hooks
  const router = useRouter()
  const params = useParams()
  const t = useTranslations('thanks_contact')

  // State
  const [isValid, setIsValid] = React.useState(false)

  // Refs
  const hasVerified = React.useRef(false)

  // Effects
  React.useEffect(() => {
    // Evitar ejecución múltiple en Strict Mode
    if (hasVerified.current) return
    hasVerified.current = true

    // Verificar si el usuario llegó desde el formulario
    const formSubmitted = sessionStorage.getItem('formSubmitted')
    
    if (!formSubmitted) {
      // Redirigir al home si no hay token
      router.push(`/${params.locale}`)
      return
    }
    
    // Limpiar el token para que no pueda acceder de nuevo con F5
    sessionStorage.removeItem('formSubmitted')
    
    // Permitir que se muestre el contenido
    setIsValid(true)
  }, [router, params.locale])

  // No renderizar nada hasta verificar
  if (!isValid) {
    return null
  }

  return (
    <main className={styles.thanks_contact_page}>
      <Header />
      <div className={styles.thanks_contact}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.icon_wrapper}>
              <svg 
                className={styles.check_icon} 
                viewBox="0 0 52 52" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle 
                  className={styles.check_circle} 
                  cx="26" 
                  cy="26" 
                  r="25" 
                  fill="none"
                />
                <path 
                  className={styles.check_path} 
                  fill="none" 
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
            
            <h1 className={styles.title}>
              {t('title')}
            </h1>
            
            <p className={styles.message}>
              {t('message')}
            </p>
            
            <p className={styles.submessage}>
              {t('submessage')}
            </p>
            
            <Link 
              href={`/${params.locale}`}
              className={styles.home_button}
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
