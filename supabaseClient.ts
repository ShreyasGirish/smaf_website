import { createClient } from '@supabase/supabase-js';

// This pulls the variables dynamically from your .env.local file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase configuration tokens in .env.local file.");
}

// Spins up a single unified portal instance for cloud communication
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');