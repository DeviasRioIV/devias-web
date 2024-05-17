// External modules
import React from 'react'

// Internal modules
import './Card.scss'

export default function Card({img, alt}) {

  return (
    <div className='container-card'>
      <img src={img} alt={alt} />
    </div>
  )

}
