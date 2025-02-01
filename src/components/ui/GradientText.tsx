import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return (
    <span className={`bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;