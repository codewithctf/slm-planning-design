// Express API server for SLM Planning & Design (Payload, PostgreSQL, Google Auth)
const express = require('express');
const payload = require('payload');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Payload CMS API and Admin
payload.init({
  secret: process.env.PAYLOAD_SECRET || 'changeme',
  mongoURL: false, // Not using Mongo
  express: app,
  config: require('./payload.config').default,
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Serve frontend static files if needed
// app.use(express.static(path.resolve(__dirname, '../dist')));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`SLM Payload API running on http://localhost:${PORT}`);
});
