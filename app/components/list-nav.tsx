const NAV_ITEMS = [
  {
    label: 'Profesores',
  },
  {
    label: 'Egresados',
  },
  {
    label: 'Administrativo',
  },
  {
    label: 'Administrativo 2',
  },
];

const ListNavigation = () => {
  return (
    <ul className="flex h-fit flex-col border-r border-black pb-2">
      {NAV_ITEMS.map((item) => (
        <li className="cursor-pointer px-2 py-2 hover:bg-slate-100" id={`menu-item-${item.label}`}>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default ListNavigation;
