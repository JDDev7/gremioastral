import React from 'react'
import styles from '@/app/components/footer/footer.module.css'
function Footer() {
    const year = new Date().getFullYear()

  return (
    <footer className={styles.footerContainer}>
        <span>Copyright © {year} Gremio Astral</span>
    </footer>
  )
}

export default Footer