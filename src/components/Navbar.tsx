import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
  ];

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: "https://github.com/AyushsinghChandel",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/ayush-singh-847861289/",
    },
    { icon: <X size={18} />, href: "https://x.com/AyushSi96182190" },
    {
      icon: <Mail size={18} />,
      href: "mailto:ayushchandel_230620@aitpune.edu.in",
    },
  ];

  return (
    <nav
      className={ `fixed bg-gray-900 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 max-w-7xl mx-auto">
        <div className="w-full md:w-auto flex justify-between items-center mb-2 md:mb-0">
          <div
            onClick={() => {
              window.location.reload();
            }}
            className="text-white font-mono text-xl font-bold border-green rounded-md p-1 px-2 cursor-pointer transition-colors"
          >
            Ayush Singh Chandel
          </div>
          <div className="flex md:hidden items-center space-x-6">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-green"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center w-full md:w-auto overflow-x-auto no-scrollbar py-2 md:py-0 justify-center md:justify-end">
          <ul className="flex space-x-6 text-sm font-mono text-white whitespace-nowrap">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-green transition-colors flex items-center"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-6 ml-6">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-green hover:-translate-y-1 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
