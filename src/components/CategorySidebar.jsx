import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CategorySidebar = ({ categories, activeCategory, onCategoryChange }) => {
  const { getText, currentLanguage } = useLanguage();

  const getLanguageClass = () => {
    switch (currentLanguage) {
      case 'th':
        return 'font-thai';
      case 'zh':
        return 'font-chinese';
      default:
        return '';
    }
  };

  return (
    <div className="w-full lg:w-44 bg-white border-r border-gray-200 lg:min-h-screen">
      <div className="sticky top-0 bg-white">
        {/* Mobile: Horizontal scroll (no header) */}
        <div className="lg:hidden overflow-x-auto border-b border-gray-100">
          <div className="flex space-x-2 p-2 sm:p-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`whitespace-nowrap px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 ${getLanguageClass()} ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {getText(category.name)}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Compact vertical list */}
        <div className="hidden lg:block">
          <div className="p-2 border-b border-gray-100">
            <h2 className={`font-medium text-gray-900 text-sm ${getLanguageClass()}`}>
              {currentLanguage === 'zh' ? '分类' : currentLanguage === 'th' ? 'หมวดหมู่' : 'Categories'}
            </h2>
          </div>
          <nav className="py-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-200 ${getLanguageClass()} ${
                  activeCategory === category.id 
                    ? 'bg-orange-50 text-orange-600 border-r-2 border-orange-500' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                }`}
              >
                {getText(category.name)}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
