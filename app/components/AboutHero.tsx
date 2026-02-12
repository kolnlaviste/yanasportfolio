'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl mb-6">About Me</h1>
          <p className="body-text text-xl text-espresso-700">
            Hi, I&apos;m Aeannah Llaguno (but you can call me Yana). I’m a creative professional dedicated to turning brand visions into vibrant realities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}