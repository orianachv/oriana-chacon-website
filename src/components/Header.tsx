import React, { useState } from 'react';
import close from '../icons/close.png';
import menu from '../icons/menu.png';
import SwitchButton from './SwitchButton';


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState('english'); // Establece el idioma inicial, por ejemplo, 'english'

    const toggleLanguage = () => {
        const newLanguage = language === 'EN' ? 'ES' : 'EN';
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
                <a href="#skills" className="block px-4 py-2  hover:text-teal-400 hover:bg-gray-700 hover:rounded-md">SKILLS</a>
                <a href="#contact" className="block px-4 py-2  hover:text-teal-400 hover:bg-gray-700 hover:rounded-md">CONTACT</a>
               <SwitchButton/>
            </nav>

        </header>
    );
};

export default Header;
