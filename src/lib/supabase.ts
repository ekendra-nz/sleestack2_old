import { createClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SPUBLIC_SUPABASE_ANON_KEYUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const currentUser = writable((await supabase.auth.getUser()).data.user);

supabase.auth.onAuthStateChange(async () => {
	currentUser.set((await supabase.auth.getUser()).data.user);
});
