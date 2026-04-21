// En app/components/footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'; // Importa el componente Image
import Link from 'next/link';   // Importa el componente Link

const Footer: React.FC = () => {
  const socialLinks = [
    { href: "#", icon: faFacebookF },
    { href: "#", icon: faLinkedinIn },
    { href: "#", icon: faTwitter },
  ];

  const mainLinks = [
    { href: "/informacion-academica", label: "Pregrado" },
    { href: "/informacion-academica/#postgrado", label: "Postgrado" },
  ];
  
  const resourceLinks = [
    { href: "/noticias-y-eventos", label: "Noticias" },
    { href: "/laboratorios", label: "Laboratorios" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Sección Principal del Footer */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* 1. Sección de Logo e Información */}
          <div className="flex flex-wrap items-center gap-4 md:w-1/3">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo-v.svg" // Asegúrate que esta es la ruta a tu logo
                alt="Logo Escuela de Ingeniería Eléctrica"
                width={200}
                height={70}
                className="h-14 w-auto"
              />
            </Link>
            <Link href="https://www.ing.ucv.ve/" className="inline-block">
              <Image 
                src="/logo_FIUCV_remasterizado.svg" // Asegúrate que esta es la ruta a tu logo
                alt="Logo Facultad de Ingenieria"
                width={220}
                height={70}
                className="h-14 w-auto"
              />
            </Link>
            <Link href="http://www.ucv.ve/" className="inline-block">
              <Image 
                src="/ucv_logo.svg" // Asegúrate que esta es la ruta a tu logo
                alt="Logo UCV"
                width={200}
                height={70}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm">
              Ciudad Universitaria de Caracas<br></br>Los Chaguaramos, Caracas, Venezuela<br></br>Código Postal, 1050
            </p>
          </div>

          {/* 2. Sección de Enlaces */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 md:w-1/2">
              <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Academia</h3>
                  <ul className="space-y-2">
                      {mainLinks.map(link => (
                          <li key={link.label}>
                              <Link href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</Link>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Recursos</h3>
                  <ul className="space-y-2">
                      {resourceLinks.map(link => (
                          <li key={link.label}>
                              <Link href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</Link>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>

        </div>

        {/* Créditos Discretos */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Desarrollado por @jose803196 </span>
          <div className="flex gap-2">
            <a 
              href="https://github.com/jose803196" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              title="GitHub del desarrollador"
            >
              <FontAwesomeIcon icon={faGithub} className="h-3 w-3" />
            </a>
            <a 
              href="https://linkedin.com/in/tu-usuario" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              title="LinkedIn del desarrollador"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="h-3 w-3" />
            </a>
          </div>
          <span className="mx-1">|</span>
          <span>Prof. @Alejandroxh14</span>
          <div className="flex gap-2">
            <a 
              href="https://github.com/Alejandroxh14" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              title="GitHub del desarrollador"
            >
              <FontAwesomeIcon icon={faGithub} className="h-3 w-3" />
            </a>
            <a 
              href="https://linkedin.com/in/alejandroherrerar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              title="LinkedIn del desarrollador"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Sección Inferior: Copyright y Redes Sociales */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <p className="text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Escuela de Ing. Eléctrica, UCV. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">{link.icon.iconName}</span>
                <FontAwesomeIcon icon={link.icon} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;