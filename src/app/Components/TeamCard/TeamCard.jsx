// External Modules
import React from 'react'

// Internal modules
import './TeamCard.scss'
import teamJSON from './teamCard.json'

//Assets
import mauri from 'Assets/Staff/mauri.png'
import andres from 'Assets/Staff/andres.png'
import vicky from 'Assets/Staff/vicky.png'
import juanca from 'Assets/Staff/juanca.png'
import guly from 'Assets/Staff/guly.png'
import vilma from 'Assets/Staff/vilma.png'
import bruno from 'Assets/Staff/bruno.png'
import rafa from 'Assets/Staff/rafa.png'
import fer from 'Assets/Staff/fer-sydor.png'
import horacio from 'Assets/Staff/horacio.jpg'
import nico from 'Assets/Staff/nico.png'
import ana from 'Assets/Staff/ana.png'
import agus from 'Assets/Staff/agus.png'
import lucho from 'Assets/Staff/lucho.png'
import eli from 'Assets/Staff/eli.png'

export default function TeamCard() {

  // Constants
  const images = [
    mauri,
    andres,
    vicky,
    juanca,
    guly,
    vilma,
    bruno,
    rafa,
    fer,
    horacio,
    nico,
    ana,
    agus,
    lucho,
    eli
  ]

  const team = teamJSON.team

  return (
    team.map((profile, index) => (
      <div key={index} className='card'>
        <div className='profile-picture'>
          <img src={images[profile.img]} alt={profile.name} />
        </div>
        <div className='profile-description'>
          <h4>{profile.name}</h4>
          <h5>{profile.job}</h5>
        </div>
      </div>
    ))
  )

}