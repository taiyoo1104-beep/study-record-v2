// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Supabaseの管理画面からコピーしたURLとAnon Keyを入れます
const supabaseUrl = 'https://fbphjsrzaepqghaxkddf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZicGhqc3J6YWVwcWdoYXhrZGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyMDQwODQsImV4cCI6MjA4Njc4MDA4NH0.nX5M3xcjJjJivlS9NTmKwBr5KGZlmtlQuE8ycpRRLG4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)