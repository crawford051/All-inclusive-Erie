// server.js (backend)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/your-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const preferencesSchema = new mongoose.Schema({
  // Define your schema fields
  wheelchair: Boolean,
  closeParking: Boolean,
  braille: Boolean,
  // ... other preferences
});

const Preferences = mongoose.model('Preferences', preferencesSchema);

app.post('/api/login', (req, res) => {
  // Handle login logic
});

app.post('/api/preferences', async (req, res) => {
  try {
    const preferencesData = req.body;
    const preferences = new Preferences(preferencesData);
    await preferences.save();
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving preferences:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
