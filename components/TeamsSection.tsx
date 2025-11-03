'use client';

import { Linkedin, Twitter, Mail, Github } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Components.module.css';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function TeamsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const teamMembers = [
    {
      name: 'Ankit Kumar Verma',
      position: 'Founder',
      image: '/Ankit.jpeg',
      bulletPoints: [
        'Final Year B.Tech CSE student',
        'Won and Finalist at 10+ Hackathons',
        'Previous Google Developers Groups on Campus Outreach Lead',
        'Build and Deployed 100+ AI Agents, MCPs and tools',
      ],
      socials: {
        linkedin: 'https://linkedin.com/in/verma-kumar-ankit',
        twitter: 'https://x.com/bruzethegreat',
        email: 'mailto:verma.ankit.210304@gmail.com',
        github: 'https://github.com/bruzethegreat',
      },
    },
    {
      name: 'Anant Gupta',
      position: 'Co-Founder',
      image: '/Anant.jpeg',
      bulletPoints: [
        'Final Year B.Tech CSE student',
        'Architected scalable microservices for full-stack applications.',
        'Delivered 30+ full-stack applications from concept to deployment.',
        'Google Developers Groups on Campus Cloud Lead 2024',
      ],
      socials: {
        linkedin: 'https://linkedin.com/in/anant-garrg',
        twitter: 'https://x.com/Anantgarrg',
        email: 'mailto:garrg.anant@gmail.com',
        github: 'https://github.com/guptaanant682',
      },
    },
  ];

  useEffect(() => {
    const cardElements = cardsRef.current;

    // Animate each card with smooth scroll-up effect
    cardElements.forEach((card, index) => {
      if (!card) return;

      // Initial state - cards start slightly below and transparent
      gsap.set(card, {
        y: 60,
        opacity: 0,
      });

      // Smooth scroll-up animation when card enters viewport
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.teamsSection}>
      <div className={styles.teamsContainer}>
        <div className={styles.teamsHeader}>
          <h2 className={styles.teamsTitle}>Meet Our Team</h2>
          <p className={styles.teamsSubtitle}>
            The brilliant minds behind Alphe AI
          </p>
        </div>

        <div className={styles.teamsGrid}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={styles.teamCard}
            >
              <div className={styles.teamImageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className={styles.teamImage}
                />
              </div>

              <h3 className={styles.teamMemberName}>{member.name}</h3>
              <p className={styles.teamMemberPosition}>{member.position}</p>

              <ul className={styles.teamBulletPoints}>
                {member.bulletPoints.map((point, idx) => (
                  <li key={idx} className={styles.teamBulletPoint}>
                    {point}
                  </li>
                ))}
              </ul>

              <div className={styles.teamSocials}>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={member.socials.email}
                  className={styles.socialIcon}
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
