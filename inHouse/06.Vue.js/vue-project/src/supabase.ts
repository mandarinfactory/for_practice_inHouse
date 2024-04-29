import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oygynpvtsiprgwdcvrmi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95Z3lucHZ0c2lwcmd3ZGN2cm1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzODE0ODAsImV4cCI6MjAyOTk1NzQ4MH0.5GdEeb6Gi62AqUWO_ii9mlKSi2VW_wzIaE8T0dsAkBQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
