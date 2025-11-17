"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Revolutionary", "Intelligent", "Cost-Effective", "Powerful", "Inevitable"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full" style={{ paddingTop: '10vh' }}>
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 style={{ fontSize: '96px', fontWeight: '700', color: '#111827', margin: 0 }}>Alphe AI</h1>
          </motion.div>

          <div className="flex gap-4 flex-col">
            <h2 className="text-4xl md:text-6xl max-w-4xl tracking-tighter text-center font-regular">
              <span className="text-gray-800">The AI Infrastructure That&apos;s</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-green-600"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h2>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-600 max-w-3xl text-center">
              Empowering companies with intelligent AI infrastructure that cuts costs by 60-70%
              while eliminating complexity. The inevitable solution every enterprise needs.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button
              size="lg"
              className="gap-4 bg-gray-800 text-white hover:bg-gray-900 px-8 py-6 rounded-xl"
              style={{ padding: '24px 40px', borderRadius: '16px', fontSize: '20px', fontWeight: '600' }}
            >
              Try Alphe.AI <MoveRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
