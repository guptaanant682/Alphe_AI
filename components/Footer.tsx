'use client';

import styles from './Components.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          © 2025 Alphe AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
