import TitleSection from '../components/title-section';

const PeopleLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full pb-4">
      <TitleSection>Personas</TitleSection>
      {children}
    </div>
  );
};

export default PeopleLayout;
