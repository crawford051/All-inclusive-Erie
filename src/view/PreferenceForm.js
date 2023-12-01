import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PreferenceForm = () => {
  const [wheelchair, setWheelchair] = useState(false);
  const [closeParking, setCloseParking] = useState(false);
  const [braille, setBraille] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    // Handle form submission logic (send preferences to the server)
    // You can use axios or fetch to send data to your server

    // Example:
    const preferencesData = {
      wheelchair,
      closeParking,
      braille,
      // ... other preferences
    };

    // Send data to the server (replace 'your-server-url' with your actual server URL)
    fetch('http://your-server-url/api/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferencesData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Preferences submitted successfully', data);
        // Redirect to the success page
        history.push('/success');
      })
      .catch(error => {
        console.error('Error submitting preferences', error);
        // Handle error scenarios
      });
  };

  return (
    <div>
      <h2>Preference Form</h2>
      <form>
        <label>
          <input type="checkbox" checked={wheelchair} onChange={() => setWheelchair(!wheelchair)} />
          Wheelchair Accessibility
        </label>

        <label>
          <input type="checkbox" checked={closeParking} onChange={() => setCloseParking(!closeParking)} />
          Close Parking Spot
        </label>

        <label>
          <input type="checkbox" checked={braille} onChange={() => setBraille(!braille)} />
          Braille Support
        </label>

        {/* Add more preferences as needed */}
      </form>

      <button onClick={handleSubmit}>Submit Preferences</button>
    </div>
  );
};

export default PreferenceForm;
