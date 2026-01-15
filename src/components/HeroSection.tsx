import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section id="hero" className="bg-gray-900 min-h-screen flex items-center justify-center bg-navy px-6 md:px-20 pt-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1 mt-10 md:mt-0 relative"
        >
           <div className="relative group">
              <div className="absolute -inset-4 bg-green/20 rounded-xl blur-lg group-hover:bg-green/30 transition-all duration-300"></div>
              <img 
                src="/profile.png" 
                alt="Ayush Singh" 
                className="mx-20 relative w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
           </div>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col items-start text-left order-1 md:order-2 space-y-6"
        >
            <h1 className="text-white text-3xl md:text-5xl font-bold text-slate px-1">Hi, <span className='text-green-300'>Ayush</span> here.<span className="text-green-300 animate-pulse">..</span></h1>
            <p className="text-white  max-w-lg text-sm leading-relaxed py-2 px-1">
              I'm a Web Developer and Fitness Enthusiast based in <span className="text-green-300">Pune, India</span>. I build         large-scale, high-impact products and love solving complex problems. I am constantly learning and looking for challenges where I can contribute to meaningful software solutions.
            </p>
            <a 
              href="mailto:ayushchandel_230620@aitpune.edu.in"
              className="mx-1 group flex items-center gap-3 border border-green text-green-300 px-9 py-4 rounded font-mono text-sm hover:bg-green/10 transition-all duration-300 mt-5"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              Say Hi!
            </a>
        </motion.div>

      </div>
    </section>
  );
};
