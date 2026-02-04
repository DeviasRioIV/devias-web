// External modules
import { useTranslations } from 'next-intl'

// Internal modules
import styles from './ebook.module.scss'

// Component
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import DownloadBtn from './DownloadBtn/DownloadBtn'

export default function Ebook() {
  const t = useTranslations('ebook')
  
  return (
    <>
      <Header />
      <main id={styles.ebook} className='container'>

        <div>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.comment}>
            {t('comment')}
          </p>
        </div>

        <section className={styles.container}>
          <section className={styles.hero_section}>
            <p className={styles.text}>
              {t('hero_text')}
            </p>
          </section>
          
          <section className={styles.paragraph}>
            <p className={styles.text}>
              {t('paragraph_1')}
            </p>
            <p className={styles.text}>
              {t('paragraph_2')}
            </p>
          </section>
          
          <DownloadBtn className={styles.btn_download} />
          
          <section className={styles.paragraph}>
            <p className={styles.text}>
              {t('paragraph_3')}
            </p>

            <p className={styles.text}>
              {t('paragraph_4')} <a target='_blank' href='mailto:hola@devias.ar'>hola@devias.ar</a> {t('paragraph_4_link')} <a target='_blank' href="https://www.linkedin.com/company/devias-ar/mycompany/?viewAsMember=true">LinkedIn</a>.
            </p>

            <p className={styles.text}>
              {t('paragraph_5')}
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
