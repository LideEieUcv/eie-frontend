"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Card from '@/app/components/card';
import SideMenu from '../components/sidemenu';
import MiniCard from '../components/minicard';

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

// --- VARIANTES DE ANIMACIÓN ---
const containerVariants = { /* ... */ }; // Puedes copiar tus variantes aquí
const itemVariants = { /* ... */ };     // o definirlas si no están.

const NoticiasEventosPage: React.FC = () => {
  // --- ESTADOS ---
  const [activeMenu, setActiveMenu] = useState<string>('Noticias');
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);

  const menuItems: MenuItem[] = [
    { label: 'Noticias', href: '#noticias' },
    { label: 'Eventos', href: '#eventos' },
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
      <header className="bg-gray-800 border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Archivo de Noticias y Eventos
          </motion.h1>
          <motion.p className="mt-4 max-w-2xl mx-auto text-lg text-white">
            Explora el historial completo de publicaciones y acontecimientos de nuestra escuela.
          </motion.p>
        </div>
      </header>

      {/* 2. Cuerpo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          
          {/* 3. Menú Lateral */}
          <aside className="lg:w-1/4 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <SideMenu title="Secciones" menuItems={menuItems} activeMenu={activeMenu} />
            </div>
          </aside>
          
          {/* 4. Contenido Principal */}
          <main className="lg:w-3/4">

            {/* --- Sección de Noticias --- */}
            <section id="noticias" className="mb-24">
              <div className="flex justify-between items-baseline mb-8 pb-3 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900">Todas las Noticias</h2>
              </div>
              <div className="grid grid-cols-1 gap-12">
                {/* Ahora mapeamos los datos REALES */}
                {noticias.length > 0 ? (
                  noticias.map((noticia) => (
                    <Card
                      key={noticia.id}
                      id={noticia.id} // <-- ¡IMPORTANTE para enlazar a la pág. de detalle!
                      image={noticia.image}
                      title={noticia.title}
                      date={noticia.date}
                      content={createExcerpt(noticia.content)} // <-- Reutiliza tu función `createExcerpt`
                    />
                  ))
                ) : ( <p>Cargando noticias...</p> )}
              </div>
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