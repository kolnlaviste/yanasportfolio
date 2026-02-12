'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import PetDecoration from './PetDecoration';

interface SectionProps {
  children?: ReactNode; // Changed from required to optional
  className?: string;
  showPet?: boolean;
  petType?: 'cat' | 'guinea-pig';
  petPosition?: 'left' | 'right' | 'center';
  id?: string;
}

export default function Section({
  children,
  className = '',
  showPet = false,
  petType = 'cat',
  petPosition = 'center',
  id
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-16 md:py-24 ${className}`}
    >
      {showPet && (
        <PetDecoration 
          type={petType} 
          position={petPosition}
          className="mb-8"
        />
      )}
      {children}
    </motion.section>
  );
}