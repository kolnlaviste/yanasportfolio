'use client';

import { Instagram, Linkedin, Mail, Facebook } from 'lucide-react';
import PetDecoration from './PetDecoration';

export default function Footer() {
  return (
    <footer className="bg-champagne-100 border-t border-champagne-300 mt-24">
      <div className="container mx-auto px-6 py-12">
        <PetDecoration type="guinea-pig" position="center" className="mb-8" />

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://instagram.com/yana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full bg-sage-500 text-white flex items-center justify-center hover:bg-sage-600 transition-colors duration-200"
          >
            <Instagram size={20} />
          </a>
          
          <a
            href="https://linkedin.com/in/yana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full bg-sage-500 text-white flex items-center justify-center hover:bg-sage-600 transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          
          <a
            href="https://facebook.com/yana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-12 h-12 rounded-full bg-sage-500 text-white flex items-center justify-center hover:bg-sage-600 transition-colors duration-200"
          >
            <Facebook size={20} />
          </a>
          
          <a
            href="mailto:hello@yana.com"
            aria-label="Email"
            className="w-12 h-12 rounded-full bg-sage-500 text-white flex items-center justify-center hover:bg-sage-600 transition-colors duration-200"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-center text-sm text-espresso-600">
          © 2024 Yana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}