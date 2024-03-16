import React, { useState } from 'react';
import close from '../icons/close.png';
import menu from '../icons/menu.png';
import SwitchButton from './SwitchButton';
import { useTranslation } from 'react-i18next';


const Header: React.FC = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-gray-400 py-4 md:flex md:justify-between md:items-center">
            <div className='flex justify-end px-4'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
                    <img src={isMenuOpen ? close : menu} alt="Menu" className="w-6 h-6" />
                </button>
            </div>

            <nav className={`md:flex flex-col md:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}>
                <a href="#about" className="block px-4 py-2  hover:text-teal-400 hover:bg-gray-700 hover:rounded-md  ">{t('header.about')}</a>
                <a href="#experience" className="block px-4 py-2  hover:text-teal-400 hover:bg-gray-700 hover:rounded-md">{t('header.experience')}</a>
                <a href="#skills" className="block px-4 py-2  hover:text-teal-400 hover:bg-gray-700 hover:rounded-md">{t('header.skills')}</a>
                <a href="#contact" className="block px-4 py-2  hover:text-teal-400 hover:bg-gray-700 hover:rounded-md">{t('header.contact')}</a>
               <SwitchButton/>
            </nav>

        </header>
    );
};

export default Header;
