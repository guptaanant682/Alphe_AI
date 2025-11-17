'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, DollarSign, Cloud, Shield, Zap, Rocket, Brain, X } from 'lucide-react';
import styles from './SolutionsSection.module.css';

interface Solution {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

export default function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const solutions: Solution[] = [
    {
      id: 'cognitive',
      icon: Target,
      title: 'Cognitive Orchestration',
      description: 'Advanced multi-agent system that analyzes, optimizes, and routes every AI request through specialized cognitive pathways.',
      stats: [
        { label: 'Agent Accuracy', value: '99.2%' },
        { label: 'Processing Speed', value: '0.8s' },
      ],
    },
    {
      id: 'cost',
      icon: DollarSign,
      title: 'Cost Intelligence',
      description: 'Real-time cost analysis and optimization. Our AI predicts and reduces costs before requests are made.',
      stats: [
        { label: 'Avg. Savings', value: '$12K/mo' },
        { label: 'ROI', value: '400%+' },
      ],
    },
    {
      id: 'infrastructure',
      icon: Cloud,
      title: 'Unified Infrastructure',
      description: 'One platform, 300+ models. Seamlessly switch between providers without changing a single line of code.',
      stats: [
        { label: 'Uptime', value: '99.99%' },
        { label: 'Models', value: '300+' },
      ],
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in compliance, audit trails, and enterprise-grade security. SOC 2 Type II certified.',
      stats: [
        { label: 'Compliance', value: 'SOC 2' },
        { label: 'Encryption', value: 'AES-256' },
      ],
    },
    {
      id: 'deployment',
      icon: Zap,
      title: 'Instant Deployment',
      description: 'From zero to production in under 5 minutes. No DevOps required, no complex configurations.',
      stats: [
        { label: 'Setup Time', value: '<5min' },
        { label: 'Config Needed', value: '0' },
      ],
    },
    // {
    //   id: 'evolution',
    //   icon: Rocket,
    //   title: 'Auto Evolution',
    //   description: 'Your infrastructure gets smarter over time with continuous ML-driven optimizations.',
    //   stats: [
    //     { label: 'Learning Rate', value: 'Real-time' },
    //     { label: 'Improvement', value: '+5%/mo' },
    //   ],
    // },
  ];

  const coreData = {
    id: 'core',
    icon: Brain,
    title: 'Alphe.AI Core',
    description: "The world's first AI infrastructure that actually thinks. Our cognitive layer processes every request through six specialized agents, intelligently routing tasks to the optimal model while continuously learning from patterns. Each agent masters a specific domain—cost optimization, quality assurance, performance monitoring, security validation, workflow orchestration, and predictive analytics—working in concert to deliver unmatched efficiency and reliability.",
    stats: [
      { label: 'Token Savings', value: '80%' },
      { label: 'Cost Reduction', value: '70%' },
      { label: 'AI Models', value: '300+' },
      { label: 'Response Time', value: '<2s' },
    ],
  };

  const getSelectedData = () => {
    if (selectedSolution === 'core') return coreData;
    return solutions.find(s => s.id === selectedSolution);
  };

  const selectedData = getSelectedData();

  return (
    <section className={styles.solutionsSection}>
      {/* Background Grid Pattern */}
      <div className={styles.backgroundPattern}>
        <div className={styles.patternGrid} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            How Alphe.AI Solves These Problems
          </h2>
          <p className={styles.subtitle}>
            Click on any feature to explore how our AI infrastructure revolutionizes your workflow
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className={styles.gridWrapper}>
          <div className={styles.bentoGrid}>
            {/* Core Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.coreCard}
            >
              <motion.div
                onClick={() => setSelectedSolution('core')}
                onHoverStart={() => setHoveredCard('core')}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`${styles.card} ${
                  selectedSolution === 'core' ? styles.cardSelected : styles.cardDefault
                }`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`${styles.iconBox} ${
                    selectedSolution === 'core' ? styles.iconBoxSelected : ''
                  }`}
                >
                  <Brain style={{ width: '32px', height: '32px', color: 'white' }} />
                </motion.div>

                {/* Content */}
                <h3 className={`${styles.cardTitle} ${
                  selectedSolution === 'core' ? styles.cardTitleSelected : ''
                }`}>
                  {coreData.title}
                </h3>
                <p className={`${styles.cardDescription} ${
                  selectedSolution === 'core' ? styles.cardDescriptionSelected : ''
                }`}>
                  {coreData.description}
                </p>

                {/* Stats Grid */}
                <div className={styles.statsGrid}>
                  {coreData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`${styles.statBox} ${
                        selectedSolution === 'core' ? styles.statBoxSelected : ''
                      }`}
                    >
                      <div className={`${styles.statValue} ${
                        selectedSolution === 'core' ? styles.statValueSelected : ''
                      }`}>
                        {stat.value}
                      </div>
                      <div className={`${styles.statLabel} ${
                        selectedSolution === 'core' ? styles.statLabelSelected : ''
                      }`}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Feature Cards */}
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isSelected = selectedSolution === solution.id;

              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className={styles.featureCard}
                >
                  <motion.div
                    onClick={() => setSelectedSolution(solution.id)}
                    onHoverStart={() => setHoveredCard(solution.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`${styles.card} ${
                      isSelected ? styles.cardSelected : styles.cardDefault
                    }`}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`${styles.iconBox} ${styles.featureIconBox} ${
                        isSelected ? styles.iconBoxSelected : ''
                      }`}
                    >
                      <Icon style={{ width: '28px', height: '28px', color: 'white' }} />
                    </motion.div>

                    {/* Content */}
                    <h3 className={`${styles.featureTitle} ${styles.cardTitle} ${
                      isSelected ? styles.cardTitleSelected : ''
                    }`}>
                      {solution.title}
                    </h3>
                    <p className={`${styles.featureDescription} ${styles.cardDescription} ${
                      isSelected ? styles.cardDescriptionSelected : ''
                    }`}>
                      {solution.description}
                    </p>

                    {/* Stats Pills */}
                    <div className={styles.statsPills}>
                      {solution.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className={`${styles.statPill} ${
                            isSelected ? styles.statPillSelected : ''
                          }`}
                        >
                          {stat.value} {stat.label}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Expanded Detail Modal */}
      <AnimatePresence>
        {selectedSolution && selectedData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSolution(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(8px)',
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '896px',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                overflow: 'hidden',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSolution(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  zIndex: 10,
                  padding: '8px',
                  borderRadius: '9999px',
                  backgroundColor: '#f3f4f6',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
              >
                <X style={{ width: '24px', height: '24px', color: '#374151' }} />
              </button>

              {/* Content */}
              <div style={{ padding: '48px' }}>
                {/* Icon & Title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '32px' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '16px',
                      backgroundColor: '#1f2937',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {(() => {
                        const Icon = selectedData.icon;
                        return <Icon style={{ width: '40px', height: '40px', color: 'white' }} />;
                      })()}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#111827',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                    }}>
                      {selectedData.title}
                    </h3>
                    <p style={{
                      fontSize: '20px',
                      color: '#4b5563',
                      lineHeight: 1.6,
                    }}>
                      {selectedData.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, #d1d5db, transparent)',
                  margin: '32px 0',
                }} />

                {/* Stats Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '24px',
                }}>
                  {selectedData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      style={{
                        textAlign: 'center',
                        padding: '24px',
                        borderRadius: '16px',
                        backgroundColor: 'white',
                        border: '2px solid #e5e7eb',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <div style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        color: '#22c55e',
                        marginBottom: '8px',
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#4b5563',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    marginTop: '32px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <button style={{
                    padding: '16px 48px',
                    backgroundColor: '#1f2937',
                    color: 'white',
                    fontWeight: 600,
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}>
                    Get Started with {selectedData.title}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
