//External modules
import React from 'react'
import {Link} from 'react-router-dom'
import Image from 'next/image'

//Internal modules
import './WhatsappBubble.scss'

// Assets
import logoWhatsapp from 'Assets/Utilities/logo-whatsapp.png'

export default function WhatsappBubble () {

  return (

    <div className='whatsapp-bubble'>
      <Link to='https://wa.me/543513464561' target='_blank'>
        <Image src={logoWhatsapp.src} width={500} height={500} alt='logo-whatsapp' />
      </Link>
    </div>

  )

}