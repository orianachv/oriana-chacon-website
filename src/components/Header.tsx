import React, { useState } from 'react';
import close from '../icons/close.png';
import menu from '../icons/menu.png';


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState('english'); // Establece el idioma inicial, por ejemplo, 'english'

    const toggleLanguage = () => {
        const newLanguage = language === 'english' ? 'spanish' : 'english';
        setLanguage(newLanguage);
        // Aquí puedes agregar lógica para cambiar el idioma de tu aplicación
    };

    return (
        <header className="bg-gray-900 text-gray-400 py-4 md:flex md:justify-between md:items-center">
            <div className='flex justify-end px-4'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
                    <img src={isMenuOpen ? close : menu} alt="Menu" className="w-6 h-6" />
                </button>
            </div>

            <nav className={`md:flex flex-col md:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}>
                <a href="#about" className="block px-4 py-2  hover:text-teal-400 hover:bg-gray-700 hover:rounded-md  ">ABOUT</a>
                <a href="#experience" className="block px-4 py-2  hover:text-teal-400 hover:bg-gray-700 hover:rounded-md">EXPERIENCE</a>
                <a href="#skills" className="block px-4 py-2  hover:text-teal-400 hover:bg-gray-700 hover:rounded-md">SKILSS</a>
                <a href="#contact" className="block px-4 py-2  hover:text-teal-400 hover:bg-gray-700 hover:rounded-md">CONTACT</a>
                <button onClick={toggleLanguage} className="block px-4 py-2  hover:text-teal-400 hover:bg-gray-700 hover:rounded-md">
                    {language === 'english' ? 'Español' : 'English'} {/* Texto del botón para cambiar el idioma */}
                </button>
            </nav>

        </header>
    );
};

export default Header;
