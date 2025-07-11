'use client'
// External module
import Clarity from "@microsoft/clarity"

// Internal module
import styles from'./DownloadBtn.module.scss'

export default function DownloadBtn() {

  return (
    <a href="/Ebook_Devias.pdf" download className={styles.btn_download} onClick={() => Clarity.event("custom-event")}>
      Descargar Ebook
    </a>
  )
}
