"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransitionProvider({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.35,
            ease: "easeOut",
          }
        }}
        exit={{ 
          opacity: 0,
          transition: {
            duration: 0.2,
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
