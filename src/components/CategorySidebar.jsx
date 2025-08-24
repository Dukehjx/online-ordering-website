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
    <div className="w-full lg:w-64 bg-white border-r border-gray-200 lg:min-h-screen">
      <div className="sticky top-0 bg-white">
        <div className="p-4 border-b border-gray-100">
          <h2 className={`font-semibold text-gray-900 text-lg ${getLanguageClass()}`}>
            {currentLanguage === 'zh' ? '分类' : currentLanguage === 'th' ? 'หมวดหมู่' : 'Categories'}
          </h2>
        </div>
        
        {/* Mobile: Horizontal scroll */}
        <div className="lg:hidden overflow-x-auto">
          <div className="flex space-x-2 p-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${getLanguageClass()} ${
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

        {/* Desktop: Vertical list */}
        <div className="hidden lg:block">
          <nav className="py-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`w-full text-left menu-category-item ${getLanguageClass()} ${
                  activeCategory === category.id ? 'active' : ''
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
