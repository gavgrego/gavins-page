'use client'

import mapboxgl, { type Map as MapType } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef, useState } from 'react'

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ2FhYWF2IiwiYSI6ImNsc3oyY2M3aDA4Ym4ybHA4MnB5N2w2YzAifQ.1mryCJKAR8NFIL0EwzYxsw'

type MapProps = {
  center: [number, number]
  zoom: number
}

const Map = ({ ...props }: MapProps) => {
  const mapContainer = useRef(null)
  const map = useRef<MapType | null>(null)
  const [lng, setLng] = useState(props.center[0])
  const [lat, setLat] = useState(props.center[1])
  const [zoom, setZoom] = useState(props.zoom)

  useEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current as unknown as string | HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    })
  }, [])

  return (
    <div className="h-full w-full rounded-md relative overflow-hidden">
      <div ref={mapContainer} className="w-[400px]" />
    </div>
  )
}

export default Map
