import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MapView from './view/MapView';
import Authentication from './view/Authentication';
import PreferenceForm from './view/PreferenceForm';
import SuccessPage from './view/SuccessPage';
import PreferencesSet from './view/PreferencesSet';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/authentication" element={<Authentication/>}/>
          <Route path="/PreferenceForm" element={<PreferenceForm />} />
          <Route path="/SuccessPage" element={<SuccessPage />} />
          <Route path="/PreferencesSet" element={<PreferencesSet />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
