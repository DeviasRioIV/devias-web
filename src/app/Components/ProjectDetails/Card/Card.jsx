// External modules
import React from 'react'
import Image from 'next/image'

// Internal modules
import './Card.scss'

// Assets
import imgPlaceholder from 'Assets/Projects/no-thumbnail.webp'

export default function Card({img, alt, background}) {

  return (
    <div className='container-card' style={{background: background}}>
      <Image src={img ? img : imgPlaceholder} alt={alt} width={300} height={300}/>
    </div>
  )

}
