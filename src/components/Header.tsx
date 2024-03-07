import React, { useState } from 'react';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import gmail from '../icons/gmail-dos.png';
import close from '../icons/close.png';
import menu from '../icons/menu.png';

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/oriana-chacon-vivas-0823b7100/',
  github: 'https://github.com/orianachv',
  gmail: 'mailto:chacon.oriana.19@gmail.com'
};

const HeaderLinks: React.FC<{ cvUrl: string; onLinkClick: (section: string) => void; currentSection: string }> = ({ cvUrl, onLinkClick, currentSection }) => (
  <nav className="flex flex-col items-start space-y-2">
    <a href="#about" onClick={() => onLinkClick('about')} className={`text-white transition duration-150 ease-in-out ${currentSection === 'about' ? 'font-bold' : 'hover:text-gray-200'}`}>About</a>
    <a href="#experience" onClick={() => onLinkClick('experience')} className={`text-white transition duration-150 ease-in-out ${currentSection === 'experience' ? 'font-bold' : 'hover:text-gray-200'}`}>Experience</a>
    <a href="#skills" onClick={() => onLinkClick('skills')} className={`text-white transition duration-150 ease-in-out ${currentSection === 'skills' ? 'font-bold' : 'hover:text-gray-200'}`}>Skills</a>
    <a href="#contact" onClick={() => onLinkClick('contact')} className={`text-white transition duration-150 ease-in-out ${currentSection === 'contact' ? 'font-bold' : 'hover:text-gray-200'}`}>Contact</a>
    <a href={cvUrl} download="Oriana_Chacon_Resume.pdf" onClick={() => onLinkClick('resume')} className={`text-white transition duration-150 ease-in-out ${currentSection === 'resume' ? 'font-bold' : 'hover:text-gray-200'}`}>Resume</a>
  </nav>
);

const SocialLinks: React.FC = () => (
  <div className="flex justify-center space-x-4 mt-4">
    <a href={SOCIAL_LINKS.linkedin}><img alt="LinkedIn" src={linkedin} className="w-6 h-6" /></a>
    <a href={SOCIAL_LINKS.github}><img alt="GitHub" src={github} className="w-6 h-6" /></a>
    <a href={SOCIAL_LINKS.gmail}><img alt="Gmail" src={gmail} className="w-6 h-6" /></a>
  </div>
);
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('about');
  const cvUrl = 'https://github.com/orianachv/resume/raw/main/CV%20ENGLISH%20ORIANA%20CHACO%CC%81N%20%20(1).pdf';

  const handleLinkClick = (section: string) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white p-4 md:flex md:flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Oriana Chacon Vivas</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
          <img src={isMenuOpen ? close : menu} alt="Menu" className="w-6 h-6" />
        </button>
      </div>
      <div className={`md:flex md:flex-col gap-12 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="p-4 md:pb-0">
          <HeaderLinks cvUrl={cvUrl} onLinkClick={handleLinkClick} currentSection={currentSection} />
        </div>
        <SocialLinks />
      </div>
    </header>
  );
};


export default Header;
