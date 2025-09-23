"use client";
import React, { useState, useEffect } from 'react';
import PersonaCard from '../components/personacard';
import SideMenu from '../components/sidemenu';
import SearchBar from '../components/searchbar';
import SortButton from '../components/sortbutton';

interface Persona {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  categoria: 'Profesores' | 'Administrativos' | 'Egresados';
}

interface MenuItem {
  label: string;
  href: string;
}

const Index: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [activeMenu, setActiveMenu] = useState<string>('Profesores');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuTop, setMenuTop] = useState<number>(0);

  const personas: Persona[] = [
    { id: 1, nombre: 'John Doe', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/john.jpg', categoria: 'Profesores' },
    { id: 2, nombre: 'Jane Smith', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/jane.jpg', categoria: 'Egresados' },
    { id: 3, nombre: 'Angel Mata', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/angel.jpg', categoria: 'Egresados' },
    { id: 4, nombre: 'Alejandro Herrera', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/alejandro.jpg', categoria: 'Administrativos' },
    { id: 5, nombre: 'Jose Perez', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/jose.jpg', categoria: 'Administrativos' },
    { id: 6, nombre: 'Antonio Midas', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/antonio.jpg', categoria: 'Administrativos' },
    { id: 7, nombre: 'Gabriel Cumare', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/gabriel.jpg', categoria: 'Administrativos' },
    { id: 8, nombre: 'Ricardo Santana', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/ricardo.jpg', categoria: 'Administrativos' },
  ];

  const menuItems: MenuItem[] = [
    { label: 'Profesores', href: '#' },
    { label: 'Administrativos', href: '#' },
    { label: 'Egresados', href: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 100; // Adjust based on your header height
      const scrollY = window.scrollY;
      setMenuTop(Math.max(0, scrollY > headerHeight ? scrollY - headerHeight : 0));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getFilteredAndSortedPersonas = (): Persona[] => {
    return personas
      .filter(p => p.categoria === activeMenu)
      .filter(p => p.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => sortOrder === 'asc'
        ? a.nombre.localeCompare(b.nombre)
        : b.nombre.localeCompare(b.nombre));
  };

  const filteredPersonas = getFilteredAndSortedPersonas();

  return (
    <>
      {/* Título principal */}
      <div className='min-h-96 bg-gray-300 flex flex-col items-center justify-center text-black text-3xl lg:text-4xl font-extrabold text-center px-4 mb-5'>
        <h1>PERSONAS</h1>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Contenedor de las tarjetas y búsqueda */}
        <div className="flex-grow lg:pl-8 px-4 relative">
          {/* Fondo difuminado con desenfoque para móviles cuando el menú está abierto */}
          {isMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-md z-30"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Sección de Búsqueda y Ordenamiento */}
          <div className='flex flex-col sm:flex-row items-center justify-between mb-5 space-y-4 sm:space-y-0 sm:space-x-4'>
            {/* Título dinámico */}
            <h1 className='font-extrabold text-2xl lg:text-3xl'>{activeMenu}</h1>
            
            {/* Contenedor de SearchBar y SortButton */}
            <div className="flex flex-col items-end space-y-4">
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                className="w-full sm:w-64 max-w-full border border-black rounded-none"
              />
              <div className="flex items-center space-x-2">
                <span className="font-semibold flex items-center">Organizar</span>
                <SortButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
              </div>
            </div>
          </div>

          {/* Botón de menú centrado debajo del subtítulo */}
          <button 
            className="lg:hidden p-5 bg-gray-800 bg-opacity-80 text-white absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 z-50 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* SideMenu centrado horizontalmente debajo del botón en móviles */}
          {isMenuOpen && (
            <div 
              className="lg:hidden w-11/12 sm:w-80 bg-white bg-opacity-90 text-black p-6 absolute top-32 sm:top-40 left-1/2 -translate-x-1/2 z-40 rounded-lg shadow-xl flex flex-col items-center transition-transform duration-300"
            >
              <SideMenu
                menuItems={menuItems}
                activeMenu={activeMenu}
                onItemClick={(label: string) => {
                  setActiveMenu(label);
                  setIsMenuOpen(false); // Cerrar el menú al hacer clic
                }}
              />
              {/* Nota: En el componente SideMenu, considera estilizar los MenuItem así:
                  className="w-full py-2 px-4 text-center text-lg font-medium text-gray-800 hover:bg-gray-200 hover:text-black rounded-md transition-colors duration-200"
              */}
            </div>
          )}

          {/* SideMenu en escritorio (lateral) */}
          <div 
            className="hidden lg:block w-64 flex-shrink-0 bg-transparent text-black p-4 lg:sticky lg:top-0 z-40"
            style={{ top: `${menuTop}px` }}
          >
            <SideMenu
              menuItems={menuItems}
              activeMenu={activeMenu}
              onItemClick={(label: string) => {
                setActiveMenu(label);
                setIsMenuOpen(false);
              }}
            />
          </div>

          {/* Sección de Personas */}
          <div id="personas" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-14 mt-28 sm:mt-32">
            {filteredPersonas.map((persona: Persona) => (
              <PersonaCard
                key={persona.id}
                nombre={persona.nombre}
                descripcion={persona.descripcion}
                imagen={persona.imagen}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;