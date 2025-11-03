'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Target, DollarSign, Cloud, Shield, Zap, Rocket } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Components.module.css';

gsap.registerPlugin(ScrollTrigger);

interface SolutionNode {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  stats?: {
    label: string;
    value: string;
  }[];
  position: {
    x: number;
    y: number;
  };
}

export default function SolutionsSection() {
  const [selectedNode, setSelectedNode] = useState<string | null>('core');
  const sectionRef = useRef<HTMLElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Hexagonal constellation layout - Core in center, 6 nodes around it
  const solutions: SolutionNode[] = [
    {
      id: 'core',
      icon: Brain,
      title: 'Alphe.AI Core',
      subtitle: 'Cognitive Infrastructure',
      description: "The world's first AI infrastructure that actually thinks. Our cognitive layer processes every request through six specialized agents before executing.",
      stats: [
        { label: 'Token Savings', value: '80%' },
        { label: 'Cost Reduction', value: '70%' },
        { label: 'AI Models', value: '300+' },
        { label: 'Response Time', value: '<2s' },
      ],
      position: { x: 50, y: 50 },
    },
    {
      id: 'cognitive',
      icon: Target,
      title: 'Cognitive Orchestration',
      subtitle: 'Intelligent Request Processing',
      description: 'Advanced multi-agent system that analyzes, optimizes, and routes every AI request through specialized cognitive pathways for maximum efficiency.',
      stats: [
        { label: 'Agent Accuracy', value: '99.2%' },
        { label: 'Processing Speed', value: '0.8s' },
        { label: 'Smart Routing', value: '100%' },
      ],
      position: { x: 50, y: 20 },
    },
    {
      id: 'cost',
      icon: DollarSign,
      title: 'Cost Intelligence',
      subtitle: 'Predictive Cost Optimization',
      description: 'Real-time cost analysis and optimization. Our AI predicts and reduces costs before requests are even made, ensuring you never overpay.',
      stats: [
        { label: 'Avg. Savings', value: '$12K/mo' },
        { label: 'ROI', value: '400%+' },
        { label: 'Waste Prevention', value: '90%' },
      ],
      position: { x: 76, y: 35 },
    },
    {
      id: 'infrastructure',
      icon: Cloud,
      title: 'AI Infrastructure',
      subtitle: 'Unified Platform Layer',
      description: 'One platform, 300+ models. Seamlessly switch between providers without changing a single line of code. True infrastructure freedom.',
      stats: [
        { label: 'Uptime', value: '99.99%' },
        { label: 'Providers', value: '15+' },
        { label: 'Models', value: '300+' },
      ],
      position: { x: 76, y: 65 },
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Enterprise Security',
      subtitle: 'Zero-Trust Architecture',
      description: 'Built-in compliance, audit trails, and enterprise-grade security. SOC 2 Type II certified with complete data sovereignty.',
      stats: [
        { label: 'Compliance', value: 'SOC 2' },
        { label: 'Encryption', value: 'AES-256' },
        { label: 'Audit Logs', value: '100%' },
      ],
      position: { x: 50, y: 80 },
    },
    {
      id: 'deployment',
      icon: Zap,
      title: 'Instant Deployment',
      subtitle: 'Zero Configuration Setup',
      description: 'From zero to production in under 5 minutes. No DevOps required, no complex configurations, just instant AI infrastructure.',
      stats: [
        { label: 'Setup Time', value: '<5min' },
        { label: 'Config Needed', value: '0' },
        { label: 'Deployment', value: 'Instant' },
      ],
      position: { x: 24, y: 65 },
    },
    {
      id: 'evolution',
      icon: Rocket,
      title: 'Auto Evolution',
      subtitle: 'Self-Improving Systems',
      description: 'Your infrastructure gets smarter over time. Machine learning algorithms continuously optimize performance based on your usage patterns.',
      stats: [
        { label: 'Learning Rate', value: 'Real-time' },
        { label: 'Optimizations', value: 'Daily' },
        { label: 'Improvement', value: '+5%/mo' },
      ],
      position: { x: 24, y: 35 },
    },
  ];

  useEffect(() => {
    const nodes = nodesRef.current;

    nodes.forEach((node, index) => {
      if (!node) return;

      gsap.set(node, {
        scale: 0,
        opacity: 0,
      });

      gsap.to(node, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getNodeStyle = (position: { x: number; y: number }, isCore: boolean) => {
    return {
      position: 'absolute' as const,
      left: `${position.x}%`,
      top: `${position.y}%`,
      transform: 'translate(-50%, -50%)',
      zIndex: isCore ? 10 : 5,
    };
  };

  const selectedSolution = solutions.find((s) => s.id === selectedNode);

  return (
    <section ref={sectionRef} className={styles.solutionsSection}>
      <div className={styles.solutionsContainer}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.solutionsTitle}
        >
          How Alphe.AI Solves These Problems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.solutionsSubtitle}
        >
          Interactive solution engine - click on any node to explore our revolutionary approach
        </motion.p>

        {/* Interactive Node Network */}
        <div className={styles.nodesContainer}>
          {/* Connection Lines */}
          <svg className={styles.connectionsSvg} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#1f2937', stopOpacity: 0.2 }} />
                <stop offset="50%" style={{ stopColor: '#1f2937', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#1f2937', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>

            {/* Lines from core to other nodes */}
            {solutions.slice(1).map((solution, index) => (
              <motion.line
                key={solution.id}
                x1="50%"
                y1="50%"
                x2={`${solution.position.x}%`}
                y2={`${solution.position.y}%`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: selectedNode === solution.id || selectedNode === 'core' ? 0.8 : 0.3
                }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              />
            ))}
          </svg>

          {/* Solution Nodes */}
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isCore = solution.id === 'core';
            const isSelected = selectedNode === solution.id;

            return (
              <div
                key={solution.id}
                ref={(el) => {
                  nodesRef.current[index] = el;
                }}
                style={getNodeStyle(solution.position, isCore)}
                className={`${styles.solutionNode} ${isCore ? styles.coreNode : ''} ${
                  isSelected ? styles.selectedNode : ''
                }`}
                onClick={() => setSelectedNode(solution.id)}
              >
                <div className={styles.nodeIcon}>
                  <Icon size={isCore ? 32 : 24} />
                </div>
                <div className={styles.nodeLabel}>{solution.title}</div>

                {/* Pulse animation for selected node */}
                {isSelected && (
                  <motion.div
                    className={styles.nodePulse}
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Solution Details Panel */}
        <AnimatePresence mode="wait">
          {selectedSolution && (
            <motion.div
              key={selectedSolution.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={styles.solutionDetails}
            >
              <div className={styles.detailsHeader}>
                {(() => {
                  const Icon = selectedSolution.icon;
                  return (
                    <motion.div
                      className={styles.detailsIconBox}
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: 'backOut' }}
                    >
                      <Icon size={40} />
                    </motion.div>
                  );
                })()}
                <div>
                  <h3 className={styles.detailsTitle}>{selectedSolution.title}</h3>
                  <p className={styles.detailsSubtitle}>{selectedSolution.subtitle}</p>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={styles.detailsDescription}
              >
                {selectedSolution.description}
              </motion.p>

              {selectedSolution.stats && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={styles.statsGrid}
                >
                  {selectedSolution.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className={styles.statCard}
                    >
                      <div className={styles.statValue}>{stat.value}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
