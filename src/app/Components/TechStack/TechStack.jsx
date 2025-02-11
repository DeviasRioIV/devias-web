// External modules
import React from 'react'
import { SiReact, SiJavascript, SiCss3, SiDelphi, SiFigma, SiRubyonrails } from "react-icons/si";

// Internal modules
import styles from './tech-stack.module.scss'

export default function TechStack({ tech_stack }) {
  // Constants
  const techIcons = {
    React: <SiReact />,
    Javascript: <SiJavascript />,
    CSS: <SiCss3 />,
    Delphi: <SiDelphi />,
    Figma: <SiFigma />,
    'Ruby on Rails': <SiRubyonrails />
  }

  return (
    <section className={styles.tech_stack}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contain_tech}>
          <div className={styles.tech_title}>
            <h2>
              TECH STACK
            </h2>
          </div>
          <div className={styles.contain_tech_card}>
            {
              tech_stack.map((tech, index) => (
                <div key={index} className={styles.tech_card}>
                  <span>
                    {techIcons[tech.tech_name]}
                  </span>
                  <p>
                    {tech.tech_name}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
