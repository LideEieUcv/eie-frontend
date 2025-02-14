import React from 'react';

interface SideMenuProps {
  title: string;
  menuItems: { label: string; href: string }[];
  activeMenu: string;
}

const SideMenu: React.FC<SideMenuProps> = ({ title, menuItems, activeMenu }) => {
  return (
    <nav className="hidden lg:block w-64 p-4 sticky top-4 h-fit ml-20">
      <h2 className="font-bold text-lg mb-4">{title}</h2>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className={`block text-gray-700 hover:text-blue-500 transition-colors duration-200 ${
                activeMenu === item.label ? 'font-bold text-blue-500' : ''
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;