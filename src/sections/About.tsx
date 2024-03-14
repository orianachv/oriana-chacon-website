import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="bg-gray-900 text-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
      <p className="mb-8 text-md leading-relaxed">
        {t('about.description_one')}
      </p>
      <p className=" mb-8 text-md leading-relaxed">
        {t('about.description_two')}
      </p>
      <p className="text-md leading-relaxed">
        {t('about.description_three')}
      </p> 
     
    </section>
  );
};

export default About;
