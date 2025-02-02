import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mjgikfkirztqkkztiydu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZ2lrZmtpcnp0cWtrenRpeWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MDY5OTksImV4cCI6MjA1NDA4Mjk5OX0.5A7z9uPOTdSRLtuhLQvS789hR1ZOUtf1bfHbAtm_07Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
