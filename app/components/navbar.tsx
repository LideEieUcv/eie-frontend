"use client";
import React, { useState } from 'react';  

interface NavLink {  
  href: string;  
  label: string;  
}  

const Navbar: React.FC = () => {  
  const [isOpen, setIsOpen] = useState<boolean>(false);  

  const navLinks: NavLink[] = [  
    { href: '/noticias-y-eventos', label: 'Noticias y eventos' },  
    { href: '/personas', label: 'Personas' },  
    { href: '/informacion-academica', label: 'Información Académica' },  
    { href: '/investigacion', label: 'Investigación' },  
    { href: '/acerca-de', label: 'Acerca de' },  
  ];  

  return (  
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="flex items-center justify-between h-16">  
          <a href="/" className="text-gray-800 border border-black font-bold text-lg">Logo de la Escuela</a>  
          <div className="sm:hidden">  
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">  
              {/* Icono del menú (hamburguesa) */}  
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />  
              </svg>  
            </button>  
          </div>  
          <div className={`hidden sm:flex sm:items-center sm:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>  
            {navLinks.map((link) => (  
              <a key={link.href} href={link.href} className="text-black-900 hover:text-gray-700 transition-colors duration-150 ease-in-out">  
                {link.label}  
              </a>  
            ))}  
          </div>  
        </div>  
      </div>  
      {/* Menú desplegable para dispositivos móviles */}  
      {isOpen && (  
        <div className="sm:hidden bg-white border-t border-gray-200">  
          {navLinks.map((link) => (  
            <a key={link.href} href={link.href} className="block px-4 py-2 text-black-900 hover:bg-gray-100">  
              {link.label}  
            </a>  
          ))}  
        </div>  
      )}  
    </nav>  
  );  
};  

export default Navbar;