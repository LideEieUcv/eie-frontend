"use client";
import React, { useState, useEffect } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {  
  href: string;  
  label: string;  
}  

const Navbar: React.FC = () => {  
  const [isOpen, setIsOpen] = useState<boolean>(false);  
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [  
    { href: '/noticias-y-eventos', label: 'Noticias y eventos' },  
    { href: '/personas', label: 'Personas' },  
    { href: '/informacion-academica', label: 'Información Académica' },  
    { href: '/investigacion', label: 'Investigación' }, 
  ];  

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for the mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  // Animation variants for menu items
  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (  
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>  
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">  
        <div className="flex items-center justify-between h-16">  
        <a href="/" className="flex items-center bg-transparent px-3 py-1 rounded-md">  
          <img 
            src="/ruta/a/tu/imagen/logo.png" // Reemplaza con la ruta correcta de tu imagen
            alt="Logo de la Escuela"
            className="h-14 w-auto" // Ajusta el tamaño según necesites
          />
        </a>  
          <div className="md:hidden">  
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none hover:bg-blue-700 p-2 rounded-md transition-colors duration-200"  
              aria-label="Toggle menu"
            >  
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />  
              </svg>  
            </button>  
          </div>  
          <div className="hidden md:flex md:items-center md:space-x-6">  
            {navLinks.map((link) => (  
              <a 
                key={link.href} 
                href={link.href} 
                className="text-white hover:text-black transition-colors duration-200 font-medium text-lg"  
              >  
                {link.label}  
              </a>  
            ))}  
          </div>  
        </div>  
      </div>  
      {/* Menú desplegable para dispositivos móviles */}  
      <AnimatePresence>  
        {isOpen && (  
          <motion.div 
            className="md:hidden bg-gray-800 border-t border-gray-700 shadow-lg"  
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >  
            <div className="flex justify-end p-3">  
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white hover:text-red-500 focus:outline-none hover:bg-gray-700 p-2 rounded-full transition-colors duration-200"  
                aria-label="Close menu"
              >  
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />  
                </svg>  
              </button>  
            </div>  
            {navLinks.map((link, index) => (  
              <motion.a 
                key={link.href} 
                href={link.href} 
                className="block px-4 py-3 text-white hover:bg-violet-500 hover:text-black transition-colors duration-200 border-b border-gray-700 last:border-b-0 text-lg"  
                onClick={() => setIsOpen(false)}
                variants={linkVariants}
                initial="closed"
                animate="open"
                transition={{ delay: index * 0.1 }}
              >  
                {link.label}  
              </motion.a>  
            ))}  
          </motion.div>  
        )}  
      </AnimatePresence>  
    </nav>  
  );  
};  

export default Navbar;