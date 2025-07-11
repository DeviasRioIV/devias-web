// Internal modules
import styles from './ebook.module.scss'
// Component
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'

export default function Ebook() {
  return (
    <>
      <Header />
      <main id={styles.ebook}>
        <header>
          Historias reales para founders latinos que empiezan en tech
Construir un producto digital sin background técnico es posible. Este eBook gratuito reúne aprendizajes, errores y atajos de founders como vos.
        </header>
        
        <section>
          Si sos founder y no venís del mundo tech, este material te va a ahorrar tiempo, errores y frustraciones.
 Hecho por Devias, con +19 años ayudando a startups a lanzar su MVP sin fundirse en el intento.
        </section>
        
        <section>
          Descargar el eBook (PDF, sin formularios)
        </section>
        
        <section>
          Testimonio real (o simulado si no hay aún)
        </section>
        
        <section>
          Cierre emocional / invitación
        </section>
      </main>
      <Footer />
    </>
  )
}
