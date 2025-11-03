  'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1400px]"
    >
      <div
        className="backdrop-blur-md rounded-full border border-white/50 shadow-lg"
        style={{
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          height: '70px',
          minHeight: '70px'
        }}
      >
        {/* Logo */}
        <div
          style={{
            position: 'absolute',
            left: '32px',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          <Image
            src="/logo.png"
            alt="Alphe.AI Logo"
            width={80}
            height={24}
            className="object-contain w-[50px] md:w-[60px] h-auto"
            priority
          />
        </div>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-transparent border-2 border-black rounded-full text-black font-semibold text-sm md:text-base whitespace-nowrap hover:bg-black hover:text-white transition-all duration-300"
          style={{
            position: 'absolute',
            right: '32px',
            top: 'calc(50% - 20px)',
            transform: 'translateY(-50%)',
            padding: '8px 24px'
          }}
        >
          Talk to Us
        </motion.button>
      </div>
    </motion.nav>
  );
}
