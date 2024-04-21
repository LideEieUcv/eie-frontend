import TitleSection from '../components/title-section';

const PeopleLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full ">
      {/* TODO: component de header */}
      <TitleSection>Personas</TitleSection>
      {children}
    </div>
  );
};

export default PeopleLayout;
