import React from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useActiveSection } from '../../hooks/useActiveSection';
import NavLink from './NavLink';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const MainNav = () => {
  const scrollPosition = useScrollPosition();
  const activeSection = useActiveSection();
  const isScrolled = scrollPosition > 50;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-lg' : 'bg-gray-900'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-center">
          <ul className="flex items-center space-x-1">
            {navItems.map(({ label, href }) => (
              <NavLink
                key={label}
                href={href}
                label={label}
                isActive={activeSection === href.slice(1)}
              />
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default MainNav;