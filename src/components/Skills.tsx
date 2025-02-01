import { motion } from 'framer-motion';
import { 
  Database, 
  LineChart, 
  BarChart3, 
  PieChart, 
  Sigma, 
  BrainCircuit,
  Lightbulb,
  Target,
  Workflow,
  Users,
  Search,
  Brain
} from 'lucide-react';
import GradientText from './ui/GradientText';
import { staggerContainer, skillCardAnimation, iconAnimation } from '../animations/variants';

const Skills = () => {
  const technicalSkills = [
    {
      icon: <Database size={24} className="text-blue-500" />,
      title: 'SQL',
      description: 'MySQL, PostgreSQL, SQL Server',
    },
    {
      icon: <LineChart size={24} className="text-blue-500" />,
      title: 'Power BI',
      description: 'DAX, Power Query, Data Modeling',
    },
    {
      icon: <BarChart3 size={24} className="text-blue-500" />,
      title: 'Tableau',
      description: 'Data Visualization, Dashboard Creation',
    },
    {
      icon: <PieChart size={24} className="text-blue-500" />,
      title: 'Excel',
      description: 'Advanced Excel, VBA, Pivot Tables',
    },
    {
      icon: <Sigma size={24} className="text-blue-500" />,
      title: 'Statistics',
      description: 'Probability, Hypothesis Testing, Regression',
    },
    {
      icon: <BrainCircuit size={24} className="text-blue-500" />,
      title: 'Machine Learning',
      description: 'Python, Scikit-learn, TensorFlow',
    },
  ];

  const behavioralSkills = [
    {
      icon: <Lightbulb size={24} className="text-blue-500" />,
      title: 'Problem Solving',
      description: 'Analytical thinking and innovative solutions',
    },
    {
      icon: <Target size={24} className="text-blue-500" />,
      title: 'Leadership',
      description: 'Team guidance and project management',
    },
    {
      icon: <Workflow size={24} className="text-blue-500" />,
      title: 'Adaptability',
      description: 'Quick learning and flexibility in dynamic environments',
    },
    {
      icon: <Users size={24} className="text-blue-500" />,
      title: 'Collaboration',
      description: 'Cross-functional team coordination',
    },
    {
      icon: <Search size={24} className="text-blue-500" />,
      title: 'Attention to Detail',
      description: 'Precision and accuracy in analysis',
    },
    {
      icon: <Brain size={24} className="text-blue-500" />,
      title: 'Critical Thinking',
      description: 'Strategic analysis and decision making',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0A051F]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Skills & <GradientText>Expertise</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Combining technical proficiency with strong interpersonal abilities to deliver
              comprehensive data analytics solutions.
            </p>
          </motion.div>

          {/* Technical Skills */}
          <div className="mb-16">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-white text-center"
            >
              Technical Skills
            </motion.h3>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={skillCardAnimation}
                  whileHover="hover"
                  className="group p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10
                    transform-gpu perspective-1000 hover:shadow-xl transition-shadow"
                >
                  <motion.div 
                    variants={iconAnimation}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="mb-4 inline-block p-3 bg-blue-500/10 rounded-lg"
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Behavioral Skills */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-white text-center"
            >
              Behavioral Skills
            </motion.h3>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {behavioralSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={skillCardAnimation}
                  whileHover="hover"
                  className="group p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10
                    transform-gpu perspective-1000 hover:shadow-xl transition-shadow"
                >
                  <motion.div 
                    variants={iconAnimation}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="mb-4 inline-block p-3 bg-blue-500/10 rounded-lg"
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;