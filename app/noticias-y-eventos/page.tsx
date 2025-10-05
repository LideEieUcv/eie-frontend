"use client";
import React, { useState, useEffect } from 'react';
import Card from '@/app/components/card';
import SideMenu from '../components/sidemenu';
import MiniCard from '../components/minicard';

interface CardData {
  image: string;
  title: string;
  date: string;
  content: string;
}

interface MenuItem {
  label: string;
  href: string;
}

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('Noticias');

  const cardsData: CardData[] = [
    {
      image: 'https://example.com/image1.jpg',
      title: 'Título del artículo 1',
      date: '1 de enero de 2023',
      content: 'Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada.',
    },
    {
      image: 'https://example.com/image2.jpg',
      title: 'Título del artículo 2',
      date: '15 de febrero de 2023',
      content: 'Este es el contenido del artículo 2. Aquí puedes agregar una descripción más detallada.',
    },
    {
      image: 'https://example.com/image3.jpg',
      title: 'Título del artículo 3',
      date: '30 de marzo de 2023',
      content: 'Este es el contenido del artículo 3. Aquí puedes agregar una descripción más detallada.',
    },
  ];

  const menuItems: MenuItem[] = [
    { label: 'Noticias', href: '/noticias-y-eventos#noticias' },
    { label: 'Eventos', href: '/noticias-y-eventos#proximos-eventos' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const eventosSection = document.getElementById('proximos-eventos');
      if (eventosSection) {
        const eventosRect = eventosSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Check if the bottom of the eventos section is within or above the viewport
        if (eventosRect.bottom <= windowHeight) {
          setActiveMenu('Eventos');
        } else {
          setActiveMenu('Noticias');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className="bg-white"> {/* Contenedor principal de la página */}
      
      {/* 1. Cabecera Mejorada */}
      <header className="bg-gray-800 text-white relative">
        {/* Puedes añadir una imagen de fondo sutil aquí si lo deseas */}
        {/* <img src="/path/to/image.jpg" className="absolute w-full h-full object-cover opacity-20" /> */}
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Noticias y Eventos
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Mantente al día con las últimas novedades y acontecimientos de nuestra escuela.
          </p>
        </div>
      </header>

      {/* 2. Cuerpo Principal con Layout Mejorado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          
          {/* 3. Menú Lateral (SideMenu) en una Columna `<aside>` */}
          <aside className="lg:w-1/4 mb-12 lg:mb-0">
            {/* El 'sticky top-24' lo fija en su lugar al hacer scroll */}
            <div className="sticky top-24">
              <SideMenu
                title="Secciones" // Un título más genérico
                menuItems={menuItems}
                activeMenu={activeMenu}
              />
            </div>
          </aside>
          
          {/* 4. Contenido Principal en una Columna `<main>` */}
          <main className="lg:w-3/4">

            {/* --- Sección de Noticias --- */}
            <section id="noticias" className="mb-24">
              {/* 5. Encabezado de Sección Moderno */}
              <div className="flex justify-between items-baseline mb-8 pb-3 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900">Últimas Noticias</h2>
                <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  Ver archivo →
                </a>
              </div>

              {/* Grid de Noticias con más espaciado */}
              <div className="grid grid-cols-1 gap-12">
                {cardsData.map((card, index) => (
                  <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    date={card.date}
                    content={card.content}
                  />
                ))}
              </div>
            </section>

            {/* --- Sección de Próximos Eventos --- */}
            <section id="proximos-eventos">
               {/* Encabezado de Sección con el mismo estilo */}
              <div className="flex justify-between items-baseline mb-8 pb-3 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900">Próximos Eventos</h2>
                <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  Ver calendario completo →
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Asumiendo 3 eventos de ejemplo */}
                {[...Array(3)].map((_, index) => (
                  <div key={index}>
                    <MiniCard
                      title="Defensa de tesis"
                      date={5}
                      day="Martes"
                      month="Diciembre"
                      hour="2:00 pm"
                      content="Este es el contenido del artículo 1..."
                    />
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;