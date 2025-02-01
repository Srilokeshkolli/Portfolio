import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

const NavLink = ({ href, label, isActive }: NavLinkProps) => {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-block
          ${isActive 
            ? 'text-white' 
            : 'text-gray-300 hover:text-white'
          }`}
      >
        {label}
        {isActive && (
          <motion.div
            layoutId="activeSection"
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-full -z-10"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </a>
    </motion.li>
  );
};

export default NavLink;