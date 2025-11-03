'use client';

import { Layers, Gauge, Brain, Lock, Zap, Shield } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Components.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeBuildSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    {
      icon: Layers,
      title: 'Unified AI Infrastructure',
      description: 'One platform to rule them all. Seamless integration across all your AI needs, eliminating the fragmented stack chaos.',
    },
    {
      icon: Gauge,
      title: 'Intelligent Cost Optimization',
      description: '60-70% guaranteed savings. Our AI automatically routes to the most cost-effective models without compromising quality.',
    },
    {
      icon: Brain,
      title: 'Smart Model Routing',
      description: 'Navigate 100+ models effortlessly. Our intelligent system selects the perfect model for each task automatically.',
    },
    {
      icon: Lock,
      title: 'Enterprise-Grade Security',
      description: 'Complete audit trails, compliance ready. Built from the ground up for enterprise adoption and peace of mind.',
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description: 'Sub-second response times at scale. Our optimized infrastructure ensures blazing-fast AI inference for real-time applications.',
    },
    {
      icon: Shield,
      title: 'Data Privacy & Compliance',
      description: 'Your data never leaves your control. GDPR, SOC2, and HIPAA compliant infrastructure with end-to-end encryption.',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const leftSide = leftRef.current;
    const rightSide = rightRef.current;
    const cardElements = cardsRef.current;

    if (!section || !leftSide || !rightSide) return;

    // Pin the left section while right side scrolls
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      pin: leftSide,
      pinSpacing: false,
    });

    // Animate each card with smooth scroll-up effect
    cardElements.forEach((card, index) => {
      if (!card) return;

      // Initial state - cards start slightly below (removed opacity)
      gsap.set(card, {
        y: 60,
        opacity: 1,
      });

      // Smooth scroll-up animation when card enters viewport (without opacity change)
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.1, // Stagger effect for sequential appearance
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      // Add subtle hover-like scale effect when in viewport
      ScrollTrigger.create({
        trigger: card,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power1.inOut',
          });
        },
        onLeave: () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power1.inOut',
          });
        },
        onEnterBack: () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power1.inOut',
          });
        },
        onLeaveBack: () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power1.inOut',
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.buildSection}>
      <div className={styles.buildContainer}>
        <div className={styles.buildGrid}>
          <div ref={leftRef} className={styles.buildLeft}>
            <div>
              <h2 className={styles.buildTitle}>
                What We Are Building
              </h2>
              <p className={styles.buildSubtitle}>
                It&apos;s Beyond Tools/Wrappers—we&apos;re Building AI Infrastructure.
              </p>
              <p className={styles.buildText}>
                It&apos;s the inevitable infrastructure that every company needs.
              </p>
              <div className={styles.buildHighlight}>
                <p className={styles.buildHighlightText}>
                  🎯 Guaranteed 60–70% Cost Savings Across All Operations.
                </p>
              </div>
            </div>
          </div>

          <div ref={rightRef} className={styles.buildRight}>
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className={styles.buildCard}
                >
                  <div className={styles.buildCardIconBox}>
                    <Icon size={32} color="white" />
                  </div>
                  <h3 className={styles.buildCardTitle}>
                    {card.title}
                  </h3>
                  <p className={styles.buildCardText}>
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
