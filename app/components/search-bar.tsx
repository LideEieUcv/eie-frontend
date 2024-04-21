import React from 'react';

// TODO: falta integrar funcionalidades
export default function SearchBar() {
  return (
    <div className="flex items-center border border-black bg-white py-1 pl-2 pr-1">
      <input
        className="flex-1 border-none bg-transparent text-gray-900 focus-visible:outline-none"
        placeholder="Buscar"
        type="text"
      />
      <SearchIcon className="cursor-pointer p-1 text-gray-500 hover:bg-slate-200" />
    </div>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
