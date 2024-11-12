import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wirxkyzqspokyljmprom.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpcnhreXpxc3Bva3lsam1wcm9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzODgyNTEsImV4cCI6MjA0Njk2NDI1MX0.-VTHHggHX6nml8XsYA_hB823_d98h5Jd9zhvY9U6bYc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})