import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const MenuItem = ({ item, onCustomize }) => {
  const { getText, currentLanguage } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

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

  const formatPrice = (price) => {
    return `฿${price}`;
  };

  return (
    <div className="menu-item-card p-3 sm:p-4 mb-3 sm:mb-4">
      <div className="flex gap-3 sm:gap-4">
        {/* Product Image */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
          {!imageError ? (
            <img
              src={item.image}
              alt={getText(item.name)}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-1 sm:mb-2">
            <h3 className={`font-semibold text-gray-900 text-sm sm:text-base lg:text-lg leading-tight ${getLanguageClass()}`}>
              {getText(item.name)}
            </h3>
            {item.tags && item.tags.includes('popular') && (
              <span className="bg-orange-100 text-orange-600 text-xs px-1.5 py-0.5 rounded-full ml-2 flex-shrink-0 font-medium">
                {currentLanguage === 'zh' ? '热门' : currentLanguage === 'th' ? 'ยอดนิยม' : 'Popular'}
              </span>
            )}
          </div>

          <p className={`text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed line-clamp-2 ${getLanguageClass()}`}>
            {getText(item.description)}
          </p>

          {/* Tags - Hidden on mobile to save space */}
          {item.tags && item.tags.length > 0 && (
            <div className="hidden sm:flex flex-wrap gap-1 mb-2 sm:mb-3">
              {item.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Price and Action */}
          <div className="flex justify-between items-center">
            <div className="text-orange-600 text-base sm:text-lg lg:text-xl font-bold">
              {formatPrice(item.price)}
            </div>
            <button 
              onClick={() => onCustomize(item)}
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-medium transition-colors duration-200"
            >
              {currentLanguage === 'zh' ? '选规格' : currentLanguage === 'th' ? 'เลือกรูปแบบ' : 'Customize'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
