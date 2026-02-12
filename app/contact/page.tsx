'use client';

import { motion } from 'framer-motion';
import Section from '../components/Section';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Section className="min-h-[50vh] flex items-center justify-center">
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
      </Section>

      <Section showPet petType="guinea-pig" petPosition="center" />

      <Section className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-espresso-800 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-champagne-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-espresso-800 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-champagne-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-espresso-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-champagne-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="heading-md mb-6">Get in Touch</h2>
              <p className="body-text mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out through the form or connect 
                with me on social media.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:hello@yana.com"
                className="flex items-center gap-4 p-4 card hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-sage-500 text-white flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-espresso-900">Email</p>
                  <p className="text-sm text-espresso-600">hello@yana.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/yana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-peach-500 text-white flex items-center justify-center">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="font-medium text-espresso-900">Instagram</p>
                  <p className="text-sm text-espresso-600">@yana</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/yana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-lavender-500 text-white flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="font-medium text-espresso-900">LinkedIn</p>
                  <p className="text-sm text-espresso-600">Yana</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section showPet petType="cat" petPosition="center" className="mt-16" />
    </>
  );
}