import React, { Children } from 'react';

interface TitleSectionProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title?: string;
  children?: React.ReactNode;
}

const TitleSection = ({
  title,
  children,
  className = 'm-auto text-4xl font-bold uppercase',
  ...props
}: TitleSectionProps) => {
  return (
    <header className="flex h-[125px] w-full bg-slate-300">
      <h1 className={className} {...props}>
        {title && title}
        {children && children}
      </h1>
    </header>
  );
};

export default TitleSection;
