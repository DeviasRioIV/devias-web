// External Modules
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";

// Internal modules
import styles from './footer.module.scss'

// Assets
import logoDevias from 'Assets/Utilities/Logos/iso-eslogan.svg'
import Image from 'next/image';

export default function Footer() {

  // Constants
  const links = useTranslations('footer.links')

  return (
    <footer id={styles.footer}>
      <section className={`container ${styles.container}`}>
        <div className={styles.container_footer_links}>
          <ul>
            <li>
              <Link href='/about-us'> {links('about_us')} </Link>
            </li>
            <li>
              <Link href='/our-projects'> {links('projects')} </Link>
            </li>
            <li>
              <Link href='/our-way'> {links('our_workflow')} </Link>
            </li>
            <li>
              <Link href='/contact-us'> {links('contact')} </Link>
            </li>
          </ul>
        </div>
        <div id={styles.social_icons}>
          <a href='https://www.facebook.com/devias.ar' target='_blank' rel='noreferrer'>
            <i>
              <RiFacebookFill />
            </i>
          </a>
          <a href='https://www.linkedin.com/company/devias-ar/mycompany/?viewAsMember=true' target='_blank' rel='noreferrer'>
            <i>
              <RiLinkedinFill />
            </i>
          </a>
          <a href='https://www.instagram.com/devias.ar/?hl=es-la' target='_blank' rel='noreferrer'>
            <i>
              <RiInstagramLine />
            </i>
          </a>
        </div>
        <div className={styles.container_footer_logo}>
          <Link href='/'>
            <Image src={logoDevias.src} alt='dev-logo' width={65} height={65} />
          </Link>
        </div>
      </section>
    </footer>
  )

}
