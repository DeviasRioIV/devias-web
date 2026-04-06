// External modules
import { useTranslations } from 'next-intl'

// Internal modules
import styles from './terms.module.scss'

// Components
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'

function renderTextWithLinks(text) {
  if (typeof text !== 'string') return text

  const pattern = /([\w.-]+@[\w-]+\.[a-zA-Z]{2,}|(https?:\/\/|www\.)[\w\-._~:/?#[\]@!$&'()*+,;=%]+)/gi

  const elements = []
  let lastIndex = 0
  let match

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.slice(lastIndex, match.index))
    }

    const value = match[0]

    if (value.includes('@')) {
      elements.push(<a key={match.index} href={`mailto:${value}`}>{value}</a>)
    } else {
      const url = value.startsWith('http') ? value : `https://${value}`
      elements.push(<a key={match.index} href={url} target='_blank' rel='noopener noreferrer'>{value}</a>)
    }

    lastIndex = match.index + value.length
  }

  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex))
  }

  return elements.length > 0 ? elements : text
}

export default function TermsPage() {
  const t = useTranslations('terms')
  const points = t.raw('points')

  return (
    <main id='terms' className={styles.terms}>
      <Header />

      <h1>{t('title')}</h1>
      <p className={styles.date}>{t('date')}</p>

      <section className={`${styles.section_info} container`}>
        {Array.isArray(points) && points.map((point, idx) => (
          <div key={idx} className={styles.info_container}>
            {point.title && <h2 className={styles.info_title}>{point.title}</h2>}
            {point.description && <p className={styles.info_text}>{renderTextWithLinks(point.description)}</p>}
            {Array.isArray(point.list) && (
              <ul>
                {point.list.map((item, i) => (
                  <li key={i}>{renderTextWithLinks(item)}</li>
                ))}
              </ul>
            )}
            {point.additional_info && (
              <p className={styles.info_text}><em>{renderTextWithLinks(point.additional_info)}</em></p>
            )}
          </div>
        ))}
      </section>

      <Footer />
    </main>
  )
}
