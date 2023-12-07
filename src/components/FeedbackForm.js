import React, { useState } from 'react';

const AccessibilityFeedbackForm = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isWheelchairAccessible, setIsWheelchairAccessible] = useState(false);
  const [hasCloseHandicapParking, setHasCloseHandicapParking] = useState(false);
  const [hasElevator, setHasElevator] = useState(false);
  const [isOneLevel, setIsOneLevel] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);
  const [selectedOption, setSelectedOption] = useState('newLocation');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission logic here, such as sending the data to a server.

    // For this example, we'll just log the values to the console.
    console.log('Name:', name);
    console.log('Place:', place);
    console.log('Location:', location);
    console.log('Type:', type);
    console.log('Feedback:', feedback);
    console.log('Is Wheelchair Accessible:', isWheelchairAccessible);
    console.log('Has Close Handicap Parking:', hasCloseHandicapParking);
    console.log('Has Elevator:', hasElevator);
    console.log('Is One Level:', isOneLevel);
    console.log('Is Multi Level:', isMultiLevel);

    // Reset the form after submission
    setName('');
    setPlace('');
    setLocation('');
    setType('');
    setFeedback('');
    setIsWheelchairAccessible(false);
    setHasCloseHandicapParking(false);
    setHasElevator(false);
    setIsOneLevel(false);
    setIsMultiLevel(false);
  };

  return (
    <div style={{
      backgroundColor: 'rgba(173, 216, 230, 0.5)', // 50% transparent light blue
      padding: '10px',
      position: 'relative',
      borderRadius: '8px',
      margin: '20px', // Optional: Add margin to separate the box from the rest of the content
    }}>
      <label style={{
          position: 'absolute',
          top: '-20px', // Move the dropdown above the box
          left: '10px', // Adjust the left position as needed
        }}>
        <div style={{ textAlign: 'center'}}>Would you like to: 
        <br></br><select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="newLocation">New Location</option>
          <option value="feedback">Feedback</option>
        </select>
        </div>
      </label>

      {selectedOption === 'newLocation' ? (
        <div>
          <h2>New Location</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Your Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                Name of Place:
                <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                Type of Place:
                <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                <p className="small-font">Park, Restaurant, School, Parking lot, Church, etc.</p>
              </label>
            </div>
            <div>
            <h3 style={{ color: 'darkblue' }}>Is your new place?</h3>
        </div>
        <div>
          <label>
            Wheelchair Accessible:
            <input
              type="checkbox"
              checked={isWheelchairAccessible}
              onChange={() => setIsWheelchairAccessible(!isWheelchairAccessible)}
            />
          </label>
        </div>

        <div>
          <label>
            Close Handicap Parking:
            <input
              type="checkbox"
              checked={hasCloseHandicapParking}
              onChange={() => setHasCloseHandicapParking(!hasCloseHandicapParking)}
            />
          </label>
        </div>

        <div>
          <label>
            Elevator:
            <input
              type="checkbox"
              checked={hasElevator}
              onChange={() => setHasElevator(!hasElevator)}
            />
          </label>
        </div>

        <div>
          <label>
            One Level:
            <input
              type="checkbox"
              checked={isOneLevel}
              onChange={() => setIsOneLevel(!isOneLevel)}
            />
          </label>
        </div>
        <div>
          <label>
            Multi Level:
            <input
              type="checkbox"
              checked={isMultiLevel}
              onChange={() => setIsOneLevel(!isMultiLevel)}
            />
          </label>
        </div>
            <button type="submit" className="small-button-2">
              Submit Feedback
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2> Give Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Your Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                Feedback:
                <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
              </label>
            </div>
            {/* ... (rest of the form for Feedback) */}
            <button type="submit" className="small-button-2">
              Submit Feedback
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AccessibilityFeedbackForm;
