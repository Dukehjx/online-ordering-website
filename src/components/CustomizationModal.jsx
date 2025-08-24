import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CustomizationModal = ({ item, isOpen, onClose }) => {
  const { getText, currentLanguage } = useLanguage();
  const [selectedOptions, setSelectedOptions] = useState({
    size: 'regular',
    iceLevel: 'normal-ice',
    sweetness: '50%',
    extras: []
  });

  if (!isOpen || !item) return null;

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

  const getOptionText = (option, type) => {
    const translations = {
      // Size options
      'regular': { en: 'Regular', th: 'ธรรมดา', zh: '标准杯' },
      'large': { en: 'Large (+$2)', th: 'ใหญ่ (+฿2)', zh: '大杯 (+¥2)' },
      
      // Ice level options
      'no-ice': { en: 'No Ice', th: 'ไม่ใส่น้ำแข็ง', zh: '去冰' },
      'less-ice': { en: 'Less Ice', th: 'น้ำแข็งน้อย', zh: '少冰' },
      'normal-ice': { en: 'Normal Ice', th: 'น้ำแข็งปกติ', zh: '正常冰' },
      'extra-ice': { en: 'Extra Ice', th: 'น้ำแข็งเยอะ', zh: '加冰' },
      
      // Sweetness options
      'no-sugar': { en: '0% Sweet', th: 'ไม่หวาน', zh: '无糖' },
      '25%': { en: '25% Sweet', th: 'หวานน้อย', zh: '25%糖' },
      '50%': { en: '50% Sweet', th: 'หวานปกติ', zh: '半糖' },
      '75%': { en: '75% Sweet', th: 'หวานมาก', zh: '75%糖' },
      '100%': { en: '100% Sweet', th: 'หวานเต็มที่', zh: '全糖' },
      
      // Extras
      'extra-oreo': { en: 'Extra Oreo (+$2)', th: 'โอริโอ้เพิ่ม (+฿2)', zh: '加奥利奥 (+¥2)' },
      'extra-jelly': { en: 'Extra Jelly (+$1)', th: 'วุ้นเพิ่ม (+฿1)', zh: '加果冻 (+¥1)' },
      'whipped-cream': { en: 'Whipped Cream (+$2)', th: 'วิปครีม (+฿2)', zh: '奶油 (+¥2)' }
    };
    
    return translations[option]?.[currentLanguage] || option;
  };

  const getSectionTitle = (section) => {
    const titles = {
      'size': { en: 'Size', th: 'ขนาด', zh: '杯型' },
      'iceLevel': { en: 'Ice Level', th: 'ระดับน้ำแข็ง', zh: '冰度' },
      'sweetness': { en: 'Sweetness', th: 'ความหวาน', zh: '甜度' },
      'extras': { en: 'Add-ons', th: 'เพิ่มเติม', zh: '附加配料' }
    };
    
    return titles[section]?.[currentLanguage] || section;
  };

  const handleOptionChange = (type, value) => {
    if (type === 'extras') {
      setSelectedOptions(prev => ({
        ...prev,
        extras: prev.extras.includes(value) 
          ? prev.extras.filter(e => e !== value)
          : [...prev.extras, value]
      }));
    } else {
      setSelectedOptions(prev => ({
        ...prev,
        [type]: value
      }));
    }
  };

  const calculateTotalPrice = () => {
    let total = item.price;
    
    // Add size premium
    if (selectedOptions.size === 'large') {
      total += 2;
    }
    
    // Add extras
    selectedOptions.extras.forEach(extra => {
      switch (extra) {
        case 'extra-oreo':
        case 'whipped-cream':
          total += 2;
          break;
        case 'extra-jelly':
          total += 1;
          break;
        default:
          break;
      }
    });
    
    return total;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className={`text-xl font-semibold text-gray-900 mb-1 ${getLanguageClass()}`}>
                {getText(item.name)}
              </h2>
              <p className={`text-gray-600 text-sm ${getLanguageClass()}`}>
                {getText(item.description)}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="ml-4 text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Customization Options */}
        <div className="p-4 space-y-6">
          {item.customization && (
            <>
              {/* Size Options */}
              {item.customization.size && (
                <div>
                  <h3 className={`font-semibold text-gray-900 mb-3 ${getLanguageClass()}`}>
                    {getSectionTitle('size')}
                  </h3>
                  <div className="space-y-2">
                    {item.customization.size.map((size) => (
                      <label key={size} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          value={size}
                          checked={selectedOptions.size === size}
                          onChange={(e) => handleOptionChange('size', e.target.value)}
                          className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                        />
                        <span className={`ml-3 text-gray-700 ${getLanguageClass()}`}>
                          {getOptionText(size, 'size')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Ice Level */}
              {item.customization.iceLevel && (
                <div>
                  <h3 className={`font-semibold text-gray-900 mb-3 ${getLanguageClass()}`}>
                    {getSectionTitle('iceLevel')}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {item.customization.iceLevel.map((level) => (
                      <label key={level} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="iceLevel"
                          value={level}
                          checked={selectedOptions.iceLevel === level}
                          onChange={(e) => handleOptionChange('iceLevel', e.target.value)}
                          className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                        />
                        <span className={`ml-2 text-sm text-gray-700 ${getLanguageClass()}`}>
                          {getOptionText(level, 'iceLevel')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Sweetness */}
              {item.customization.sweetness && (
                <div>
                  <h3 className={`font-semibold text-gray-900 mb-3 ${getLanguageClass()}`}>
                    {getSectionTitle('sweetness')}
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {item.customization.sweetness.map((sweet) => (
                      <label key={sweet} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="sweetness"
                          value={sweet}
                          checked={selectedOptions.sweetness === sweet}
                          onChange={(e) => handleOptionChange('sweetness', e.target.value)}
                          className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                        />
                        <span className={`ml-2 text-sm text-gray-700 ${getLanguageClass()}`}>
                          {getOptionText(sweet, 'sweetness')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Extras */}
              {item.customization.extras && (
                <div>
                  <h3 className={`font-semibold text-gray-900 mb-3 ${getLanguageClass()}`}>
                    {getSectionTitle('extras')}
                  </h3>
                  <div className="space-y-2">
                    {item.customization.extras.map((extra) => (
                      <label key={extra} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value={extra}
                          checked={selectedOptions.extras.includes(extra)}
                          onChange={(e) => handleOptionChange('extras', e.target.value)}
                          className="w-4 h-4 text-orange-500 focus:ring-orange-500 rounded"
                        />
                        <span className={`ml-3 text-gray-700 ${getLanguageClass()}`}>
                          {getOptionText(extra, 'extras')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Allergen Information */}
          {item.tags && item.tags.length > 0 && (
            <div>
              <h3 className={`font-semibold text-gray-900 mb-3 ${getLanguageClass()}`}>
                {currentLanguage === 'zh' ? '标签信息' : currentLanguage === 'th' ? 'ข้อมูลเพิ่มเติม' : 'Tags & Info'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <span className={`text-gray-700 font-medium ${getLanguageClass()}`}>
              {currentLanguage === 'zh' ? '总价:' : currentLanguage === 'th' ? 'ราคารวม:' : 'Total:'}
            </span>
            <span className="text-2xl font-bold text-orange-600">
              {formatPrice(calculateTotalPrice())}
            </span>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              {currentLanguage === 'zh' ? '返回' : currentLanguage === 'th' ? 'ย้อนกลับ' : 'Back'}
            </button>
            <button 
              onClick={() => {
                // For now, just close the modal
                // In the future, this would add to cart
                onClose();
              }}
              className="flex-1 py-3 px-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              {currentLanguage === 'zh' ? '确认选择' : currentLanguage === 'th' ? 'ยืนยัน' : 'Confirm'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizationModal;
