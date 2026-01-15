import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <div className='bg-gray-900'>
    <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto text-slate">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center mb-12"
      >
        <h2 className="text-4xl md:text-3xl font-bold text-white">
          <span className="text-green font-mono mr-2">/</span>about me
        </h2>
        <div className="h-[1px] bg-lightestNavy flex-grow ml-6 opacity-50"></div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           viewport={{ once: true }}
           className="md:col-span-2 space-y-6 text-sm leading-relaxed"
        >
          <p className='text-slate-400'>
            I am currently a student at the <span className="text-green-300">Army Institute of Technology, Pune</span>, pursuing a degree in <span className="text-green-300">Electronics and Telecommunication Engineering</span>. I am fascinated by how large-scale systems work and strive to build high-impact digital experiences that are both efficient and scalable.
          </p>
          <p className='text-slate-400'>
            
          </p>
          <p className='text-slate-400'>
            Outside of code and engineering, I am a total nerd who loves geeking out over new <strong>tech gadgets</strong>, watching movies, and getting lost in <strong>fictional books</strong>. I also enjoy playing <strong>competitive games</strong> to keep my reflexes sharp.
          </p>
          <p className='text-slate-400'>
            Oh, and I am also a dedicated <strong>fitness enthusiast</strong> because a strong mind needs a strong body.
          </p>
        </motion.div>
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           viewport={{ once: true }}
           className="relative group flex justify-center md:justify-start -mt-10"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72">
             <div className="absolute inset-0 bg-green/20 rounded-xl overflow-hidden group-hover:bg-transparent transition-colors duration-300">
                <img 
                  src="/profile1.jpeg" 
                  alt="Ayush Singh" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 rounded-xl"
                />
             </div>
          </div>
        </motion.div>

      </div>
    </section>
    </div>
  );
};