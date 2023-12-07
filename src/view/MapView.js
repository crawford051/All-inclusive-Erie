// /src/views/MapView.js
import React from 'react';
import MapComponent from '../components/MapComponent'; 
//import './MapView.css'; 

const MapView = () => {
  return (
    <div className="map-view-container">
      <main>
        <h1>Map View</h1>
        <MapComponent />
      </main>
    </div>
  );
};

export default MapView;