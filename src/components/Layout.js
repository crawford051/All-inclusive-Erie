// Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
