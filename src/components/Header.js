import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import logo from '../Images/logo.png';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      // Unsubscribe the observer when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      // Clear the user state upon successful logout
      setUser(null);
      console.log('Successfully logged out!');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <header>
      <a href="Home.html"><img src={logo} alt="Logo" id="logo" /></a>
      <br />
      <div style={{ position: 'absolute', bottom: '630px', right: '2px' }}>
        {user ? (
          // If the user is authenticated, show the Log Out button
          <button type="button" className="auth-button" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          // If the user is not authenticated, show the Log In button
          <a href="/authentication">
            <button type="button" className="auth-button">
              Log In
            </button>
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;
