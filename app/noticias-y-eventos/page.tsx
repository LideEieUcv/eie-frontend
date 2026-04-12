"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Card from '@/app/components/card';
import SideMenu from '../components/sidemenu';
import MiniCard from '../components/minicard';
import Image from 'next/image';

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
    { label: 'Noticias', href: '#noticias' },
    { label: 'Eventos', href: '#eventos' },
  ];
  
  // --- LÓGICA DE DATOS ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noticiasResponse, eventosResponse] = await Promise.all([
          axios.get('http://localhost:3000/noticias/reciente'), 
          axios.get('http://localhost:3000/eventos/reciente')  // Llama al endpoint que trae TODO
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
            Noticias y Eventos
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
                title="Noticias y Eventos"
                menuItems={menuItems}
                activeMenu={activeMenu}
                onItemClick={(label) => setActiveMenu(label)}
              />
            </div>
          </aside>
          
          {/* 4. Contenido Principal */}
          <main className="lg:w-3/4">

            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg border border-gray-100">
              <Image 
                // src="https://images.unsplash.com/photo-1585860941685-337fb6ce8e0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Ruta a tu imagen (p.ej. de Unsplash)
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cabecera de la sección de Noticias de Ingeniería Eléctrica"
                fill // Ocupa todo el contenedor padre
                className="object-cover transition-transform duration-500 hover:scale-105" // Imagen tipo cover y efecto hover sutil
                priority // Carga esta imagen con prioridad
              />
              {/* Superposición opcional para mejorar el contraste del título si fuera necesario */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* --- Sección de Noticias --- */}
            <section id="noticias" className="mb-24 scroll-mt-32">
              <div className="flex justify-between items-baseline mb-8 pb-3 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900">Noticias</h2>
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
            <section id="eventos" className='scroll-mt-32'>
              <div className="flex justify-between items-baseline mb-8 pb-3 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900">Eventos</h2>
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
                ) : ( <p>No hay eventos programados para los próximos días.</p> )}
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