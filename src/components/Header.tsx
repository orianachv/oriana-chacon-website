import React, { useState } from 'react';
import github from '../icons/github.png'
import linkedin from '../icons/linkedin.png'
import gmail from '../icons/gmail-dos.png'
import close from '../icons/close.png'
import menu from '../icons/menu.png'


const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/oriana-chacon-vivas-0823b7100/',
  github: 'https://github.com/orianachv',
  gmail: 'mailto:chacon.oriana.19@gmail.com'
};

const HeaderLinks: React.FC<{ cvUrl: string; onLinkClick: () => void }> = ({ cvUrl, onLinkClick }) => (
  <div className="flex flex-col items-center space-y-2 md:space-y-0 md:space-x-4">
    <a href="#about" onClick={onLinkClick} className="text-white hover:text-gray-200 transition duration-150 ease-in-out">About</a>
    <a href="#experience" onClick={onLinkClick} className="text-white hover:text-gray-200 transition duration-150 ease-in-out">Experience</a>
    <a href="#skills" onClick={onLinkClick} className="text-white hover:text-gray-200 transition duration-150 ease-in-out">Skills</a>
    <a href="#contact" onClick={onLinkClick} className="text-white hover:text-gray-200 transition duration-150 ease-in-out">Contact</a>
    <a href={cvUrl} download="Oriana_Chacon_Resume.pdf" onClick={onLinkClick} className="text-white hover:text-gray-200 transition duration-150 ease-in-out">Resume</a>
  </div>
);

const SocialLinks: React.FC = () => (
  <div className='flex flex-row gap-3 justify-center mt-8'>
    <a href={SOCIAL_LINKS.linkedin}>
      <img alt='social-media' src={linkedin} className='w-6 h-6' />

    </a>
    <a href={SOCIAL_LINKS.github}>
      <img alt='social-media' src={github} className='w-6 h-6' />

    </a>
    <a href={SOCIAL_LINKS.gmail}>
      <img alt='social-media' src={gmail} className='w-6 h-6' />
    </a>
  </div>
)

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cvUrl = 'https://github.com/orianachv/resume/raw/main/CV%20ENGLISH%20ORIANA%20CHACO%CC%81N%20%20(1).pdf';

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="py-4 flex flex-col md:flex-row">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-col justify-between w-full">
        <h1 className="text-white text-2xl font-bold md:text-3xl md:mb-8">Oriana Chacon Vivas</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
          <img src={isMenuOpen ? close : menu} alt="Menu" className="w-6 h-6" />
        </button>

        <div className="hidden md:block ">
          <HeaderLinks cvUrl={cvUrl} onLinkClick={() => { }} />

          <SocialLinks />
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden px-8 py-4">
          <HeaderLinks cvUrl={cvUrl} onLinkClick={handleLinkClick} />
          <SocialLinks />
        </div>
      )}
    </header>
  );
};

export default Header;
