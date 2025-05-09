import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://htdqvzklwhpseztngqvs.supabase.co'; // Replace with your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZHF2emtsd2hwc2V6dG5ncXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDc4NTQsImV4cCI6MjA2MjM4Mzg1NH0.NOZZPRSf_SlZFcdy6Nt6O6z0pSlYyPo9hemoIy0K9_Q'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
