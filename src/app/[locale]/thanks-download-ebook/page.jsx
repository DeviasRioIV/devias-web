'use client'
// External Modules
import React from 'react'
import { useTranslations } from 'next-intl'

// Internal Modules
import styles from './thanks-download-ebook.module.scss'

// Components
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import NewsletterForm from '@/app/Components/NewsletterForm/NewsletterForm'

export default function ThanksDownloadEbook() {

  // Hooks
  const t = useTranslations('thanks_download_ebook')

  React.useEffect(() => {
    // Descargar automáticamente el PDF al cargar la página
    const link = document.createElement('a')
    link.href = '/eBook_Devias.pdf'
    link.download = 'eBook_Devias.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  return (
    <main className={styles.thanks_ebook_page}>
      <Header />

      <div className={styles.thanks_ebook_container}>
        <section className={styles.left_section}>
          <div className={styles.content}>
            <div className={styles.icon_wrapper}>
              <svg className={styles.check_icon} viewBox="0 0 52 52">
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
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.message}>
              {t('message')}
            </p>
            <p className={styles.submessage}>
              {t('submessage')}
            </p>
          </div>
        </section>

        <section className={styles.right_section}>
          <NewsletterForm />
        </section>
      </div>

      <Footer />
    </main>
  )
}
