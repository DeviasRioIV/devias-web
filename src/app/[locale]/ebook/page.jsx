// Internal modules
import styles from './ebook.module.scss'

// Component
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import DownloadBtn from './DownloadBtn/DownloadBtn'

export default function Ebook() {
  return (
    <>
      <Header />
      <main id={styles.ebook} className='container'>

        <div>
          <h1 className={styles.title}>Devias eBook</h1>
          <p className={styles.comment}>
            "Historias reales para founders latinos que empiezan en tech."
          </p>
        </div>

        <section className={styles.container}>
          <section className={styles.hero_section}>
            <p className={styles.text}>
              Construir un producto digital sin background técnico es posible. Este eBook gratuito reúne aprendizajes, errores y atajos de founders como vos.
            </p>
          </section>
          
          <section className={styles.paragraph}>
            <p className={styles.text}>
              Si sos founder y no venís del mundo tech, este material te va a ahorrar tiempo, errores y frustraciones.
            </p>
            <p className={styles.text}>
              Hecho por Devias, con +19 años ayudando a startups a lanzar su MVP sin fundirse en el intento.
            </p>
          </section>
          
          <DownloadBtn className={styles.btn_download} />
          
          <section className={styles.paragraph}>
            <p className={styles.text}>
              Este proyecto es solo el comienzo.
            </p>

            <p className={styles.text}>
              Si te gustaría compartir tu historia o sumar tu experiencia para una próxima edición escribínos a <a target='_blank' href='mailto:hola@devias.ar'>hola@devias.ar</a> o por <a target='_blank' href="https://www.linkedin.com/company/devias-ar/mycompany/?viewAsMember=true">LinkedIn</a>.
            </p>

            <p className={styles.text}>
              Somos muchos los que estamos en este camino. Lo importante es no recorrerlo solos.
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
