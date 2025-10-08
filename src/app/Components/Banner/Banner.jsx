'use client'
// Example modules
import React from 'react'

// Internal modules
import styles from './banner.module.scss'

export default function Banner({backgroundImg, mobileBackgroundImg, title, subTitle, variant, content, placeholder, decorations}) {

  const firstElementDesktop = variant ? '/Assets/Utilities/Elements/desktop/about-us-hero/about-us-left-elements.png' :'/Assets/Utilities/Elements/desktop/home-hero/left-elements.png'
  const firstElementMobile = variant ? '/Assets/Utilities/Elements/mobile/about-us-hero/about-us-left-elements.png' : '/Assets/Utilities/Elements/mobile/home-hero/home-left-elements.png'
  const secondElementDesktop = variant ? '/Assets/Utilities/Elements/desktop/about-us-hero/about-us-right-elements.png' : '/Assets/Utilities/Elements/desktop/home-hero/right-elements.png'
  const secondElementMobile = variant ? '/Assets/Utilities/Elements/mobile/about-us-hero/about-us-right-elements.png' : '/Assets/Utilities/Elements/mobile/home-hero/home-top-right-element.png'
  const bottomElementMobile = '/Assets/Utilities/Elements/mobile/home-hero/home-bottom-right-element.png'

  return (
    <div className={`container ${styles.container}`}>
      {
        (title || subTitle) &&
        <div className={styles.container_titles}>
          <h2 id={styles.title}>{title}</h2>
          <h3 id={styles.subtitle} className={styles.shaking}>
            {
              subTitle.split(' ').map((word, index) => (
                <span key={index}>
                  {word}
                </span>
              ))
            }
          </h3>
        </div>
      }
      {content}

      {
        placeholder &&
          <div id={styles.placeholder}/>
      }
      <picture>
        <source srcSet={backgroundImg} media="(min-width: 769px)" />
        <img
          src={mobileBackgroundImg}
          alt="banner"
          id={styles.banner}
        />
      </picture>

      {
        decorations &&
        <picture>
          <source srcSet={firstElementDesktop} media="(min-width: 769px)" />        
          <img src={firstElementMobile} alt="element" id={styles.element_left} />
        </picture>
      }

      {
        decorations &&
        <picture>
          <source srcSet={secondElementDesktop} media="(min-width: 768px)" />
          <img src={secondElementMobile} alt="element" id={styles.element_right} />
        </picture>
      }

      {
        decorations &&
        <img src={bottomElementMobile} alt="element" id={styles.element_bottom}/>
      }
    </div>
  )
}
