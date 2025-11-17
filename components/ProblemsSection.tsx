'use client';

import { motion } from 'framer-motion';
import { DollarSign, Zap, Network, Shield } from 'lucide-react';
import styles from './ProblemsSection.module.css';

export default function ProblemsSection() {
  const problems = [
    {
      icon: DollarSign,
      title: 'Cost Explosion',
      description: '90% WASTE. Developers reporting $8,000/month bills for simple tasks.',
    },
    {
      icon: Zap,
      title: 'Infrastructure Nightmare',
      description: '24/7 CHAOS. DevOps is a fragmented, exhausting mess causing engineer burnout.',
    },
    {
      icon: Network,
      title: 'Model Management',
      description: '100+ MODELS/MONTH. Overwhelming choices, unreliable benchmarks, no intelligent routing.',
    },
  ];

  return (
    <section className={styles.problemsSection}>
      <div className={styles.problemsContainer}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.problemsTitle}
        >
          The Problems Enterprises Are Facing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.problemsSubtitle}
        >
          The AI party is ending before it even began due to critical infrastructure challenges
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.highlightBoxWrapper}
        >
          <div className={styles.highlightBoxContent}>
            <h2 className={styles.highlightBoxTitle}>
              The $1.5 Trillion AI Infrastructure Crisis
            </h2>
            <p className={styles.highlightBoxText}>
              The market is desperately seeking solutions to the &apos;Fragmented AI Stack Chaos&apos;
            </p>
          </div>
        </motion.div>

        <div className={styles.problemsGrid}>
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={styles.problemCard}
              >
                <div className={styles.problemIconBox}>
                  <Icon size={32} color="white" />
                </div>
                <h3 className={styles.problemCardTitle}>
                  {problem.title}
                </h3>
                <p className={styles.problemCardText}>
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={styles.securityCard}
        >
          <div className={styles.securityCardInner}>
            <div className={styles.problemIconBox}>
              <Shield size={32} color="white" />
            </div>
            <div>
              <h3 className={styles.problemCardTitle}>
                Security & Compliance
              </h3>
              <p className={styles.problemCardText}>
                Enterprise barriers. Lack of audit trails prevents enterprise AI adoption.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={styles.resultBox}
        >
          <p className={styles.resultBoxText}>
            <span style={{ fontWeight: '700' }}>RESULT:</span> Alphe.AI delivers the demanded 60-70% cost reduction solutions.
            Every company needs this inevitable infrastructure—with guaranteed savings.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
