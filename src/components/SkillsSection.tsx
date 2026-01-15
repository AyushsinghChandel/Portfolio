import { motion } from 'framer-motion';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiPostgresql, 
  SiRedis, 
  SiDocker, 
  SiKubernetes, 
  SiAmazon, 
  SiCplusplus 
} from 'react-icons/si';

export const SkillsSection = () => {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
  ];

  return (
    <div className='bg-gray-900'>
    <section id="skills" className="py-24 px-6 md:px-20 max-w-7xl mx-auto text-slate">
      <div className="flex items-center mb-16">
        <h2 className="text-2xl md:text-3xl text-white font-bold text-lightestSlate">
          <span className="font-mono mr-2">/</span>skills
        </h2>
        <div className="h-[1px] bg-lightestNavy flex-grow ml-6 opacity-50"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mx-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group bg-lightNavy p-6 rounded-xl border border-1 hover:border-green-300 cursor-pointer flex flex-col items-center justify-center gap-4"
          >
            <skill.icon 
              className="w-12 h-12 text-[var(--color)] transition-colors duration-300 group-hover:text-[var(--hover-color)]"
              style={{ '--hover-color' : skill.color, '--color': skill.color } as React.CSSProperties} 
            />
            <h3 className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>

    </section>
    </div>
  );
};
