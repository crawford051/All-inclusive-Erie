import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        // Inside Navigation.js or wherever your navigation links are defined
        <ul>
         <li>
             <Link to="/">Home</Link>
         </li>
         <li>
             <Link to="/map">Map</Link>
         </li>
         <li>
          <Link to="/authentication">Members</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
  {/* Add more navigation items as needed */}
</ul>

    </nav>
  );
}

export default Navigation;
