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

  const personas: Persona[] = [
    { id: 1, nombre: 'John Doe', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/john.jpg' },
    { id: 2, nombre: 'Jane Smith', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/jane.jpg' },
    { id: 3, nombre: 'Angel Mata', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/angel.jpg' },
    { id: 4, nombre: 'Alejandro Herrera', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/alejandro.jpg' },
    { id: 5, nombre: 'Jose Perez', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/jose.jpg' },
    { id: 6, nombre: 'Antonio Midas', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/antonio.jpg' },
    { id: 7, nombre: 'Gabriel Cumare', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/gabriel.jpg' },
    { id: 8, nombre: 'Ricardo Santana', descripcion: 'Lorem ipsum dolor sit amet consectetur.', imagen: 'https://example.com/ricardo.jpg' },
  ];

  const menuItems: MenuItem[] = [
    { label: 'Profesores', href: '#' },
    { label: 'Egresados', href: '#' },
    { label: 'Administrativo', href: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const personasSection = document.getElementById('personas');
      if (personasSection) {
        const rect = personasSection.getBoundingClientRect();
        if (rect.top <= 100) {
          setActiveMenu('Profesores');
        } else {
          setActiveMenu('Egresados');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getFilteredAndSortedPersonas = (): Persona[] => {
    return personas
      .filter(p => p.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => sortOrder === 'asc'
        ? a.nombre.localeCompare(b.nombre)
        : b.nombre.localeCompare(a.nombre));
  };

  const filteredPersonas = getFilteredAndSortedPersonas();

  return (
    <>
      {/* Título principal */}
      <div className='min-h-96 bg-gray-300 flex flex-col items-center justify-center text-black text-3xl lg:text-4xl font-extrabold text-center px-4 mb-5'>
        <h1>PERSONAS</h1>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Botón de hamburguesa para pantallas pequeñas */}
        <button className="lg:hidden p-4 bg-gray-800 text-white fixed top-4 left-4 z-50 rounded-md" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        </button>

        {/* SideMenu en el lateral izquierdo */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block w-64 flex-shrink-0 bg-transparent text-black p-4 lg:relative lg:h-auto z-40`}>
          <SideMenu
            menuItems={menuItems}
            activeMenu={activeMenu}
            onItemClick={(label) => {
              setActiveMenu(label);
              setIsMenuOpen(false); // Cerrar el menú en pantallas pequeñas al hacer clic
            }}
          />
        </div>

        {/* Contenedor de las tarjetas y búsqueda */}
        <div className="flex-grow lg:pl-8 px-4">
          {/* Sección de Búsqueda y Ordenamiento */}
          <div className='flex flex-row items-center justify-between mb-5 space-x-4'>
          {/* Título dinámico */}
          <h1 className='font-extrabold text-2xl lg:text-3xl'>{activeMenu}</h1>
          
          {/* Contenedor de SearchBar y SortButton */}
          <div className="flex flex-col items-end space-y-4 ">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              className="w-64 md:w-[900px] border border-black rounded-none"
            />
          <div className="flex items-center space-x-2">
            <span className="font-semibold flex items-center mb-4">Organizar</span>
            <SortButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>
          </div>
        </div>

          {/* Sección de Personas */}
          <div id="personas" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {filteredPersonas.map(persona => (
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