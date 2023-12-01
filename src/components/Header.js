import React from 'react';
import logo from '../Images/logo.png';


function Header() {
  return (
    <header>
      <a href="Home.html"><img src={logo} alt="Logo" id="logo" /></a>
      <br />
      <div style={{ position: 'absolute', bottom: '630px', right: '2px' }}>
        <a href="authentication.html">
          <button type="button" class="auth-button" >Log In</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
