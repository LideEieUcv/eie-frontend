import React from 'react';

interface MenuItem {
  label: string;
  href: string;
}

// Agrega la prop title aquí
interface SideMenuProps {
  title?: string;       // Opcional (puedes quitar el ? si es obligatorio)
  menuItems: MenuItem[];
  activeMenu: string;
  onItemClick?: (label: string) => void;  // Hice esta opcional por si no la usas
}

const SideMenu: React.FC<SideMenuProps> = ({ 
  title, 
  menuItems, 
  activeMenu, 
  onItemClick 
}) => {
  return (
    <div className="w-64 h-full bg-transparent text-black p-4">
      {/* Agrega el título si existe */}
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onItemClick?.(item.label); // Usamos optional chaining por si onItemClick es undefined
              }}
              className={`block px-4 py-2 rounded-lg transition-colors duration-300 
                ${activeMenu === item.label ? 'bg-white/10 text-black font-bold' : 'text-black'} 
                hover:text-gray-500`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;