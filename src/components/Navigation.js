import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ backgroundColor: 'black'}}>
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
        <li>
          <Link to="/PreferenceForm">PreferenceForm</Link>
        </li>
  {/* Add more navigation items as needed */}
</ul>

    </nav>
  );
}

export default Navigation;
