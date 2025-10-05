"use client";
import React, { useState, useEffect } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Importa el componente Link de Next.js

interface NavLink {  
  href: string;  
  label: string;  
}  

const Navbar: React.FC = () => {  
  const [isOpen, setIsOpen] = useState<boolean>(false);  
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [  
    { href: '/', label: 'Inicio' }, // Es buena práctica añadir un link a 'Inicio'
    { href: '/noticias-y-eventos', label: 'Noticias y eventos' },  
    { href: '/personas', label: 'Personas' },  
    { href: '/informacion-academica', label: 'Información Académica' },  
    { href: '/investigacion', label: 'Investigación' }, 
  ];  

  useEffect(() => {
    // Evita el scroll del body cuando el menú está abierto
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- NUEVAS VARIANTES DE ANIMACIÓN PARA EL MENÚ MÓVIL ---
  const mobileMenuVariants = {
    open: {
      x: 0,
      transition: { type: 'spring', stiffness: 200, damping: 30 },
    },
    closed: {
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };
  
  const linkContainerVariants = {
      open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
      closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const linkItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { y: { stiffness: 1000 } },
    },
  };

  return (  
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled || isOpen ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>  
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">  
        <div className="flex items-center justify-between h-20">  
            <Link href="/" className="flex items-center rounded-md">
                <Image
                    src="/Logo-EIE.svg"
                    alt="Logo de la Escuela de Ingeniería Eléctrica"
                    width={180}
                    height={60}
                    className="h-16 w-auto" // Ligeramente más grande
                />
            </Link>
          
            {/* Menú de escritorio */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white text-base font-medium transition-colors hover:text-blue-300">
                    {link.label}
                </Link>
              ))}
            </div>
            
            {/* Botón de Hamburguesa para Móvil */}
            <div className="md:hidden">
              <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="relative w-8 h-8 text-white z-50 transition-transform hover:scale-110"  
                  aria-label="Toggle menu"
              >
                  {/* Líneas de la hamburguesa que se transforman en 'X' */}
                  <motion.div
                      className="absolute top-1/2 left-0 w-full h-0.5 bg-white"
                      animate={{
                          y: isOpen ? 0 : -6,
                          rotate: isOpen ? 45 : 0,
                      }}
                  />
                  <motion.div
                      className="absolute top-1/2 left-0 w-full h-0.5 bg-white"
                      animate={{
                          opacity: isOpen ? 0 : 1,
                      }}
                  />
                  <motion.div
                      className="absolute top-1/2 left-0 w-full h-0.5 bg-white"
                      animate={{
                          y: isOpen ? 0 : 6,
                          rotate: isOpen ? -45 : 0,
                      }}
                  />
              </button>
            </div>  
        </div>  
      </div>  
      
      {/* Menú desplegable REDISEÑADO para dispositivos móviles */}  
      <AnimatePresence>  
        {isOpen && (
            <motion.div 
                className="md:hidden fixed inset-0 bg-gray-900/90 backdrop-blur-sm pt-20"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
            >
                <motion.ul
                    className="flex flex-col items-center justify-center h-full space-y-6"
                    variants={linkContainerVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    {navLinks.map((link) => (
                      <motion.li key={link.href} variants={linkItemVariants}>
                        <Link
                            href={link.href}
                            className="text-white text-3xl font-semibold hover:text-blue-300 transition-colors"
                            onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                        >
                            {link.label}
                        </Link>
                      </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        )}
      </AnimatePresence>  
    </nav>  
  );  
};  

export default Navbar;