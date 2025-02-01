import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import GradientText from './ui/GradientText';
import { staggerContainer, projectCardAnimation } from '../animations/variants';

interface Project {
  title: string;
  type: string;
  period: string;
  description: string;
  image: string;
  technologies?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      title: "AI-Powered Analytics Dashboard",
      type: "Data Analytics",
      period: "2023 - Present",
      description: "Developed a real-time analytics dashboard using machine learning algorithms to predict business trends and provide actionable insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      technologies: ["Python", "TensorFlow", "React", "D3.js"]
    },
    {
      title: "Smart City Data Platform",
      type: "Big Data",
      period: "2022 - 2023",
      description: "Built a comprehensive data platform for smart city management, processing IoT sensor data and providing visualization tools.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
      technologies: ["Apache Spark", "Kafka", "Python", "MongoDB"]
    },
    {
      title: "Predictive Maintenance System",
      type: "Machine Learning",
      period: "2022",
      description: "Implemented a predictive maintenance system for industrial equipment using IoT sensors and machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      technologies: ["Python", "scikit-learn", "IoT", "AWS"]
    },
    {
      title: "Financial Data Analysis Tool",
      type: "FinTech",
      period: "2021 - 2022",
      description: "Created a financial analysis tool that processes market data and generates investment recommendations using advanced algorithms.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
      technologies: ["R", "Python", "SQL", "Tableau"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0A051F]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical projects and achievements
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              variants={projectCardAnimation}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
              className="group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden cursor-pointer
                border border-white/10 transform-gpu perspective-1000"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 mb-2">{project.type}</p>
                <p className="text-gray-400 mb-4">{project.period}</p>
                <motion.div 
                  className="flex items-center text-blue-400"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ExternalLink size={18} className="mr-2" />
                  <span>View Details</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="bg-gray-900 rounded-xl overflow-hidden max-w-2xl w-full relative
                  border border-white/10"
              >
                <motion.img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-8">
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full text-white"
                  >
                    <X size={24} />
                  </motion.button>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-blue-400 mb-2">{selectedProject.type}</p>
                  <p className="text-gray-400 mb-4">{selectedProject.period}</p>
                  <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                  {selectedProject.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;