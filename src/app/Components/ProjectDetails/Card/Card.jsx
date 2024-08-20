// External modules
import React from 'react'

// Internal modules
import './Card.scss'

export default function Card({img, alt, background}) {

  return (
    <div className='container-card' style={{background: background}}>
      <img src={img} alt={alt} />
    </div>
  )

}
