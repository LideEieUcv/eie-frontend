"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
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
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

// --- COMPONENTE PRINCIPAL ---
const Index: React.FC = () => {
  // --- ESTADOS (con la adición de `personas` y `isLoading`) ---
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Estados para los filtros (se mantienen igual)
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [activeMenu, setActiveMenu] = useState<string>('Profesores');
  
  // (Estados para la UI del menú móvil, se mantienen igual)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuTop, setMenuTop] = useState<number>(0);

  // --- SE ELIMINA EL ARRAY DE DATOS DE EJEMPLO `personas` ---
  
  const menuItems: MenuItem[] = [
    { label: 'Profesores', href: '#' },
    { label: 'Administrativos', href: '#' },
    { label: 'Egresados', href: '#' },
  ];
  
  // --- LÓGICA DE DATOS CON useEffect PARA CONECTAR AL BACKEND ---
  useEffect(() => {
    const fetchPersonas = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams({
          categoria: activeMenu,
          search: searchTerm,
          sort: sortOrder.toUpperCase(),
        });

        const response = await axios.get(`http://localhost:3000/personas?${params.toString()}`);
        setPersonas(response.data);
      } catch (error) {
        console.error("Error al obtener los datos de personas:", error);
        setPersonas([]);
      } finally {
        setIsLoading(false);
      }
    };

    // Usamos un pequeño 'debounce' para la búsqueda, para no hacer una llamada a la API en cada tecla.
    const searchTimeout = setTimeout(() => {
        fetchPersonas();
    }, 300); // Espera 300ms después de que el usuario deja de escribir

    return () => clearTimeout(searchTimeout); // Limpia el timeout si el componente se desmonta o re-renderiza

  }, [activeMenu, searchTerm, sortOrder]);


  // El 'useEffect' para el scroll del menú lateral se mantiene si lo necesitas.
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 100;
      const scrollY = window.scrollY;
      setMenuTop(Math.max(0, scrollY > headerHeight ? scrollY - headerHeight : 0));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Título principal */}
      <header className="bg-gray-800 border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
            {/* ... Tu código del Header oscuro ... */}
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Personas
            </motion.h1>
            <motion.p 
              className="mt-4 max-w-2xl mx-auto text-2xl text-white"
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
              {isLoading ? (
                <div className="col-span-full text-center text-gray-500 py-16">
                  <h3 className="text-xl font-semibold">Cargando...</h3>
                </div>
              ) : personas.length > 0 ? (
                personas.map((persona: Persona) => (
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
    </>
  );
};

export default Index;