import React, { createContext, useContext, useState } from 'react';
import { defaultLanguage, supportedLanguages } from '../data/menuData';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

  const switchLanguage = (language) => {
    if (supportedLanguages.includes(language)) {
      setCurrentLanguage(language);
    }
  };

  const getText = (textObject) => {
    if (typeof textObject === 'string') return textObject;
    return textObject[currentLanguage] || textObject[defaultLanguage] || '';
  };

  const value = {
    currentLanguage,
    switchLanguage,
    getText,
    supportedLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
