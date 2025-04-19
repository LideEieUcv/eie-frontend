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
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col justify-center items-center absolute bottom-0 w-full h-min">
            <div className='container mx-auto flex-row md:flex-row justify-between px-4 hidden md:block'>
                <div className="flex flex-row justify-between gap-x-14">
                    <div className="flex flex-col items-start">
                        <h3 className="text-sm font-bold">Departamento de ingeniería eléctrica UCV</h3>
                        <p className="text-xs">Resumen de información relevante.</p>
                    </div>
                    <div className="flex flex-col md:flex-col gap-2">
                        <a href="#" className="text-xs hover:text-gray-300">Pregrado</a>
                        <a href="#" className="text-xs hover:text-gray-300">Posgrado</a>
                        <a href="#" className="text-xs hover:text-gray-300">Contacto</a>
                    </div>
                    <div className="flex flex-row gap-x-5">
                        <a href="#" className="text-blue-400 hover:text-blue-800">
                            <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-800">
                            <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-800">
                            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Seccion 2: Linea divisoria */}
                <div className="border-t border-white w-full my-4"></div>

                {/* Seccion 3: Logos */}
                <div className=" flex flex-row gap-4 items-center justify-between w-full">
                    <div className="flex flex-col items-center">
                        <a href="/" className="flex items-center">
                            <img
                                src="ruta/a/tu/logo.png"
                                alt="Logo UCV"
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="/" className="flex items-center">
                            <img
                                src="ruta/a/tu/logo.png"
                                alt="Logo UCV"
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="/" className="flex items-center">
                            <img
                                src="ruta/a/tu/logo.png"
                                alt="Logo UCV"
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className='container mx-auto flex-row block md:hidden'>
                <div className="border-t border-white w-full my-4"></div>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col py-4 gap-y-3 items-start text-center'>
                        <a href="#" className="text-sm hover:text-gray-300">Pregrado</a>
                        <a href="#" className="text-sm hover:text-gray-300">Posgrado</a>
                        <a href="#" className="text-sm hover:text-gray-300">Contacto</a>
                    </div>
                    <div className='flex flex-row gap-x-14 items-center'>
                        <a href="/" className="text-blue-600 hover:text-blue-800">
                            <FontAwesomeIcon icon={faFacebookF} className="w-9 h-9" />
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-800">
                            <FontAwesomeIcon icon={faLinkedinIn} className="w-9 h-9" />
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-800">
                            <FontAwesomeIcon icon={faTwitter} className="w-9 h-9" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
    };

    export default Footer;