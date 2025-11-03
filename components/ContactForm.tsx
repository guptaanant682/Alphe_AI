'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Components.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mwprvowy', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.contactContent}
        >
          <h2 className={styles.contactTitle}>Join the AI Revolution</h2>
          <p className={styles.contactSubtitle}>
            Be among the first to experience the future of AI infrastructure. Get early access to Alphe.AI and transform your AI operations.
          </p>

          <div className={styles.contactBenefits}>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🚀</span>
              <span className={styles.benefitText}>Early access to all features</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>💰</span>
              <span className={styles.benefitText}>Special launch pricing</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🎯</span>
              <span className={styles.benefitText}>Priority support</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className={styles.formInput}
                disabled={status === 'submitting'}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className={styles.formInput}
                disabled={status === 'submitting'}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Contact Number"
                required
                className={styles.formInput}
                disabled={status === 'submitting'}
              />
            </div>

            <button
              type="submit"
              className={styles.formButton}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Submitting...' : 'Get Early Access'}
            </button>

            {status === 'success' && (
              <p className={styles.successMessage}>
                Thank you! We'll be in touch soon.
              </p>
            )}

            {status === 'error' && (
              <p className={styles.errorMessage}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
