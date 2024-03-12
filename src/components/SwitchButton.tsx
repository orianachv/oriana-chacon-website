import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SwitchButton: React.FC = () => {
  // Estado para manejar el idioma actual, puedes poner 'es' para español, 'en' para inglés, etc.
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center justify-center">
      {/* Botón de cambio de idioma */}
      <div
        className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          onClick={toggleLanguage}
          checked={language === 'es'}
          readOnly
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <label htmlFor="toggle" className="text-lg text-gray-400 pr-4">
        {language === 'en' ? 'EN' : 'ES'}
      </label>
    </div>
  );
};

export default SwitchButton;
