import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const SwitchButton: React.FC = () => {
  // Estado para manejar el idioma actual, puedes poner 'es' para español, 'en' para inglés, etc.
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };
  useEffect(()=>{
    i18n.changeLanguage(language);
  },[i18n, language])

  const sliderClass = language === 'en' ? 'translate-x-0' : 'translate-x-full';

  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-12 h-6 flex items-center bg-gray-300 rounded-full p-0.5 cursor-pointer" onClick={toggleLanguage}>
        {/* Deslizador del botón */}
        <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition duration-300 ease-in-out ${sliderClass}`}></div>
      </div>
      <span className="ml-4 text-lg text-gray-400">{language.toUpperCase()}</span>
    </div>
  );
};

export default SwitchButton;
