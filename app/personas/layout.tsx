const PeopleLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full">
      {/* TODO: component de header */}
      <header className="flex h-[125px] w-full bg-slate-300">
        <h1 className="m-auto text-3xl font-bold">Personas</h1>
      </header>
      {children}
    </div>
  );
};

export default PeopleLayout;
