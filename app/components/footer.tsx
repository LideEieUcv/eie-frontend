import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

    interface FacebookIconProps {}

    const FacebookIcon: React.FC<FacebookIconProps> = () => {
    return (
        <svg className="w-6 h-6 fill-current text-blue-600" viewBox="0 0 24 24">
        <path d="M9 19l-7-7 3-3 4 4 7-7z" />
        </svg>
    );
    };

    interface FooterProps {
        //anadir cualquier componente extra aqui al footer
    }

    const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer className="bg-gray-50 text-black p-4 flex flex-col justify-center items-center absolute bottom-0 w-full">
            {/* Seccion 1: Links */}

            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col items-start">
                    <h3 className="text-sm font-bold">Departamento de ingeniería eléctrica UCV</h3>
                    <p className="text-xs">Resumen de información relevante.</p>
                </div>
                <div className="flex flex-col items-center gap-2" style={{ marginLeft: '550px' }}>
                    <a href="#" className="text-xs hover:text-gray-300">Pregrado</a>
                    <a href="#" className="text-xs hover:text-gray-300">Postgrado</a>
                    <a href="#" className="text-xs hover:text-gray-300">Contacto</a>
                </div>
                <div className="flex flex-row gap-4 items-center justify-end w-full mr-5">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                        <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                        <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                        <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Seccion 2: Linea divisoria */}
            <div className="border-t border-gray-950 w-full my-4"></div>

            {/* Seccion 3: Logos */}
            <div className="flex flex-row gap-4 items-center justify-between w-full">
                <div className="flex flex-col items-center">
                <a href="/" className="text-gray-800 border border-black font-bold text-base">LOGO UCV</a>
                </div>
                <div className="flex flex-col items-center">
                <a href="/" className="text-gray-800 border border-black font-bold text-base">LOGO UCV ING.</a>
                </div>
                <div className="flex flex-col items-center">
                <a href="/" className="text-gray-800 border border-black font-bold text-base">LOGO UCV ELEC.</a>
                </div>
            </div>
        </footer>
    );
    };

    export default Footer;