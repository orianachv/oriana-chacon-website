import React, { useState } from 'react';

// Componente para los enlaces del header, reutilizable
const HeaderLinks: React.FC<{ cvUrl: string; onLinkClick: () => void }> = ({ cvUrl, onLinkClick }) => (
    <div className="flex flex-col md:items-center space-y-2 md:space-y-0 md:space-x-4">
        <a href="#about" onClick={onLinkClick} className="text-white hover:text-gray-200 transition duration-150 ease-in-out">About</a>
        <a href="#experience" onClick={onLinkClick} className="text-white hover:text-gray-200 transition duration-150 ease-in-out">Experience</a>
        <a href="#skills" onClick={onLinkClick} className="text-white hover:text-gray-200 transition duration-150 ease-in-out">Skills</a>
        <a href="#contact" onClick={onLinkClick} className="text-white hover:text-gray-200 transition duration-150 ease-in-out">Contact</a>
        <a href={cvUrl} download="Oriana_Chacon_Resume.pdf" onClick={onLinkClick} className="text-white hover:text-gray-200 transition duration-150 ease-in-out">Resume</a>
    </div>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cvUrl = 'https://github.com/orianachv/resume/raw/main/OrianaChaconResume.pdf';

    // Función para manejar el cierre del menú en dispositivos móviles
    const handleLinkClick = () => setIsMenuOpen(false);

    return (
        <header className="py-4 flex flex-col md:flex-row">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-col justify-between w-full">
                <h1 className="text-white text-2xl font-bold md:text-3xl md:mb-8">Oriana Chacon Vivas</h1>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="md:hidden bg-teal-500 p-2 rounded-md text-white hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-500 focus:ring-white">
                    <svg className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    <svg className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="hidden md:block ">
                    <HeaderLinks cvUrl={cvUrl} onLinkClick={() => {}} />
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden px-8 py-4">
                    <HeaderLinks cvUrl={cvUrl} onLinkClick={handleLinkClick} />
                </div>
            )}
        </header>
    );
};

export default Header;
