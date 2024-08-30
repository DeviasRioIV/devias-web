'use client'
import dynamic from "next/dynamic"
import styles from "./page.module.css"

// Import App dinamy to avoid build errors
const App = dynamic(() => import('./App'), { ssr: false });

import './page.scss'

export default function Home() {

  return (
    <div id="root" className={styles.main}>

      <App />

    </div>
  )
}
