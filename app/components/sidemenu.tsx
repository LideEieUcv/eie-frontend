import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Usaremos framer-motion para una animación fluida

interface SubMenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[]; // Propiedad opcional para submenús
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
  // Estado para controlar qué menú está expandido
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const handleToggleExpand = (e: React.MouseEvent, label: string) => {
    e.stopPropagation(); // Evita que el click dispare el scroll del padre si no quieres
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: MenuItem | SubMenuItem) => {
    if (item.href.startsWith('#')) {
      e.preventDefault();
      onItemClick?.(item.label);
      const targetId = item.href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="w-64 h-full bg-transparent text-black p-4">
      {title && <h2 className="text-xl font-bold mb-4 border-b border-black/10 pb-2 text-[#1F366A]">{title}</h2>}
      
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const isExpanded = expandedMenu === item.label;
          const hasSubItems = item.subItems && item.subItems.length > 0;

          return (
            <li key={item.label} className="flex flex-col">
              <div className="flex items-center group">
                <a
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`flex-grow px-4 py-2 rounded-lg transition-all duration-300 flex justify-between items-center
                    ${activeMenu === item.label 
                      ? 'bg-gray-100 text-[#1F366A] font-bold border-l-4 border-[#1F366A]' 
                      : 'text-gray-700 font-medium'} 
                    hover:bg-gray-50 hover:text-[#1F366A]`}
                >
                  {item.label}
                </a>

                {/* Botón de "Más" solo si tiene subItems */}
                {hasSubItems && (
                  <button
                    onClick={(e) => handleToggleExpand(e, item.label)}
                    className="p-2 text-gray-500 hover:text-[#1F366A] transition-transform duration-300"
                    style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    <span className="text-xl font-light">{isExpanded ? '×' : '+'}</span>
                  </button>
                )}
              </div>

              {/* Submenú Animado */}
              <AnimatePresence>
                {hasSubItems && isExpanded && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-6 mt-1 space-y-1 border-l border-gray-200 ml-4"
                  >
                    {item.subItems!.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          onClick={(e) => handleItemClick(e, sub)}
                          className="block px-4 py-1.5 text-sm text-gray-600 hover:text-[#1F366A] hover:bg-gray-50 rounded-md transition-colors"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;