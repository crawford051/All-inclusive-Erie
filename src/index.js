import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBxPfUUnIQiF8XvnNEfpYflkn0KY-xY2J4",
  authDomain: "all-inclusive-erie.firebaseapp.com",
  projectId: "all-inclusive-erie",
  storageBucket: "all-inclusive-erie.appspot.com",
  messagingSenderId: "121074333420",
  appId: "1:121074333420:web:88659230f7df72db4797c9",
  measurementId: "G-WN7B1T9Q61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
