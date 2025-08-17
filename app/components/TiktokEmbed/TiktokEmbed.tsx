"use client"

import React from 'react'
import styles from './TiktokEmbed.module.css'
import { TikTokEmbed } from 'react-social-media-embed'

function TiktokEmbed({videoId}: {videoId: string}) {
    
  return (
    <div className={styles.TikTokVideo}>
       <TikTokEmbed url={`https://www.tiktok.com/@gremioastral/video/${videoId}`} width={340} height={720}/>
    </div>
  )
}

export default TiktokEmbed