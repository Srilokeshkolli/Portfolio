import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { Download, Loader2 } from 'lucide-react';

interface DownloadButtonProps {
  resumeUrl: string;
  filename: string;
}

const DownloadButton = ({ resumeUrl, filename }: DownloadButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  
  // Mouse position for gradient movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position to gradient position
  const gradientX = useTransform(mouseX, [-100, 100], [-50, 50]);
  const gradientY = useTransform(mouseY, [-100, 100], [-50, 50]);
  
  // Background gradient animation
  const gradientPosition = useMotionValue(0);
  const gradientBackground = useTransform(
    gradientPosition,
    [0, 1],
    [
      'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)',
      'linear-gradient(135deg, #EC4899 0%, #3B82F6 50%, #8B5CF6 100%)'
    ]
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.start({
      scale: 1.05,
      transition: { duration: 0.2 }
    });
    // Animate gradient
    controls.start({
      background: gradientBackground,
      transition: { duration: 2, repeat: Infinity }
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    controls.start({
      scale: 1,
      transition: { duration: 0.2 }
    });
  };

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={isLoading}
      animate={controls}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center justify-center px-8 py-3 
        text-white font-semibold rounded-lg transition-all duration-300 
        min-w-[200px] overflow-hidden transform-gpu shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)',
        backgroundSize: '200% 200%'
      }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)',
          backgroundSize: '300% 100%',
          opacity: 0.5,
          scale: 1.02,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '150% 0%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
          x: gradientX,
          y: gradientY,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Button content */}
      <motion.div 
        className="relative flex items-center justify-center space-x-2"
        animate={isLoading ? { scale: [1, 0.97, 1] } : {}}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        {isLoading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Loader2 size={20} />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              Downloading...
            </motion.span>
          </>
        ) : (
          <>
            <motion.div
              animate={isHovered ? { 
                rotate: [0, -10, 10, -10, 0],
                y: [0, -2, 2, -2, 0]
              } : {}}
              transition={{ duration: 0.5 }}
            >
              <Download size={20} />
            </motion.div>
            <motion.span
              animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              Download Resume
            </motion.span>
          </>
        )}
      </motion.div>
    </motion.button>
  );
};

export default DownloadButton;