// Express API server for SLM Planning & Design (Payload, PostgreSQL, Google Auth)
import express from 'express';
import payload from 'payload';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import config from './payload.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Payload CMS API and Admin
await payload.init({
  secret: process.env.PAYLOAD_SECRET || 'changeme',
  mongoURL: false, // Not using Mongo
  express: app,
  config,
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Serve frontend static files if needed
// app.use(express.static(path.resolve(__dirname, '../dist')));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`SLM Payload API running on http://localhost:${PORT}`);
});
