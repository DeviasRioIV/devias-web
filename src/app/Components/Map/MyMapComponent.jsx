// External Modules
import React from 'react'

// Internal Modules
import './MyMapComponent.scss'

export default function MyMapComponent({center, zoom}) {

  const marketDevias = {lat: -33.119089353100854, lng: -64.3656716210941}

  const ref = React.useRef()

  React.useEffect(() => {

    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom
    })

    new window.google.maps.Marker({
      position: marketDevias,
      map,
      title: 'Devias'
    })

  })

  return (

    <div id='map-container'>
      <div ref={ref} id='map' />
    </div>

  )

}