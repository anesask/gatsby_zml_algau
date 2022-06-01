import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const MapBox = () => {
  return (
    <div>
      <MapContainer
        center={[47.67249, 10.30447]}
        zoom={16}
        style={{ height: "400px" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[47.67249, 10.30447]}>
          <Popup>
            Zentrum für Manuelle Lymdrainage
            <br /> <b>Ludwig Bromberger</b>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapBox
