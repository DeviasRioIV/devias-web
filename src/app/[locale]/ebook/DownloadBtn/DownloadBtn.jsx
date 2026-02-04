'use client'
// External module
import Clarity from "@microsoft/clarity"
import { useTranslations } from 'next-intl'

// Internal module
import styles from'./DownloadBtn.module.scss'

// Components
import Link from "next/link"
import { useParams } from "next/navigation"

export default function DownloadBtn() {

  //Hooks
  const params = useParams()
  const t = useTranslations('ebook')

  const handlerDownload = () => {
    Clarity.event("Download Ebook")
  }

  return (
    <Link
      href={`/${params.locale}/thanks-download-ebook`}
      download="eBook Devias.pdf" 
      className={styles.btn_download}
      onClick={handlerDownload}
    >
      {t('download_button')}
    </Link>
  )
}
