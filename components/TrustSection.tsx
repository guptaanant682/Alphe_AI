'use client';

import { motion } from 'framer-motion';
import styles from './Components.module.css';

export default function TrustSection() {
  const companies = [
    'TechCorp', 'DataFlow', 'CloudScale', 'AIventures',
    'NeuralNet', 'SynthAI', 'QuantumLeap', 'FutureStack',
    'InnovateLabs', 'SmartOps'
  ];

  // Triple the array for seamless infinite loop
  const infiniteCompanies = [...companies, ...companies, ...companies];

  return (
    <section className={styles.trustSection}>
      <div className={styles.trustContainer}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.trustTitle}
        >
          Trusted by developers and enterprises
        </motion.h2>

        <div style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}>

          <motion.div
            style={{
              display: 'flex',
              gap: '40px',
              padding: '40px 0',
              width: 'fit-content'
            }}
            animate={{
              x: [0, `-${(240 + 40) * companies.length}px`]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {infiniteCompanies.map((company, index) => (
              <div
                key={`${company}-${index}`}
                style={{
                  flexShrink: 0,
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(12px)',
                  padding: '28px 48px',
                  borderRadius: '20px',
                  border: 'none',
                  width: '240px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
                }}
              >
                <span style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#1f2937',
                  whiteSpace: 'nowrap'
                }}>
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
