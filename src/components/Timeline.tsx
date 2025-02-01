import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ year, title, company, description, type }: {
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education';
}) => {
  const Icon = type === 'work' ? Briefcase : GraduationCap;
  
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 p-2 bg-blue-600 rounded-full">
        <Icon size={20} className="text-white" />
      </div>
      <div className="border-l-2 border-gray-200 pl-8 ml-2">
        <span className="text-sm font-semibold text-blue-600">{year}</span>
        <h3 className="text-xl font-bold text-gray-800 mt-1">{title}</h3>
        <p className="text-lg text-gray-600">{company}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      year: '2022 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Leading development of enterprise applications using React, Node.js, and AWS.',
      type: 'work' as const,
    },
    {
      year: '2019 - 2022',
      title: 'Full Stack Developer',
      company: 'Digital Innovations Co.',
      description: 'Developed and maintained multiple web applications using modern technologies.',
      type: 'work' as const,
    },
    {
      year: '2015 - 2019',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      description: 'Graduated with honors, specialized in Software Engineering.',
      type: 'education' as const,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience & Education</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;