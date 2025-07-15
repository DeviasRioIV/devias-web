'use client'
// External module
import { useState } from "react"
import Clarity from "@microsoft/clarity"

// Internal module
import styles from'./DownloadBtn.module.scss'

// Components
import NewsletterForm from "@/app/Components/NewsletterForm/NewsletterForm"

export default function DownloadBtn() {

  const [open, setOpen] = useState(false)

  const handlerDownload = () => {
    Clarity.event("Download Ebook")
    setOpen(true)
    console.log('hola')
  }

  return (
    <>
      <a
        href="/Ebook_Devias.pdf"
        download="Ebook Devias.pdf" 
        className={styles.btn_download}
        onClick={handlerDownload}>
        Descargar eBook 
      </a>

      { 
        open &&
        <div className={styles.modal_content}>
          <span className={styles.background_modal} onClick={() => setOpen(false)} />
          <NewsletterForm handleCancel={() => setOpen(false)} />
        </div>
      }
    </>
  )
}
