"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PersonaCard from '../components/personacard';
import SideMenu from '../components/sidemenu';
import SearchBar from '../components/searchbar';
import SortButton from '../components/sortbutton';

// --- INTERFACES ---
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

// --- VARIANTES DE ANIMACIÓN ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// --- COMPONENTE PRINCIPAL ---
const Index: React.FC = () => {
  // --- ESTADOS ---
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [activeMenu, setActiveMenu] = useState<string>('Profesores');
  
  // Datos de ejemplo (se reemplazarán con la llamada a la API)
  const personas: Persona[] = [
    { id: 1, nombre: 'John Doe', descripcion: 'Profesor de Circuitos Eléctricos.', imagen: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTI5fDB8MXxzZWFyY2h8MTB8fHRlYWNoZXJ8ZW58MHx8fHwxNzE1MDQxNzQ5&ixlib=rb-4.0.3&q=80&w=400', categoria: 'Profesores' },
    { id: 9, nombre: 'Ana Fernandez', descripcion: 'Especialista en Sistemas de Potencia.', imagen: 'https://images.unsplash.com/photo-1544717297-fa95b9ee9640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTI5fDB8MXxzZWFyY2h8OHx8cHJvZmVzc29yYXxlbnwwfHx8fDE3MTUwNDIxNDQ&ixlib=rb-4.0.3&q=80&w=400', categoria: 'Profesores' },
    { id: 2, nombre: 'Jane Smith', descripcion: 'Ingeniera egresada, especialista en IA.', imagen: 'https://images.unsplash.com/photo-1542596594-649ed6e6b342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTI5fDB8MXxzZWFyY2h8Nnx8ZW5naW5lZXJ8ZW58MHx8fHwxNzE1MDQyMDc4&ixlib=rb-4.0.3&q=80&w=400', categoria: 'Profesores' },
    { id: 3, nombre: 'Angel Mata', descripcion: 'Egresado, fundador de startup tecnológica.', imagen: 'https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTI5fDB8MXxzZWFyY2h8MTF8fG1hbnxlbnwwfHx8fDE3MTUwNDE3ODg&ixlib=rb-4.0.3&q=80&w=400', categoria: 'Profesores' },
    { id: 4, nombre: 'Alejandro Herrera', descripcion: 'Coordinador Administrativo.', imagen: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTI5fDB8MXxzZWFyY2h8Mnx8bWFufGVufDB8fHx8MTcxNTA0MTc4OA&ixlib=rb-4.0.3&q=80&w=400', categoria: 'Administrativos' },
    { id: 5, nombre: 'Jose Perez', descripcion: 'Asistente de laboratorio.', imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTI5fDB8MXxzZWFyY2h8M3x8bWVufGVufDB8fHx8MTcxNTA0MTc4OA&ixlib=rb-4.0.3&q=80&w=400', categoria: 'Profesores' },
    { id: 6, nombre: 'Antonio Midas', descripcion: 'Secretario Académico.', imagen: 'https://images.unsplash.com/photo-1615109398623-88346a601842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTI5fDB8MXxzZWFyY2h8N3x8bWVufGVufDB8fHx8MTcxNTA0MTc4OA&ixlib=rb-4.0.3&q=80&w=400', categoria: 'Profesores' },
    { id: 7, nombre: 'Gabriel Cumare', descripcion: 'Soporte Técnico.', imagen: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTI5fDB8MXxzZWFyY2h8OHx8bWVufGVufDB8fHx8MTcxNTA0MTc4OA&ixlib=rb-4.0.3&q=80&w=400', categoria: 'Profesores' },
    { id: 8, nombre: 'Ricardo Santana', descripcion: 'Jefe de Departamento.', imagen: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNTI5fDB8MXxzZWFyY2h8OXx8bWVufGVufDB8fHx8MTcxNTA0MTc4OA&ixlib=rb-4.0.3&q=80&w=400', categoria: 'Profesores' },
  ];

  const menuItems: MenuItem[] = [
    { label: 'Profesores', href: '#' },
    { label: 'Administrativos', href: '#' },
    { label: 'Egresados', href: '#' },
  ];

  // --- LÓGICA DE FILTRADO Y ORDENAMIENTO (CLIENT-SIDE) ---
  const getFilteredAndSortedPersonas = (): Persona[] => {
    return personas
      .filter(p => p.categoria === activeMenu)
      .filter(p => p.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.nombre.localeCompare(b.nombre);
        } else {
          return b.nombre.localeCompare(a.nombre);
        }
      });
  };

  const filteredPersonas = getFilteredAndSortedPersonas();
  
  return (
    <>
    <div className="bg-white">
      {/* 1. Cabecera estilo MIT */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Personas
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-2xl text-black"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Conoce al equipo de profesores, personal administrativo y egresados destacados que conforman nuestra comunidad.
          </motion.p>
        </div>
      </header>

      {/* 2. Cuerpo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          
          {/* Menú Lateral */}
          <aside className="lg:w-1/4 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <SideMenu
                title="Categorías"
                menuItems={menuItems}
                activeMenu={activeMenu}
                onItemClick={(label: string) => setActiveMenu(label)}
              />
            </div>
          </aside>
          
          {/* Contenido Principal */}
          <main className="lg:w-3/4">
            
            {/* Encabezado con Filtros */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-200 gap-4">
              <h2 className="text-3xl font-bold text-gray-900 whitespace-nowrap">{activeMenu}</h2>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  className="w-full md:w-auto"
                />
                <SortButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
              </div>
            </div>

            {/* Grid de Personas Animado */}
            <motion.div 
              key={activeMenu}
              id="personas" 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredPersonas.length > 0 ? (
                filteredPersonas.map((persona: Persona) => (
                  <motion.div key={persona.id} variants={itemVariants}>
                    <PersonaCard
                      nombre={persona.nombre}
                      descripcion={persona.descripcion}
                      imagen={persona.imagen}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 py-16">
                  <h3 className="text-xl font-semibold">Sin resultados</h3>
                  <p className="mt-2">No se encontraron personas que coincidan con tu búsqueda en esta categoría.</p>
                </div>
              )}
            </motion.div>
            
          </main>
        </div>
      </div>
    </div>
  </>
  );
};

export default Index;