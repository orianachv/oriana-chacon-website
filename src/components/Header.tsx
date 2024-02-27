import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cvUrl = 'https://github.com/orianachv/resume/raw/main/OrianaChaconResume.pdf';

    return (
        <header className="bg-gradient-to-r from-teal-400 to-blue-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-white text-2xl font-bold md:text-3xl">
                  Oriana Chacon Vivas
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#about" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-500 transition duration-150 ease-in-out">
                    About
                  </a>
                  <a href="#experience" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-500 transition duration-150 ease-in-out">
                    Experience
                  </a>
                  <a href="#skills" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-500 transition duration-150 ease-in-out">
                    Skills
                  </a>
                  <a href="#contact" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-500 transition duration-150 ease-in-out">
                    Contact
                  </a>
                  <a href="/path/to/resume.pdf" download="Oriana_Chacon_Resume.pdf" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-500 transition duration-150 ease-in-out">
                    Resume
                  </a>
                </div>
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="bg-teal-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-500 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  {!isMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
    
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-500 transition duration-150 ease-in-out">
                About
              </a>
              <a href="#experience" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-500 transition duration-150 ease-in-out">
                Experience
              </a>
              <a href="#skills" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-500 transition duration-150 ease-in-out">
                Skills
              </a>
              <a href="#contact" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-500 transition duration-150 ease-in-out">
                Contact
              </a>
              <a href={cvUrl} download="Oriana_Chacon_Resume.pdf" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-500 transition duration-150 ease-in-out">
                Resume
              </a>
            </div>
          </div>
        </header>
      );
};

export default Header;
