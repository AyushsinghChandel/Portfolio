import { motion } from 'framer-motion';
import { Github, Folder } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "PhotoAI",
      description: "An AI-powered photo studio where users can train models on their face to create personalized images. Features custom prompt engineering.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
      github: "https://github.com/AyushsinghChandel/PhotoAI",
      link: "#"
    },
    {
      title: "PayNet",
      description: "A secure payment webapp enabling user logins, friend transactions, and balance checks. Implements database atomicity for reliable financial transfers.",
      tech: ["React", "MongoDB", "TypeScript", "Node.js"],
      github: "https://github.com/AyushsinghChandel/PayNet-Backend",
      link: "#"
    },
    {
      title: "EasyDraw",
      description: "A collaborative drawing tool focusing on real-time interaction using WebSockets and high-performance frontend rendering.",
      tech: ["React", "WebSocket", "Canvas API", "Tailwind"],
      github: "https://github.com/AyushsinghChandel/EasyDraw",
      link: "#"
    },
    {
      title: "Brainly",
      description: "A 'Second Brain' knowledge management application allowing users to store, organize, and retrieve links and thoughts efficiently.",
      tech: ["React", "TypeScript", "Tailwind", "Node.js"],
      github: "https://github.com/AyushsinghChandel/Brainly_Backend",
      link: "#"
    },
    {
      title: "SaaS Frontend",
      description: "A pixel-perfect, high-performance landing page for a SaaS product featuring complex animations and a modern UI design.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/AyushsinghChandel/SAAS_Frontend",
      link: "#"
    },
    {
      title: "Course Selling Backend",
      description: "A scalable REST API for a video learning platform. Handles user authentication, course purchasing, and admin management.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/AyushsinghChandel/Course_Selling_Website_Backend",
      link: "#"
    },
  ];

  return (
    <div className='bg-slate-900'>
    <section id="projects" className="py-24 px-6 md:px-20 max-w-7xl mx-auto bg-navy text-slate">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          <span className="text-green font-mono mr-2">/</span> projects
        </h2>
        <div className="h-[1px] bg-lightestNavy flex-grow ml-6 opacity-50"></div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -7 }}
            className="group bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-green/10 cursor-pointer flex flex-col h-full"
          >
            <div className="flex justify-between items-center mb-8">
              <Folder className="w-10 h-10 text-green-300" />
              <div className="flex space-x-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-slate-300 hover:text-green-300 transition-colors"
                >
                  <Github size={20} />
                </a>
                {/* <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-slate-300 hover:text-green-300 transition-colors"
                >
                  <ExternalLink size={20} />
                </a> */}
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-300 mb-2 group-hover:text-green transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-3 mt-auto">
              {project.tech.map((t, idx) => (
                <li key={idx} className="text-xs font-mono text-slate-500">
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

