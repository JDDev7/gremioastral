'use server'

import { createClient } from '@/utils/supabase/server';


export async function getHomeTiktoks() {
  const supabase = createClient();
  
  const { data, error } = await (await supabase)
    .from('tiktok_embeds')
    .select('*')
    .order('position', { ascending: true });

  if (error) {
    console.error('Error fetching TikToks:', error);
    throw new Error(`Failed to fetch TikToks: ${error}`);
  }

  return data;
}