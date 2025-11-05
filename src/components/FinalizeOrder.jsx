import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FinalizeOrder = ({ cartItems, onBack, onClose }) => {
  const { getText, currentLanguage, switchLanguage, supportedLanguages } = useLanguage();
  const [selectedDisplayLanguage, setSelectedDisplayLanguage] = useState(currentLanguage);

  const getLanguageClass = () => {
    switch (selectedDisplayLanguage) {
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

  const getLanguageName = (langCode) => {
    const names = {
      'en': { en: 'English', th: 'อังกฤษ', zh: '英文' },
      'th': { en: 'Thai', th: 'ไทย', zh: '泰文' },
      'zh': { en: 'Chinese', th: 'จีน', zh: '中文' }
    };
    return names[langCode]?.[currentLanguage] || langCode;
  };

  const getDisplayLanguageName = (langCode) => {
    const names = {
      'en': 'English',
      'th': 'ไทย',
      'zh': '中文',
      'ko': '한국어',
      'ja': '日本語'
    };
    return names[langCode] || langCode;
  };

  const getCustomizationText = (customization, displayLang) => {
    const parts = [];
    
    // No size display needed since all items are regular size
    
    if (customization.iceLevel) {
      const iceTexts = {
        'no-ice': { en: 'No Ice', th: 'ไม่ใส่น้ำแข็ง', zh: '去冰', ko: '얼음 없음', ja: '氷なし' },
        'less-ice': { en: 'Less Ice', th: 'น้ำแข็งน้อย', zh: '少冰', ko: '얼음 적게', ja: '氷少なめ' },
        'normal-ice': { en: 'Normal Ice', th: 'น้ำแข็งปกติ', zh: '正常冰', ko: '보통 얼음', ja: '氷普通' },
        'extra-ice': { en: 'Extra Ice', th: 'น้ำแข็งเยอะ', zh: '加冰', ko: '얼음 많이', ja: '氷多め' }
      };
      parts.push(iceTexts[customization.iceLevel]?.[displayLang] || customization.iceLevel);
    }
    
    if (customization.sweetness) {
      const sweetTexts = {
        'no-sugar': { en: '0% Sweet', th: 'ไม่หวาน', zh: '无糖', ko: '무설탕', ja: '砂糖なし' },
        '25%': { en: '25% Sweet', th: 'หวานน้อย', zh: '25%糖', ko: '25% 단맛', ja: '25% 甘さ' },
        '50%': { en: '50% Sweet', th: 'หวานปกติ', zh: '半糖', ko: '50% 단맛', ja: '50% 甘さ' },
        '75%': { en: '75% Sweet', th: 'หวานมาก', zh: '75%糖', ko: '75% 단맛', ja: '75% 甘さ' },
        '100%': { en: '100% Sweet', th: 'หวานเต็มที่', zh: '全糖', ko: '100% 단맛', ja: '100% 甘さ' }
      };
      parts.push(sweetTexts[customization.sweetness]?.[displayLang] || customization.sweetness);
    }
    
    // No extras for this shop
    
    return parts.join(', ');
  };

  const getTextInLanguage = (textObject, language) => {
    if (typeof textObject === 'string') return textObject;
    return textObject[language] || textObject['en'] || '';
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  };

  const getCurrentTime = () => {
    return new Date().toLocaleString(
      selectedDisplayLanguage === 'zh' ? 'zh-CN' : 
      selectedDisplayLanguage === 'th' ? 'th-TH' : 'en-US'
    );
  };

  const handleModifyOrder = () => {
    // Go back to the main menu to allow order modification
    onBack();
  };

  // const getOrderNumber = () => {
  //   return `#${Date.now().toString().slice(-6)}`;
  // };

  return (
    <div className="fixed inset-0 bg-white flex flex-col z-50">
      {/* Header */}
      <div className="bg-orange-500 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="text-white hover:text-orange-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className={`text-xl font-bold ${getLanguageClass()}`}>
              {currentLanguage === 'zh' ? '餐厅订单系统' : currentLanguage === 'th' ? 'ระบบคำสั่งซื้อร้านอาหาร' : currentLanguage === 'ko' ? '레스토랑 주문 시스템' : currentLanguage === 'ja' ? 'レストラン注文システム' : 'Restaurant Order System'}
            </h1>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-orange-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Language Selector */}
      <div className="bg-gray-50 border-b border-gray-200 p-4">
        <div className="flex items-center gap-4">
          <label className={`font-medium text-gray-700 ${getLanguageClass()}`}>
            {currentLanguage === 'zh' ? '显示语言:' : currentLanguage === 'th' ? 'ภาษาที่แสดง:' : currentLanguage === 'ko' ? '표시 언어:' : currentLanguage === 'ja' ? '表示言語:' : 'Display Language:'}
          </label>
          <div className="flex gap-2">
            {supportedLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedDisplayLanguage(lang)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedDisplayLanguage === lang
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {getDisplayLanguageName(lang)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Order Details */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto">
          {/* Order Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className={`text-2xl font-bold text-gray-900 mb-2 ${getLanguageClass()}`}>
                  {selectedDisplayLanguage === 'zh' ? '新订单' : selectedDisplayLanguage === 'th' ? 'คำสั่งซื้อใหม่' : selectedDisplayLanguage === 'ko' ? '새 주문' : selectedDisplayLanguage === 'ja' ? '新しい注文' : 'New Order'}
                </h2>
                {/* <p className={`text-gray-600 ${getLanguageClass()}`}>
                  {selectedDisplayLanguage === 'zh' ? '订单编号: ' : selectedDisplayLanguage === 'th' ? 'หมายเลขคำสั่งซื้อ: ' : 'Order Number: '}
                  <span className="font-mono font-semibold">{getOrderNumber()}</span>
                </p> */}
                <p className={`text-gray-600 ${getLanguageClass()}`}>
                  {selectedDisplayLanguage === 'zh' ? '时间: ' : selectedDisplayLanguage === 'th' ? 'เวลา: ' : selectedDisplayLanguage === 'ko' ? '시간: ' : selectedDisplayLanguage === 'ja' ? '時間: ' : 'Time: '}
                  <span className="font-semibold">{getCurrentTime()}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${getLanguageClass()}`}>
              {selectedDisplayLanguage === 'zh' ? '订单详情' : selectedDisplayLanguage === 'th' ? 'รายละเอียดคำสั่งซื้อ' : selectedDisplayLanguage === 'ko' ? '주문 상세' : selectedDisplayLanguage === 'ja' ? '注文詳細' : 'Order Details'}
            </h3>
            <p className={`text-sm text-gray-600 mb-4 ${getLanguageClass()}`}>
              {selectedDisplayLanguage === 'zh' ? '点击"修改订单"按钮返回菜单进行修改' : selectedDisplayLanguage === 'th' ? 'คลิก "แก้ไขคำสั่งซื้อ" เพื่อกลับไปแก้ไขเมนู' : selectedDisplayLanguage === 'ko' ? '"주문 수정" 버튼을 클릭하여 메뉴로 돌아가서 수정하세요' : selectedDisplayLanguage === 'ja' ? '"注文変更"ボタンをクリックしてメニューに戻り修正してください' : 'Click "Modify Order" to return to menu and make changes'}
            </p>
            
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={item.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    {/* Item Image */}
                    <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={getTextInLanguage(item.name, selectedDisplayLanguage)}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full hidden items-center justify-center text-gray-400">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Item Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className={`font-semibold text-gray-900 ${getLanguageClass()}`}>
                            {getTextInLanguage(item.name, selectedDisplayLanguage)}
                          </h4>
                          <p className={`text-sm text-gray-600 mt-1 ${getLanguageClass()}`}>
                            {getCustomizationText(item.customization, selectedDisplayLanguage)}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className={`text-sm text-gray-600 ${getLanguageClass()}`}>
                              {selectedDisplayLanguage === 'zh' ? '数量: ' : selectedDisplayLanguage === 'th' ? 'จำนวน: ' : selectedDisplayLanguage === 'ko' ? '수량: ' : selectedDisplayLanguage === 'ja' ? '数量: ' : 'Quantity: '}
                              <span className="font-semibold">{item.quantity}</span>
                            </span>
                            <span className={`text-sm text-gray-600 ${getLanguageClass()}`}>
                              {selectedDisplayLanguage === 'zh' ? '单价: ' : selectedDisplayLanguage === 'th' ? 'ราคาต่อหน่วย: ' : selectedDisplayLanguage === 'ko' ? '단가: ' : selectedDisplayLanguage === 'ja' ? '単価: ' : 'Unit Price: '}
                              <span className="font-semibold">{formatPrice(item.unitPrice)}</span>
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-orange-600">
                            {formatPrice(item.unitPrice * item.quantity)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className={`text-xl font-semibold text-gray-900 ${getLanguageClass()}`}>
                  {selectedDisplayLanguage === 'zh' ? '总计:' : selectedDisplayLanguage === 'th' ? 'ราคารวม:' : selectedDisplayLanguage === 'ko' ? '총계:' : selectedDisplayLanguage === 'ja' ? '合計:' : 'Total:'}
                </span>
                <span className="text-2xl font-bold text-orange-600">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button 
              onClick={handleModifyOrder}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              {selectedDisplayLanguage === 'zh' ? '修改订单' : selectedDisplayLanguage === 'th' ? 'แก้ไขคำสั่งซื้อ' : selectedDisplayLanguage === 'ko' ? '주문 수정' : selectedDisplayLanguage === 'ja' ? '注文変更' : 'Modify Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalizeOrder;
