import React from 'react';

interface MenuItem {
  label: string;
  href: string;
}

interface SideMenuProps {
  menuItems: MenuItem[];
  activeMenu: string;
  onItemClick: (label: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ menuItems, activeMenu, onItemClick }) => {
  return (
    <div className="w-64 h-full bg-transparent text-black p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={() => onItemClick(item.label)}
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
