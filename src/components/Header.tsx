import React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
    const cvUrl = 'https://github.com/orianachv/resume/raw/main/OrianaChaconResume.pdf';

    return (
        <header className="bg-gray-900 text-gray-100 h-full flex flex-col items-center justify-center p-8">

            <div>
                <h1 className="text-4xl font-bold text-teal-500">Oriana Chacon Vivas</h1>
                <p className="text-xl text-center">Front End Developer</p>
            </div>

            <nav className="flex flex-col space-y-4 mt-6 text-center">
                {/* Usar el componente Link de react-scroll */}
                <Link activeClass="text-teal-500" to="about" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-teal-500 transition duration-300">About me</Link>                <Link activeClass="text-teal-500" to="experience" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-teal-500 transition duration-300">Experience</Link>
                <Link activeClass="text-teal-500" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-teal-500 transition duration-300">Skills</Link>
                <Link activeClass="text-teal-500" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-teal-500 transition duration-300">Contact</Link>
                <a href={cvUrl} download="Oriana_Chacon_Vivas_CV.pdf" className="hover:text-teal-500 transition duration-300">
                    Download CV
                </a>
            </nav>
        </header>
    );
};

export default Header;
