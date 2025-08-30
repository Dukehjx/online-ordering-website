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
      'zh': '中文'
    };
    return names[langCode] || langCode;
  };

  const getCustomizationText = (customization, displayLang) => {
    const parts = [];
    
    // No size display needed since all items are regular size
    
    if (customization.iceLevel) {
      const iceTexts = {
        'no-ice': { en: 'No Ice', th: 'ไม่ใส่น้ำแข็ง', zh: '去冰' },
        'less-ice': { en: 'Less Ice', th: 'น้ำแข็งน้อย', zh: '少冰' },
        'normal-ice': { en: 'Normal Ice', th: 'น้ำแข็งปกติ', zh: '正常冰' },
        'extra-ice': { en: 'Extra Ice', th: 'น้ำแข็งเยอะ', zh: '加冰' }
      };
      parts.push(iceTexts[customization.iceLevel]?.[displayLang] || customization.iceLevel);
    }
    
    if (customization.sweetness) {
      const sweetTexts = {
        'no-sugar': { en: '0% Sweet', th: 'ไม่หวาน', zh: '无糖' },
        '25%': { en: '25% Sweet', th: 'หวานน้อย', zh: '25%糖' },
        '50%': { en: '50% Sweet', th: 'หวานปกติ', zh: '半糖' },
        '75%': { en: '75% Sweet', th: 'หวานมาก', zh: '75%糖' },
        '100%': { en: '100% Sweet', th: 'หวานเต็มที่', zh: '全糖' }
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
    return cartItems.reduce((total, item) => total + (item.totalPrice * item.quantity), 0);
  };

  const getCurrentTime = () => {
    return new Date().toLocaleString(
      selectedDisplayLanguage === 'zh' ? 'zh-CN' : 
      selectedDisplayLanguage === 'th' ? 'th-TH' : 'en-US'
    );
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
              {currentLanguage === 'zh' ? '餐厅订单系统' : currentLanguage === 'th' ? 'ระบบคำสั่งซื้อร้านอาหาร' : 'Restaurant Order System'}
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
            {currentLanguage === 'zh' ? '显示语言:' : currentLanguage === 'th' ? 'ภาษาที่แสดง:' : 'Display Language:'}
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
                  {selectedDisplayLanguage === 'zh' ? '新订单' : selectedDisplayLanguage === 'th' ? 'คำสั่งซื้อใหม่' : 'New Order'}
                </h2>
                {/* <p className={`text-gray-600 ${getLanguageClass()}`}>
                  {selectedDisplayLanguage === 'zh' ? '订单编号: ' : selectedDisplayLanguage === 'th' ? 'หมายเลขคำสั่งซื้อ: ' : 'Order Number: '}
                  <span className="font-mono font-semibold">{getOrderNumber()}</span>
                </p> */}
                <p className={`text-gray-600 ${getLanguageClass()}`}>
                  {selectedDisplayLanguage === 'zh' ? '时间: ' : selectedDisplayLanguage === 'th' ? 'เวลา: ' : 'Time: '}
                  <span className="font-semibold">{getCurrentTime()}</span>
                </p>
              </div>
              <div className="text-right">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedDisplayLanguage === 'zh' ? '待处理' : selectedDisplayLanguage === 'th' ? 'รอดำเนินการ' : 'Pending'}
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className={`text-lg font-semibold text-gray-900 mb-4 ${getLanguageClass()}`}>
              {selectedDisplayLanguage === 'zh' ? '订单详情' : selectedDisplayLanguage === 'th' ? 'รายละเอียดคำสั่งซื้อ' : 'Order Details'}
            </h3>
            
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
                              {selectedDisplayLanguage === 'zh' ? '数量: ' : selectedDisplayLanguage === 'th' ? 'จำนวน: ' : 'Quantity: '}
                              <span className="font-semibold">{item.quantity}</span>
                            </span>
                            <span className={`text-sm text-gray-600 ${getLanguageClass()}`}>
                              {selectedDisplayLanguage === 'zh' ? '单价: ' : selectedDisplayLanguage === 'th' ? 'ราคาต่อหน่วย: ' : 'Unit Price: '}
                              <span className="font-semibold">{formatPrice(item.totalPrice)}</span>
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-orange-600">
                            {formatPrice(item.totalPrice * item.quantity)}
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
                  {selectedDisplayLanguage === 'zh' ? '总计:' : selectedDisplayLanguage === 'th' ? 'ราคารวม:' : 'Total:'}
                </span>
                <span className="text-2xl font-bold text-orange-600">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              {selectedDisplayLanguage === 'zh' ? '确认订单' : selectedDisplayLanguage === 'th' ? 'ยืนยันคำสั่งซื้อ' : 'Confirm Order'}
            </button>
            <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              {selectedDisplayLanguage === 'zh' ? '修改订单' : selectedDisplayLanguage === 'th' ? 'แก้ไขคำสั่งซื้อ' : 'Modify Order'}
            </button>
            <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              {selectedDisplayLanguage === 'zh' ? '拒绝订单' : selectedDisplayLanguage === 'th' ? 'ปฏิเสธคำสั่งซื้อ' : 'Reject Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalizeOrder;
