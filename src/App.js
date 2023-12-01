import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import your CSS file

import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MapView from './view/MapView';
import Authentication from './view/Authentication';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/authentication" component={Authentication} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
