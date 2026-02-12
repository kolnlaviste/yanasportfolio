'use client';

import { motion } from 'framer-motion';

const workItems = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    description: 'Complete brand identity for lifestyle brand'
  },
  {
    id: 2,
    title: 'Social Media Campaign',
    category: 'Social Media',
    description: 'Instagram campaign with 200% engagement increase'
  },
  {
    id: 3,
    title: 'Editorial Layout',
    category: 'Graphic Design',
    description: 'Magazine spread design for fashion editorial'
  },
  {
    id: 4,
    title: 'Content Strategy',
    category: 'Social Media',
    description: 'Monthly content planning and execution'
  },
  {
    id: 5,
    title: 'Logo Design',
    category: 'Graphic Design',
    description: 'Minimalist logo suite for wellness brand'
  },
  {
    id: 6,
    title: 'Instagram Reels',
    category: 'Social Media',
    description: 'Viral reel series with 1M+ views'
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="container mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="heading-lg mb-4">Selected Work</h2>
        <p className="body-text max-w-2xl mx-auto">
          A collection of recent projects spanning brand identity, social media campaigns, and editorial design
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {workItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card overflow-hidden group cursor-pointer"
          >
            <div className="relative h-64 bg-gradient-to-br from-sage-200 to-lavender-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-espresso-400 text-sm">
                Project Image
              </div>
              <div className="absolute inset-0 bg-espresso-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-sage-600 mb-2">
                {item.category}
              </p>
              <h3 className="text-xl font-serif mb-2 text-espresso-950">
                {item.title}
              </h3>
              <p className="text-sm text-espresso-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}