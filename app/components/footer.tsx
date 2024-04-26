import React from 'react';

interface FooterProps {
  // Add any props you want to pass to the footer component here
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-center items-center w-full bottom-0 fixed">
      <p className="text-xs">Copyright &copy; {new Date().getFullYear()}</p>
      <a href="#" className="text-xs hover:text-gray-300 ml-4">Terms & Conditions</a>
      <a href="#" className="text-xs hover:text-gray-300 ml-4">Privacy Policy</a>
    </footer>
  );
};

export default Footer;
