import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from './ui/GradientText';
import { staggerContainer, cardAnimation } from '../animations/variants';

const Education = () => {
  const education = [
    {
      degree: 'Master degree',
      institution: 'University of Illinois',
      program: 'Masters in data analytics',
      result: 'On Going',
      year: '2024'
    },
    {
      degree: 'Bachelor of Technology',
      institution: 'Gandhi Institute of Technology and Management (GITAM)',
      program: 'CSE (Cyber Security Specialization)',
      result: '7.21 CGPA',
      year: '2020 – 2024'
    },
    {
      degree: 'Senior secondary',
      institution: 'Sri Chaitanya Raman Bhavan 1',
      program: 'MPC (Mathematics, Physics and Chemistry)',
      result: '7 CGPA',
      year: '2018 – 2020'
    },
    {
      degree: 'Higher secondary',
      institution: 'Duddupudi English Medium High School',
      program: 'CBSE',
      result: '60%',
      year: '2017 – 2018'
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#0A051F]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Education & <GradientText>Qualifications</GradientText>
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover="hover"
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/10
                  transform-gpu perspective-1000"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <GraduationCap size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-300 mb-2">{edu.program}</p>
                    <p className="text-gray-400 mb-2">Result: {edu.result}</p>
                    <p className="text-gray-400">{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
