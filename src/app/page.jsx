'use client'
import App from "./App"
import styles from "./page.module.css"

import './page.scss'

export default function Home() {


  return (
    <div id="root" className={styles.main}>

      <App />

    </div>
  );
}
