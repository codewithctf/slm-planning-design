import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  const data = await request.json();
  const { data: result, error } = await supabase
    .from('quote_requests')
    .insert([data]);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify({ success: true, result }), { status: 200 });
}
