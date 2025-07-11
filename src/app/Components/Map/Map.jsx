'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const deviasCoordinates = [-33.11901024541493, -64.36561812394065]

export default function MapView() {
  const mapRef = useRef(null)

  useEffect(() => {
    if (!mapRef.current) return

    const map = L.map(mapRef.current).setView(deviasCoordinates, 16)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    const customIcon = L.icon({
      iconUrl: '/Assets/Utilities/Logos/iso-eslogan.svg', // ruta desde /public
      iconSize: [40, 40], // tamaño del ícono
      iconAnchor: [20, 40], // punto del ícono que apunta a la ubicación
      popupAnchor: [0, -40], // posición del popup respecto al ícono
    })

    L.marker(deviasCoordinates, { icon: customIcon })
      .addTo(map)
      .openPopup()

    return () => {
      map.remove()
    }
  }, [])

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '100%',
        scale: '1.09',
        transformOrigin: 'top left'
      }}
    />
  )
}
