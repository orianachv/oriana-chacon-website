import React from 'react';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import gmail from '../icons/gmail-dos.png';
import { useTranslation } from 'react-i18next';

const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/oriana-chacon-vivas-0823b7100/',
    github: 'https://github.com/orianachv',
    gmail: 'mailto:chacon.oriana.19@gmail.com'
  };
const SocialLinks: React.FC = () => (
    <div className="flex justify-center space-x-4 mt-4">
      <a href={SOCIAL_LINKS.linkedin}><img alt="LinkedIn" src={linkedin} className="w-8 h-8" /></a>
      <a href={SOCIAL_LINKS.github}><img alt="GitHub" src={github} className="w-8 h-8" /></a>
      <a href={SOCIAL_LINKS.gmail}><img alt="Gmail" src={gmail} className="w-8 h-8" /></a>
    </div>
  );

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-900 text-gray-100 p-6 flex flex-col items-center h-[600px] justify-center">
      <h1 className="text-4xl font-bold mb-4 text-teal-400">{t('home.name')}</h1>
      <h2 className="text-xl font-bold mb-4">{t('home.developer')}</h2>
      <SocialLinks/>
    </section>
  );
};

export default Home;
