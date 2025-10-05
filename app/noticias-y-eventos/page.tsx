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
      {/* Título principal */}
      <div className='min-h-96 bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-black text-3xl lg:text-4xl font-extrabold text-center px-4 mb-5'>
        <h1>Noticias y Eventos</h1>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* SideMenu en el lateral izquierdo (oculto en pantallas pequeñas) */}
        <div className="hidden lg:block w-64 flex-shrink-0 sticky top-20 self-start">
          <SideMenu title="Noticias y eventos" menuItems={menuItems} activeMenu={activeMenu} />
        </div>

        {/* Contenedor de las tarjetas y eventos */}
        <div className="flex-grow lg:pl-8 px-4">
          {/* Sección de Noticias */}
          <div id="noticias" className="flex flex-col lg:flex-row lg:space-x-5 mb-5 justify-center gap-x-96 items-center">
            <h1 className="font-extrabold text-2xl lg:text-3xl mb-4 lg:mb-0">Últimas noticias</h1>
            <a href="/noticias-y-eventos" className="font-bold text-md text-black hover:text-gray-500 transition">
              Más noticias<span className="ml-4">→</span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-5">
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

          {/* Sección de Próximos Eventos */}
          <div id="proximos-eventos" className="mt-10 lg:mt-20">
            <div className="flex flex-col lg:flex-row lg:space-x-80 mb-5 justify-center items-center">
              <h1 className="font-extrabold text-2xl lg:text-3xl mb-4 lg:mb-0">Próximos eventos</h1>
              <a
                href="/noticias-y-eventos"
                className="font-bold text-md text-black hover:text-gray-500 transition"
              >
                Más eventos<span className="ml-4">→</span>
              </a>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-2/3 max-w-7xl p-4">
                <div className="flex justify-center">
                  <MiniCard
                    title="Defensa de tesis"
                    date={5}
                    day="Martes"
                    month="Diciembre"
                    hour="2:00 pm"
                    content="Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada."
                  />
                </div>
                <div className="flex justify-center">
                  <MiniCard
                    title="Defensa de tesis"
                    date={5}
                    day="Martes"
                    month="Diciembre"
                    hour="2:00 pm"
                    content="Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada."
                  />
                </div>
                <div className="flex justify-center">
                  <MiniCard
                    title="Defensa de tesis"
                    date={5}
                    day="Martes"
                    month="Diciembre"
                    hour="2:00 pm"
                    content="Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default App;