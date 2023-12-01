// API.js (frontend)
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-server-url/api', // Replace with server URL when we get there
});

export const login = (userData) => api.post('/login', userData);
export const submitPreferences = (preferencesData) => api.post('/preferences', preferencesData);
