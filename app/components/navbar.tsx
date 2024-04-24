import React from 'react';

interface NavLink {
  href: string;
  label: string;
}

const Navbar = () => {
  const navLinks: NavLink[] = [
    { href: '/noticias-y-eventos', label: 'Noticias y eventos' },
    { href: '/personas', label: 'Personas' },
    { href: '/informacion-academica', label: 'Información Academica' },
    { href: '/investigacion', label: 'Investigación' },
    { href: '/acerca-de', label: 'Acerca de' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-gray-800 border border-black font-bold text-lg">Logo de la escuela</a>
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-black-900 hover:text-gray-700 transition-colors duration-150 ease-in-out">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
