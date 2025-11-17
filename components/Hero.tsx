'use client';

import { motion } from 'framer-motion';
import styles from './Components.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection} style={{ marginTop: '15vh' }}>
      <div className={styles.heroContainer}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.heroLogo}
        >
          <h1 style={{ fontSize: '96px', fontWeight: '700', color: '#111827', margin: 0 }}>Alphe AI</h1>
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.heroTitle}
        >
          The Infrastructure Revolution
          <br />
          <span className={styles.heroTitleSpan}>AI Has Been Waiting For</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.heroDescription}
        >
          Empowering companies with intelligent AI infrastructure that cuts costs by 60-70%
          while eliminating complexity. The inevitable solution every enterprise needs.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={styles.heroButton}
        >
          Try Alphe.AI
        </motion.button>
      </div>
    </section>
  );
}
