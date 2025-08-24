import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage, supportedLanguages } = useLanguage();

  const languageNames = {
    en: 'English',
    th: 'ไทย',
    zh: '中文'
  };

  return (
    <div className="flex space-x-1 bg-white rounded-lg shadow-sm border border-gray-200 p-1">
      {supportedLanguages.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            currentLanguage === lang
              ? 'bg-orange-500 text-white shadow-sm'
              : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
          } ${lang === 'th' ? 'font-thai' : lang === 'zh' ? 'font-chinese' : ''}`}
        >
          {languageNames[lang]}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
