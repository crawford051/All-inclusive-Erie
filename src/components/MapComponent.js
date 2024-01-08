import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import the Leaflet CSS
import axios from 'axios';

const MapComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const erieCoordinates = [42.1292, -80.0851]; // Coordinates for Erie, Pennsylvania
  const zoomLevel = 13;

  useEffect(() => {
    // Fetch data from MongoDB and update the state
    const fetchData = async () => {
      try {
        const response = await axios.get('mongodb+srv://caitlyn:mongo@nicole1234.huwdqsv.mongodb.net/'); 
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <div className="map-container">
      <MapContainer center={erieCoordinates} zoom={zoomLevel} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Render markers for each restaurant */}
        {restaurants.map((restaurant) => (
          <Marker key={restaurant._id} position={[restaurant.latitude, restaurant.longitude]}>
            {/* You can customize the marker popup content here */}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
