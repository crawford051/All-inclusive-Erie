import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PreferenceForm = () => {
  const [wheelchair, setWheelchair] = useState(false);
  const [closeParking, setCloseParking] = useState(false);
  const [braille, setBraille] = useState(false);

  const navigate = useNavigate();

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
        navigate.push('/success');
      })
      .catch(error => {
        console.error('Error submitting preferences', error);
        // Handle error scenarios
      });
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h1>Preference Form</h1>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <label>
                <input type="checkbox" checked={wheelchair} onChange={() => setWheelchair(!wheelchair)} />
                Wheelchair Accessibility
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <input type="checkbox" checked={closeParking} onChange={() => setCloseParking(!closeParking)} />
                Close Parking Spot
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <input type="checkbox" checked={braille} onChange={() => setBraille(!braille)} />
                Braille Support
              </label>
            </td>
          </tr>
          {/* Add more preferences as needed */}
        </tbody>
      </table>

      <a href="/PreferencesSet">
        <button onClick={handleSubmit} class="auth-button">Submit Preferences</button>
      </a>
    </div>
  );
};

export default PreferenceForm;
