"use client";

import React from "react";
import styles from "@/app/components/TikTokList/tiktoklist.module.css";
import dynamic from "next/dynamic";

// Importación dinámica con SSR deshabilitado
const TiktokEmbed = dynamic(
  () => import("@/app/components/TiktokEmbed/TiktokEmbed"),
  {
    ssr: false,
    loading: () => (
      <div className={styles.placeholder}>Cargando TikTok...</div>
    )
  }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TiktokList({ tiktoks }: { tiktoks: any[] }) {
  return (
    <div className={styles.tiktokContainer}>
      {tiktoks?.map((tiktok) => (
        <TiktokEmbed 
          key={tiktok.position} 
          videoId={tiktok.video_id} 
        />
      ))}
    </div>
  );
}

export default TiktokList;