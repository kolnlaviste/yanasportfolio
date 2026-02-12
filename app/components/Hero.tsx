'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl mb-6">
            Social Media VA <br />& Graphic Designer
          </h1>
          <p className="body-text text-xl mb-8 text-espresso-700">
            Transforming brands through thoughtful design and strategic social media management
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a href="#work" className="btn-primary">
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}