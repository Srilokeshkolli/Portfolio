import React from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import GradientText from './ui/GradientText';

const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const controls = useAnimation();
  const gradientX = useTransform(mouseX, [-100, 100], [-50, 50]);
  const gradientY = useTransform(mouseY, [-100, 100], [-50, 50]);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    controls.start({
      scale: 1.05,
      transition: { duration: 0.2 }
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      scale: 1,
      transition: { duration: 0.2 }
    });
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="py-20 bg-[#0A051F]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              About <GradientText>Me</GradientText>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-center"
          >
            <p className="text-gray-300 text-lg">
            With highly motivated and strong leadership abilities, I hold a Bachelor of Technology in Computer Science from GITAM School of Technology, Bangalore and Enthusiastic about embarking as a data Analyst. 
            In order to broaden my skill set and eventually assist the organization in accomplish its mission, 
            I want to become part of an innovative organization.
            </p>
            <p className="text-gray-300 text-lg">
            I have proficiency with programming languages such as Python, SQL, Machine Learning  and I have good working knowledge in Microsoft Word, Excel, PowerPoint and Visualization tools like power bi, Tableau.
            </p>
            <p className="text-gray-300 text-lg">
            I have worked on the anomaly-based intrusion detection system using machine learning (Group project), 
            project on the Revenue Insights in Hospitality Domain using power bi (Data analytics - Own project) and project on the Amazon sales analysis using power bi (Data analytics - Own project).
            </p>
            <motion.a
              href="#contact"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              animate={controls}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block mt-8 px-8 py-3 text-white rounded-lg font-medium 
                overflow-hidden transform-gpu shadow-lg"
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
                  y: gradientY
                }}
              />

              {/* Button content */}
              <motion.div 
                className="relative flex items-center justify-center"
                whileHover={{
                  scale: [1, 1.05, 1],
                  transition: { duration: 0.3, repeat: Infinity }
                }}
              >
                <motion.span
                  initial={{ y: 0 }}
                  whileHover={{
                    y: [0, -2, 2, -2, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  Get in Touch
                </motion.span>
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;