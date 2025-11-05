import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage, supportedLanguages } = useLanguage();

  const languageNames = {
    en: 'EN',
    th: 'TH',
    zh: 'CN',
    ko: 'KO',
    ja: 'JP'
  };

  const fullLanguageNames = {
    en: 'English',
    th: 'ไทย',
    zh: '中文',
    ko: '한국어',
    ja: '日本語'
  };

  return (
    <div className="flex space-x-0.5 sm:space-x-1 bg-white rounded-md sm:rounded-lg shadow-sm border border-gray-200 p-0.5 sm:p-1">
      {supportedLanguages.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          className={`px-1.5 sm:px-2 lg:px-3 py-1 text-xs sm:text-sm font-medium rounded-sm sm:rounded-md transition-all duration-200 ${
            currentLanguage === lang
              ? 'bg-orange-500 text-white shadow-sm'
              : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
          } ${lang === 'th' ? 'font-thai' : lang === 'zh' ? 'font-chinese' : lang === 'ko' ? 'font-korean' : lang === 'ja' ? 'font-japanese' : ''}`}
          title={fullLanguageNames[lang]}
        >
          <span className="block sm:hidden">{languageNames[lang]}</span>
          <span className="hidden sm:block lg:hidden">{languageNames[lang]}</span>
          <span className="hidden lg:block">{fullLanguageNames[lang]}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
