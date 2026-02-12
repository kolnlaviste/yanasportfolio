'use client';

import { motion } from 'framer-motion';

export default function AboutContent() {
  return (
    <section className="container mx-auto px-6 max-w-4xl py-16 md:py-24">
      <div className="space-y-8 body-text">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md mb-4">My Background</h2>
          <p className="mb-4">
            With a passion for both design and storytelling, I specialize in creating cohesive brand identities 
            and managing social media presence for businesses that want to stand out. My approach combines 
            strategic thinking with aesthetic sensibility to deliver results that resonate.
          </p>
          <p>
            Over the years, I&apos;ve worked with clients ranging from small startups to established brands, 
            helping them communicate their unique voice through thoughtful design and engaging content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="heading-md mb-4">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-serif mb-3 text-espresso-950">Graphic Design</h3>
              <ul className="space-y-2 text-espresso-700">
                <li>• Brand Identity & Logos</li>
                <li>• Print & Digital Design</li>
                <li>• Editorial Layouts</li>
                <li>• Marketing Materials</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-serif mb-3 text-espresso-950">Social Media VA</h3>
              <ul className="space-y-2 text-espresso-700">
                <li>• Content Strategy</li>
                <li>• Community Management</li>
                <li>• Campaign Planning</li>
                <li>• Analytics & Reporting</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="heading-md mb-4">When I&apos;m Not Working</h2>
          <p>
            You&apos;ll find me spending time with my beloved cats and guinea pigs, seeking inspiration 
            in nature, or exploring new design trends. I believe that creativity thrives when balanced 
            with rest, play, and connection to the things we love.
          </p>
        </motion.div>
      </div>
    </section>
  );
}