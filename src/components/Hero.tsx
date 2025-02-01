import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from './ui/GradientText';
import FloatingNav from './navigation/FloatingNav';
import DownloadButton from './buttons/DownloadButton';
import ScrollingText from './ui/ScrollingText';
import { staggerContainer, fadeInUp, socialIconAnimation } from '../animations/variants';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#0A051F]">
      <div className="absolute inset-0 bg-gradient-radial from-background-light via-background to-background" />
      <ScrollingText />
      <FloatingNav />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center min-h-screen pt-16 pb-32 md:pb-16"
        >
          {/* Main Content Container */}
          <motion.div 
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {/* Name and Title */}
            <motion.div className="mb-8 sm:mb-12">
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-6"
              >
                Hi, I'm <GradientText>Srilokesh Kolli</GradientText>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
              >
                A highly skilled and detail-oriented Data Analyst with a strong passion for transforming complex datasets into actionable insights. 
                Proficient in data visualization, statistical analysis, and machine learning, I leverage data-driven strategies to drive business decisions and enhance performance. 
                Dedicated to uncovering meaningful patterns that empower organizations to make informed and impactful decisions.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center space-y-6 sm:space-y-8"
            >
              {/* Download Resume Button */}
              <div className="w-full max-w-xs sm:max-w-md">
                <DownloadButton 
                  resumeUrl="/resume.pdf" 
                  filename="srilokesh-kolli-resume.pdf" 
                />
              </div>
              
              {/* Social Links */}
              <motion.div 
                variants={staggerContainer}
                className="flex space-x-4 sm:space-x-6"
              >
                {[
                  { icon: Github, href: "https://github.com/Srilokeshkolli", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/srilokesh-kolli-793690255/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:903532lokesh.k@gmail.com", label: "Email" }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    aria-label={item.label}
                    variants={socialIconAnimation}
                    whileHover="hover"
                    className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors
                      transform hover:scale-110 hover:shadow-lg"
                  >
                    <item.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
