'use server'

import { createClient } from '@/utils/supabase/server';


export async function updateTiktok(position: number, videoId: string) {
  const supabase = createClient();
  
  const { error } = await (await supabase)
    .from('tiktok_embeds')
    .update({ video_id: videoId })
    .eq('position', position);

  if (error) {
    console.error(`Error updating position ${position}:`, error);
    throw new Error(`Failed to update TikTok at position ${position}: ${error}`);
  }
  
  return { success: true };
}