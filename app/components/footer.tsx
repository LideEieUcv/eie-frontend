import React from 'react';

interface FooterProps {
  // Add any props you want to pass to the footer component here
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-gray-100 text-black p-4 flex flex-col justify-center items-center w-full bottom-0 fixed">
      {/* Section 1: Links */}
      <div className="flex flex-row gap-4 items-center justify-center w-full">
        <a href="#" className="text-xs hover:text-gray-300">Pregado</a>
        <a href="#" className="text-xs hover:text-gray-300">Postgrado</a>
        <a href="#" className="text-xs hover:text-gray-300">Contacto</a>
      </div>

      {/* Section 2: Divider */}
      <div className="border-t border-gray-700 w-full my-4"></div>

      {/* Section 3: Logos */}
      <div className="flex flex-row gap-4 items-center justify-between w-full">
        <div className="flex flex-col items-center">
          <a href="/" className="text-gray-800 border border-black font-bold text-md">LOGO UCV</a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/" className="text-gray-800 border border-black font-bold text-md">LOGO UCV ING.</a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/" className="text-gray-800 border border-black font-bold text-md">LOGO UCV ELEC.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;