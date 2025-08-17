import { createClient } from "@/utils/supabase/server";
import React from "react";
import styles from "./dashboard.module.css";

import TiktokList from "@/app/components/TikTokList/TikTokList";
import { redirect } from "next/navigation";
import TiktokForm from "@/app/components/TikTokForm/TikTokForm";

import {overpass } from "@/lib/utils";
import Link from "next/link";

async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/login");
  }

  const { data: tiktoks, error } = await supabase
    .from("tiktok_embeds")
    .select("*")
    .order("position", { ascending: true });

  if (error) {
    console.error("Error fetching TikToks:", error);
    return <div>Error loading content</div>;
  }
  return (
    <section className={`${styles.Container} ${overpass.className}`}>
      <div className={styles.Header}>

      <h1>Bienvenido {user?.email}</h1>
      <Link href="/" className={styles.HomeLink}>Volver al inicio</Link>
      </div>
      <div className={styles.Content}>
      <div className={styles.tiktokContainer}>
        <TiktokList tiktoks={tiktoks} />
      </div>
      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Editar TikToks</h2>
        <TiktokForm initialTiktoks={tiktoks || []} />
      </div>
      </div>
    </section>
  );
}

export default DashboardPage;
