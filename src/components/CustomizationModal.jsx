import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

const CustomizationModal = ({ item, isOpen, onClose }) => {
  const { getText, currentLanguage } = useLanguage();
  const { addToCart } = useCart();
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
      case 'ko':
        return 'font-korean';
      case 'ja':
        return 'font-japanese';
      default:
        return '';
    }
  };

  const formatPrice = (price) => {
    return `฿${price}`;
  };

  const getTagTranslation = (tag) => {
    const tagTranslations = {
      // Food categories
      'dairy': { en: 'Dairy', th: 'นม', zh: '乳制品', ko: '유제품', ja: '乳製品' },
      'chocolate': { en: 'Chocolate', th: 'ช็อคโกแลต', zh: '巧克力', ko: '초콜릿', ja: 'チョコレート' },
      'tea': { en: 'Tea', th: 'ชา', zh: '茶', ko: '차', ja: '茶' },
      'coffee': { en: 'Coffee', th: 'กาแฟ', zh: '咖啡', ko: '커피', ja: 'コーヒー' },
      'fruit': { en: 'Fruit', th: 'ผลไม้', zh: '水果', ko: '과일', ja: 'フルーツ' },
      'yogurt': { en: 'Yogurt', th: 'โยเกิร์ต', zh: '酸奶', ko: '요거트', ja: 'ヨーグルト' },
      'smoothie': { en: 'Smoothie', th: 'สมูทตี้', zh: '奶昔', ko: '스무디', ja: 'スムージー' },
      
      // Characteristics
      'popular': { en: 'Popular', th: 'ยอดนิยม', zh: '热门', ko: '인기', ja: '人気' },
      'signature': { en: 'Signature', th: 'เซ็กเนเจอร์', zh: '招牌', ko: '시그니처', ja: 'シグネチャー' },
      'specialty': { en: 'Specialty', th: 'พิเศษ', zh: '特色', ko: '특별', ja: 'スペシャル' },
      'premium': { en: 'Premium', th: 'พรีเมียม', zh: '高级', ko: '프리미엄', ja: 'プレミアム' },
      'classic': { en: 'Classic', th: 'คลาสสิค', zh: '经典', ko: '클래식', ja: 'クラシック' },
      
      // Health & Nutrition
      'healthy': { en: 'Healthy', th: 'เพื่อสุขภาพ', zh: '健康', ko: '건강한', ja: 'ヘルシー' },
      'vitamin-c': { en: 'Vitamin C', th: 'วิตามินซี', zh: '维生素C', ko: '비타민C', ja: 'ビタミンC' },
      'antioxidants': { en: 'Antioxidants', th: 'สารต้านอนุมูลอิสระ', zh: '抗氧化', ko: '항산화', ja: '抗酸化' },
      'probiotics': { en: 'Probiotics', th: 'โปรไบโอติก', zh: '益生菌', ko: '프로바이오틱스', ja: 'プロバイオティクス' },
      'fiber': { en: 'Fiber', th: 'ใยอาหาร', zh: '纤维', ko: '섬유질', ja: '食物繊維' },
      'potassium': { en: 'Potassium', th: 'โพแทสเซียม', zh: '钾', ko: '칼륨', ja: 'カリウム' },
      'superfood': { en: 'Superfood', th: 'ซูเปอร์ฟู้ด', zh: '超级食品', ko: '슈퍼푸드', ja: 'スーパーフード' },
      
      // Texture & Taste
      'creamy': { en: 'Creamy', th: 'ครีมมี่', zh: '奶香', ko: '크리미', ja: 'クリーミー' },
      'refreshing': { en: 'Refreshing', th: 'สดชื่น', zh: '清爽', ko: '상쾌한', ja: 'さっぱり' },
      'energizing': { en: 'Energizing', th: 'ให้พลังงาน', zh: '提神', ko: '활력', ja: 'エナジー' },
      'tangy': { en: 'Tangy', th: 'เปรี้ยว', zh: '酸甜', ko: '새콤한', ja: '酸味' },
      'indulgent': { en: 'Indulgent', th: 'หรูหรา', zh: '奢华', ko: '진한', ja: 'リッチ' },
      'sweet': { en: 'Sweet', th: 'หวาน', zh: '甜', ko: '달콤한', ja: '甘い' },
      
      // Ingredients & Add-ons
      'jelly': { en: 'Jelly', th: 'วุ้น', zh: '果冻', ko: '젤리', ja: 'ゼリー' },
      'cookies': { en: 'Cookies', th: 'คุกกี้', zh: '饼干', ko: '쿠키', ja: 'クッキー' },
      'honey': { en: 'Honey', th: 'น้ำผึ้ง', zh: '蜂蜜', ko: '꿀', ja: 'ハチミツ' },
      'malt': { en: 'Malt', th: 'มอลต์', zh: '麦芽', ko: '맥아', ja: 'モルト' },
      'caramel': { en: 'Caramel', th: 'คาราเมล', zh: '焦糖', ko: '캐러멜', ja: 'キャラメル' },
      
      // Categories & Types
      'soda': { en: 'Soda', th: 'โซดา', zh: '苏打', ko: '소다', ja: 'ソーダ' },
      'citrus': { en: 'Citrus', th: 'ส้ม', zh: '柑橘', ko: '감귤', ja: '柑橘' },
      'berry': { en: 'Berry', th: 'เบอร์รี่', zh: '浆果', ko: '베리', ja: 'ベリー' },
      'tropical': { en: 'Tropical', th: 'เขตร้อน', zh: '热带', ko: '트로피컬', ja: 'トロピカル' },
      'exotic': { en: 'Exotic', th: 'แปลกใหม่', zh: '异域', ko: '이국적', ja: 'エキゾチック' },
      'aromatic': { en: 'Aromatic', th: 'หอมหวาน', zh: '芳香', ko: '향긋한', ja: '香り豊か' },
      'natural': { en: 'Natural', th: 'ธรรมชาติ', zh: '天然', ko: '천연', ja: 'ナチュラル' },
      'herbal': { en: 'Herbal', th: 'สมุนไพร', zh: '草本', ko: '허브', ja: 'ハーブ' },
      'colorful': { en: 'Colorful', th: 'สีสวย', zh: '多彩', ko: '다채로운', ja: 'カラフル' },
      'unique': { en: 'Unique', th: 'เป็นเอกลักษณ์', zh: '独特', ko: '독특한', ja: 'ユニーク' },
      'hydrating': { en: 'Hydrating', th: 'ให้ความชุ่มชื้น', zh: '补水', ko: '수분 보충', ja: '水分補給' },
      'coconut': { en: 'Coconut', th: 'มะพร้าว', zh: '椰子', ko: '코코넛', ja: 'ココナッツ' }
    };
    
    return tagTranslations[tag]?.[currentLanguage] || tag;
  };

  const getOptionText = (option, type) => {
    const translations = {
      // Size options
      'regular': { en: 'Regular', th: 'ธรรมดา', zh: '标准杯', ko: '레귤러', ja: 'レギュラー' },
      'large': { en: 'Large (+฿2)', th: 'ใหญ่ (+฿2)', zh: '大杯 (+฿2)', ko: '라지 (+฿2)', ja: 'ラージ (+฿2)' },
      
      // Ice level options
      'no-ice': { en: 'No Ice', th: 'ไม่ใส่น้ำแข็ง', zh: '去冰', ko: '얼음 없음', ja: '氷なし' },
      'less-ice': { en: 'Less Ice', th: 'น้ำแข็งน้อย', zh: '少冰', ko: '얼음 적게', ja: '氷少なめ' },
      'normal-ice': { en: 'Normal Ice', th: 'น้ำแข็งปกติ', zh: '正常冰', ko: '보통 얼음', ja: '氷普通' },
      'extra-ice': { en: 'Extra Ice', th: 'น้ำแข็งเยอะ', zh: '加冰', ko: '얼음 많이', ja: '氷多め' },
      
      // Sweetness options
      'no-sugar': { en: '0% Sweet', th: 'ไม่หวาน', zh: '无糖', ko: '무설탕', ja: '砂糖なし' },
      '25%': { en: '25% Sweet', th: 'หวานน้อย', zh: '25%糖', ko: '25% 단맛', ja: '25% 甘さ' },
      '50%': { en: '50% Sweet', th: 'หวานปกติ', zh: '半糖', ko: '50% 단맛', ja: '50% 甘さ' },
      '75%': { en: '75% Sweet', th: 'หวานมาก', zh: '75%糖', ko: '75% 단맛', ja: '75% 甘さ' },
      '100%': { en: '100% Sweet', th: 'หวานเต็มที่', zh: '全糖', ko: '100% 단맛', ja: '100% 甘さ' },
      
      // Extras
      'extra-oreo': { en: 'Extra Oreo (+฿2)', th: 'โอริโอ้เพิ่ม (+฿2)', zh: '加奥利奥 (+฿2)', ko: '오레오 추가 (+฿2)', ja: 'オレオ追加 (+฿2)' },
      'extra-jelly': { en: 'Extra Jelly (+฿1)', th: 'วุ้นเพิ่ม (+฿1)', zh: '加果冻 (+฿1)', ko: '젤리 추가 (+฿1)', ja: 'ゼリー追加 (+฿1)' },
      'whipped-cream': { en: 'Whipped Cream (+฿2)', th: 'วิปครีม (+฿2)', zh: '奶油 (+฿2)', ko: '휘핑크림 (+฿2)', ja: 'ホイップクリーム (+฿2)' }
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
    // No size premiums or extras for this shop - all items are regular size only
    return item.price;
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
              {/* Size Options - Only show if more than one size */}
              {item.customization.size && item.customization.size.length > 1 && (
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


            </>
          )}

          {/* Allergen Information */}
          {item.tags && item.tags.length > 0 && (
            <div>
              <h3 className={`font-semibold text-gray-900 mb-3 ${getLanguageClass()}`}>
                {currentLanguage === 'zh' ? '标签信息' : currentLanguage === 'th' ? 'ข้อมูลเพิ่มเติม' : currentLanguage === 'ko' ? '태그 정보' : currentLanguage === 'ja' ? 'タグ情報' : 'Tags & Info'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className={`px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full ${getLanguageClass()}`}>
                    {getTagTranslation(tag)}
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
              {currentLanguage === 'zh' ? '总价:' : currentLanguage === 'th' ? 'ราคารวม:' : currentLanguage === 'ko' ? '총 가격:' : currentLanguage === 'ja' ? '合計:' : 'Total:'}
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
              {currentLanguage === 'zh' ? '返回' : currentLanguage === 'th' ? 'ย้อนกลับ' : currentLanguage === 'ko' ? '뒤로' : currentLanguage === 'ja' ? '戻る' : 'Back'}
            </button>
            <button 
              onClick={() => {
                addToCart(item, selectedOptions);
                onClose();
              }}
              className="flex-1 py-3 px-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              {currentLanguage === 'zh' ? '添加到购物车' : currentLanguage === 'th' ? 'เพิ่มลงตะกร้า' : currentLanguage === 'ko' ? '장바구니에 추가' : currentLanguage === 'ja' ? 'カートに追加' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizationModal;
