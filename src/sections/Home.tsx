import React from 'react';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import gmail from '../icons/gmail-dos.png';
import istagram from '../icons/instagram.png'
import { useTranslation } from 'react-i18next';

const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/oriana-chacon-vivas-0823b7100/',
    github: 'https://github.com/orianachv',
    gmail: 'mailto:chacon.oriana.19@gmail.com',
    istagram: 'https://www.instagram.com/codingwithori'
};

const SocialLinks: React.FC = () => (
    <div className="flex justify-center space-x-4 mt-4">
      <a href={SOCIAL_LINKS.linkedin}><img alt="LinkedIn" src={linkedin} className="w-8 h-8" /></a>
      <a href={SOCIAL_LINKS.github}><img alt="GitHub" src={github} className="w-8 h-8" /></a>
      <a href={SOCIAL_LINKS.gmail}><img alt="Gmail" src={gmail} className="w-8 h-8" /></a>
      <a href={SOCIAL_LINKS.istagram}><img alt="Gmail" src={istagram} className="w-8 h-8" /></a>
    </div>
);

const Home: React.FC = () => {
  const cvUrl = 'https://github.com/orianachv/resume/raw/main/ORIANA-CHACON-RESUME.pdf';

  const { t } = useTranslation();

  return (
    <section className="bg-gray-900 text-gray-100 p-6 flex flex-col items-center h-[600px] justify-center relative">
      <h1 className="text-4xl font-bold mb-4 text-teal-400">{t('home.name')}</h1>
      <h2 className="text-xl font-bold mb-4">{t('home.developer')}</h2>
      <SocialLinks/>
      <a href={cvUrl} download="Oriana_Chacon_Vivas_CV.pdf" className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-full flex items-center hover:bg-gray-600 hover:text-teal-400 transition duration-300 ease-in-out cursor-pointer absolute bottom-10 center-10">
        <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16l-4-4h3V4h2v8h3l-4 4zm-6 2v2h12v-2H6z"></path></svg>
        Download CV
      </a>
    </section>
  );
};

export default Home;
