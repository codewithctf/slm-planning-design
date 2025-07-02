require('dotenv').config({ path: '../.env.local' });
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

app.post('/api/submitContact', async (req, res) => {
  const { name, email, message, subject } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const { error } = await supabase.from('messages').insert([{
    full_name: name,
    email,
    message,
    subject: subject || 'Contact Form',
  }]);
  if (error) {
    console.error('Supabase error (messages):', error);
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json({ success: true });
});

app.post('/api/submitQuote', async (req, res) => {
  const { name, email, phone, company, projectType, projectScope, timeline, budgetRange } = req.body;
  if (!name || !email || !projectType || !projectScope) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const { error } = await supabase.from('quote_requests').insert([
    {
      full_name: name,
      email,
      phone_number: phone,
      organization: company,
      project_type: projectType,
      project_description: projectScope,
      timeline,
      budget_range: budgetRange,
    }
  ]);
  if (error) {
    console.error('Supabase error (quote_requests):', error);
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json({ success: true });
});

app.post('/api/subscribeNewsletter', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  const { error } = await supabase.from('newsletter_subscribers').insert([{ email }]);
  if (error) {
    console.error('Supabase error (newsletter_subscribers):', error);
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
