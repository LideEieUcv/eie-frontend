import React from 'react';

interface MenuItem {
  label: string;
  href: string;
}

interface SideMenuProps {
  title?: string;
  menuItems: MenuItem[];
  activeMenu: string;
  onItemClick?: (label: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ 
  title, 
  menuItems, 
  activeMenu, 
  onItemClick 
}) => {
  
  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: MenuItem) => {
    e.preventDefault(); // Evitamos el salto brusco por defecto
    
    // 1. Ejecutamos la lógica de cambio de estado (activeMenu)
    onItemClick?.(item.label);

    // 2. Buscamos el elemento por ID y hacemos scroll manual
    const targetId = item.href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
      });
    }
  };

  return (
    <div className="w-64 h-full bg-transparent text-black p-4">
      {title && <h2 className="text-xl font-bold mb-4 border-b border-black/10 pb-2">{title}</h2>}
      
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(e) => handleItemClick(e, item)}
              className={`block px-4 py-2 rounded-lg transition-all duration-300 
                ${activeMenu === item.label 
                  ? 'bg-gray-100 text-[#1F366A] font-bold border-l-4 border-[#1F366A]' 
                  : 'text-gray-700 font-medium'} 
                hover:bg-gray-50 hover:text-[#1F366A]`}
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