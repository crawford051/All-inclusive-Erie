// /src/components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import the Leaflet CSS

const MapComponent = () => {
  const erieCoordinates = [42.1292, -80.0851]; // Coordinates for Erie, Pennsylvania
  const zoomLevel = 13;

  return (
    <div className="map-container">
      <MapContainer center={erieCoordinates} zoom={zoomLevel} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
