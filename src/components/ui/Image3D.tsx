import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface Image3DProps {
  src: string;
  alt: string;
  className?: string;
}

const Image3D = ({ src, alt, className = '' }: Image3DProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const springConfig = { damping: 25, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
      className="relative cursor-pointer h-full flex items-end"
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative"
      >
        <motion.img
          src={src}
          alt={alt}
          className={`w-full max-w-md mx-auto ${className}`}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(75px)"
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Image3D;