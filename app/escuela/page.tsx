"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Card from '@/app/components/card';
import SideMenu from '../components/sidemenu';
import MiniCard from '../components/minicard';
import InfoBlock from '../components/infoblock';

// --- INTERFACES DE DATOS ---
interface Noticia {
  id: number;
  image: string;
  title: string;
  date: string;
  content: string;
}

interface Evento {
  id: number;
  title: string;
  date: number;
  day: string;
  month: string;
  hour: string;
  content?: string;
}

interface MenuItem {
  label: string;
  href: string;
}

const NoticiasEventosPage: React.FC = () => {
  // --- ESTADOS ---
  const [activeMenu, setActiveMenu] = useState<string>('Noticias');
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);

  const menuItems: MenuItem[] = [
    { label: 'Historia', href: '#noticias' },
    { label: 'Visión', href: '#vision' },
    { label: 'Misión', href: '#mision' },
    { label: 'Departamentos', href: '#departamentos' },
  ];
  
  // --- LÓGICA DE DATOS ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noticiasResponse, eventosResponse] = await Promise.all([
          axios.get('http://localhost:3000/noticias'), // Llama al endpoint que trae TODO
          axios.get('http://localhost:3000/eventos')  // Llama al endpoint que trae TODO
        ]);
        setNoticias(noticiasResponse.data);
        setEventos(eventosResponse.data);
      } catch (error) {
        console.error("Error al obtener los archivos:", error);
      }
    };
    fetchData();
  }, []);

  // --- LÓGICA DE SCROLL ---
  useEffect(() => {
    // Tu lógica `handleScroll` existente es perfecta, la mantenemos aquí.
    const handleScroll = () => { /* ... */ };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Cabecera */}
      <header className="bg-[#1F366A] border-b border-gray-200">
        <div className="max-w-7xl mx-auto pt-40 pb-24 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Acerca de la Escuela
          </motion.h1>
          {/* <motion.p className="mt-4 max-w-2xl mx-auto text-lg text-white">
            Explora el historial completo de publicaciones y acontecimientos de nuestra escuela.
          </motion.p> */}
        </div>
      </header>

      {/* 2. Cuerpo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          
          {/* 3. Menú Lateral */}
          <aside className="lg:w-1/4 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <SideMenu
                title="Escuela"
                menuItems={menuItems}
                activeMenu={activeMenu}
                onItemClick={(label) => setActiveMenu(label)}
              />
            </div>
          </aside>
          
          {/* 4. Contenido Principal */}
          <main className="lg:w-3/4">

            {/* --- Sección de Noticias --- */}
            <section id="historia" className="mb-24">
              <InfoBlock 
                title="Historia"
                subtitle=""
                content={`La Escuela de Ingeniería Eléctrica es una de las que conforman la Facultad de Ingeniería de la Universidad Central de Venezuela. Aunque la enseñanza de la Ingeniería Eléctrica comenzó en 1948 en la Universidad Central de Venezuela, la organización de los estudios dentro del marco académico de una Escuela se concretó sólo en 1962. Para esta fecha la única universidad que impartía estudios en esta especialidad era la Universidad Central de Venezuela. La creación de los estudios de Ingeniería Eléctrica en Venezuela, en 1948, se debió a las necesidades impuestas por el creciente desarrollo tecnológico y científico, a nivel mundial, como consecuencia de la Segunda Guerra Mundial. Entre los avances tecnológicos de esta época pueden citarse el radar, las microondas, el transistor, la computadora, la televisión y la electrónica en general. Para esta fecha el número de ingenieros electricistas en Venezuela no llegaba a la media decena, egresados todos de institutos universitarios del exterior.`}
              />
            </section>

            {/* --- Sección de Próximos Eventos --- */}
            <section id="eventos">
              <div className="flex justify-between items-baseline mb-8 pb-3 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900">Todos los Eventos</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventos.length > 0 ? (
                  eventos.map((evento) => (
                    <MiniCard
                      key={evento.id}
                      id={evento.id} // <-- ¡IMPORTANTE para enlazar a la pág. de detalle!
                      title={evento.title}
                      date={evento.date}
                      day={evento.day}
                      month={evento.month}
                      hour={evento.hour}
                      content={evento.content ?? 'No hay descripción'}
                    />
                  ))
                ) : ( <p>Cargando eventos...</p> )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

// No olvides pegar tu función `createExcerpt` aquí si la necesitas
function createExcerpt(html: string, length: number = 150): string {
    const text = html.replace(/<[^>]*>?/gm, '');
    if (text.length <= length) return text;
    return text.substring(0, length).trim() + '...';
}

export default NoticiasEventosPage;