import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import FinalizeOrder from './FinalizeOrder';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartItemCount, clearCart } = useCart();
  const { getText, currentLanguage } = useLanguage();
  const [showFinalizeOrder, setShowFinalizeOrder] = useState(false);

  if (!isOpen) return null;

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

  const getCustomizationText = (customization) => {
    const parts = [];
    
    // No size display needed since all items are regular size
    
    if (customization.iceLevel) {
      const iceTexts = {
        'no-ice': { en: 'No Ice', th: 'ไม่ใส่น้ำแข็ง', zh: '去冰', ko: '얼음 없음', ja: '氷なし' },
        'less-ice': { en: 'Less Ice', th: 'น้ำแข็งน้อย', zh: '少冰', ko: '얼음 적게', ja: '氷少なめ' },
        'normal-ice': { en: 'Normal Ice', th: 'น้ำแข็งปกติ', zh: '正常冰', ko: '보통 얼음', ja: '氷普通' },
        'extra-ice': { en: 'Extra Ice', th: 'น้ำแข็งเยอะ', zh: '加冰', ko: '얼음 많이', ja: '氷多め' }
      };
      parts.push(iceTexts[customization.iceLevel]?.[currentLanguage] || customization.iceLevel);
    }
    
    if (customization.sweetness) {
      const sweetTexts = {
        'no-sugar': { en: '0%', th: 'ไม่หวาน', zh: '无糖', ko: '무설탕', ja: '砂糖なし' },
        '25%': { en: '25%', th: 'หวานน้อย', zh: '25%糖', ko: '25%', ja: '25%' },
        '50%': { en: '50%', th: 'หวานปกติ', zh: '半糖', ko: '50%', ja: '50%' },
        '75%': { en: '75%', th: 'หวานมาก', zh: '75%糖', ko: '75%', ja: '75%' },
        '100%': { en: '100%', th: 'หวานเต็มที่', zh: '全糖', ko: '100%', ja: '100%' }
      };
      parts.push(sweetTexts[customization.sweetness]?.[currentLanguage] || customization.sweetness);
    }
    
    // No extras for this shop
    
    return parts.join(', ');
  };

  const handleFinalize = () => {
    setShowFinalizeOrder(true);
  };

  const handleBackFromFinalize = () => {
    setShowFinalizeOrder(false);
  };

  if (showFinalizeOrder) {
    return (
      <FinalizeOrder 
        cartItems={cartItems}
        onBack={handleBackFromFinalize}
        onClose={onClose}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-screen overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <h2 className={`text-xl font-semibold text-gray-900 ${getLanguageClass()}`}>
              {currentLanguage === 'zh' ? '购物车' : currentLanguage === 'th' ? 'ตะกร้าสินค้า' : currentLanguage === 'ko' ? '장바구니' : currentLanguage === 'ja' ? 'カート' : 'Cart'}
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({getCartItemCount()} {currentLanguage === 'zh' ? '件商品' : currentLanguage === 'th' ? 'รายการ' : currentLanguage === 'ko' ? '개 상품' : currentLanguage === 'ja' ? '個の商品' : 'items'})
              </span>
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h3 className={`text-lg font-medium text-gray-900 mb-2 ${getLanguageClass()}`}>
                {currentLanguage === 'zh' ? '购物车为空' : currentLanguage === 'th' ? 'ตะกร้าสินค้าว่าง' : currentLanguage === 'ko' ? '장바구니가 비어있습니다' : currentLanguage === 'ja' ? 'カートが空です' : 'Cart is empty'}
              </h3>
              <p className={`text-gray-500 ${getLanguageClass()}`}>
                {currentLanguage === 'zh' ? '添加一些美味饮品吧！' : currentLanguage === 'th' ? 'เพิ่มเครื่องดื่มอร่อยๆ กันเถอะ!' : currentLanguage === 'ko' ? '맛있는 음료를 추가해보세요!' : currentLanguage === 'ja' ? '美味しいドリンクを追加してください！' : 'Add some delicious drinks!'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    {/* Item Image */}
                    <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={getText(item.name)}
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
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium text-gray-900 text-sm ${getLanguageClass()}`}>
                        {getText(item.name)}
                      </h4>
                      <p className={`text-xs text-gray-600 mt-1 ${getLanguageClass()}`}>
                        {getCustomizationText(item.customization)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-orange-600 font-semibold">
                          {formatPrice(item.unitPrice)}
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <span className={`text-gray-700 font-medium ${getLanguageClass()}`}>
                {currentLanguage === 'zh' ? '总计:' : currentLanguage === 'th' ? 'ราคารวม:' : currentLanguage === 'ko' ? '총계:' : currentLanguage === 'ja' ? '合計:' : 'Total:'}
              </span>
              <span className="text-2xl font-bold text-orange-600">
                {formatPrice(getCartTotal())}
              </span>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={clearCart}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                {currentLanguage === 'zh' ? '清空购物车' : currentLanguage === 'th' ? 'ล้างตะกร้า' : currentLanguage === 'ko' ? '장바구니 비우기' : currentLanguage === 'ja' ? 'カートを空にする' : 'Clear Cart'}
              </button>
              <button 
                onClick={handleFinalize}
                className="flex-1 py-3 px-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                {currentLanguage === 'zh' ? '确认订单' : currentLanguage === 'th' ? 'ยืนยันคำสั่งซื้อ' : currentLanguage === 'ko' ? '주문 확정' : currentLanguage === 'ja' ? '注文を確定' : 'Finalize Order'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
