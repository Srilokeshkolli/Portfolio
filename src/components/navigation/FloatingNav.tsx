import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        className="bg-white/10 backdrop-blur-lg rounded-full border border-white/20 p-2 shadow-lg mx-auto"
      >
        <ul className="flex items-center justify-center space-x-1">
          {navItems.map(({ label, href }) => (
            <motion.li key={label}>
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-block
                  ${activeSection === href.slice(1)
                    ? 'bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default FloatingNav;