import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Navigation() {
  const auth = getAuth();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  return (
    <nav style={{ backgroundColor: 'black' }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        {user ? (
          // Display these items if the user is logged in
          <>
            <li>
              <Link to="/accountInformation">Account Information</Link>
            </li>
            <li>
              <Link to="/preferenceForm">Preference Form</Link>
            </li>
            <li>
              <Link to="/AddLocation">Add Location</Link>
            </li>
          </>
        ) : (
          // Display these items if the user is not logged in
          <li>
            <Link to="/authentication">Members</Link>
          </li>
        )}
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
