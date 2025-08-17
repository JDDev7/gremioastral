"use client";

import React, { useState } from 'react';
import { updateTiktok } from '@/actions/tiktok-actions';
import styles from './TikTokForm.module.css';
import {overpass} from "@/lib/utils";
interface TiktokItem {
  position: number;
  video_id: string;
}

export default function TiktokForm({ initialTiktoks }: { initialTiktoks: TiktokItem[] }) {
  const [tiktoks, setTiktoks] = useState(initialTiktoks);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Manejar cambios en los inputs
  const handleChange = (position: number, newId: string) => {
    setTiktoks(prev => 
      prev.map(t => 
        t.position === position ? { ...t, video_id: newId } : t
      )
    );
  };

  // Guardar cambios
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    
    try {
      // Filtrar solo los TikToks que han cambiado
      const changes = tiktoks.filter((tiktok, index) => 
        tiktok.video_id !== initialTiktoks[index].video_id
      );
      
      // Si no hay cambios, no hacemos nada
      if (changes.length === 0) {
        setSuccess(true); 
        return;
      }
      
      // Actualizar en la base de datos solo los cambios
      await Promise.all(
        changes.map(change => 
          updateTiktok(change.position, change.video_id)
        )
      );
      
      setSuccess(true);
      window.location.reload();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Error al actualizar los TikToks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {tiktoks.map((tiktok) => (
        <div key={tiktok.position} className={styles.formGroup}>
          <div className={styles.labelContainer}>
          <label className={styles.label}>
            {tiktok.position} 
            </label>
            </div>
            <input
              type="text"
              value={tiktok.video_id}
              onChange={(e) => handleChange(tiktok.position, e.target.value)}
              className={styles.input}
              placeholder="ID de TikTok (19 dígitos) al final de la url"
              pattern="\d{19}" // Validación básica de 19 dígitos
              required
            />
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className={`${styles.saveButton} ${overpass.className}`}
      >
        {loading ? "Guardando..." : "Actualizar TikToks"}
      </button>

      {success && (
        <div className={styles.successMessage}>
          ¡TikToks actualizados correctamente!
        </div>
      )}
      
      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}
    </form>
  );
}