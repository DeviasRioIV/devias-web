// External modules
import React from 'react'
import { SiReact, SiJavascript, SiCss3, SiDelphi, SiFigma, SiRubyonrails } from "react-icons/si";

// Internal modules
import './TechStack.scss'

export default function TechStack({tech_stack}) {

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
    <section className='tech-stack'>
      <div className='container'>
        <div className='contain-tech'>
          <div className='tech-title'>
            <h2>
              TECH STACK
            </h2>
          </div>
          <div className='contain-tech-card'>
            {
              tech_stack.map((tech, index) => (
                <div key={index} className='tech-card'>
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
