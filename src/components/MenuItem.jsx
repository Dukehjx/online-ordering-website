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
    switch (currentLanguage) {
      case 'zh':
        return `¥${price}`;
      case 'th':
        return `฿${price}`;
      default:
        return `$${price}`;
    }
  };

  return (
    <div className="menu-item-card p-4 mb-4">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
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
          <div className="flex justify-between items-start mb-2">
            <h3 className={`font-semibold text-gray-900 text-base sm:text-lg leading-tight ${getLanguageClass()}`}>
              {getText(item.name)}
            </h3>
            {item.tags && item.tags.includes('popular') && (
              <span className="badge-new ml-2 flex-shrink-0">
                {currentLanguage === 'zh' ? '热门' : currentLanguage === 'th' ? 'ยอดนิยม' : 'Popular'}
              </span>
            )}
          </div>

          <p className={`text-gray-600 text-sm mb-3 leading-relaxed ${getLanguageClass()}`}>
            {getText(item.description)}
          </p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {item.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Price and Action */}
          <div className="flex justify-between items-center">
            <div className="price-tag text-lg sm:text-xl font-bold">
              {formatPrice(item.price)}
            </div>
            <button 
              onClick={() => onCustomize(item)}
              className="btn-primary text-sm px-4 py-2"
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
