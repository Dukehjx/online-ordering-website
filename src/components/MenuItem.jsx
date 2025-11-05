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
                {currentLanguage === 'zh' ? '热门' : currentLanguage === 'th' ? 'ยอดนิยม' : currentLanguage === 'ko' ? '인기' : currentLanguage === 'ja' ? '人気' : 'Popular'}
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
                <span key={tag} className={`px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full ${getLanguageClass()}`}>
                  {getTagTranslation(tag)}
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
              {currentLanguage === 'zh' ? '选规格' : currentLanguage === 'th' ? 'เลือกรูปแบบ' : currentLanguage === 'ko' ? '옵션 선택' : currentLanguage === 'ja' ? 'カスタマイズ' : 'Customize'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
