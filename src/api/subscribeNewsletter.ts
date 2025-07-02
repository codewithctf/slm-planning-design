// API route to handle newsletter subscriptions and insert into Supabase
import { createClient } from '@supabase/supabase-js';

// Use the same style as submitContact/submitQuote for Vite/Express API
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  const data = await request.json();
  const { email } = data;
  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
  }
  const { error } = await supabase.from('newsletter_subscribers').insert([{ email }]);
  if (error) {
    console.error('Supabase error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
