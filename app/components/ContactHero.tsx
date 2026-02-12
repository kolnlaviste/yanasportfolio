'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl mb-6">Let&apos;s Work Together</h1>
          <p className="body-text text-xl text-espresso-700">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}