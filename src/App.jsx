import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { CartProvider, useCart } from './contexts/CartContext';
import { restaurantData } from './data/menuData';
import LanguageSwitcher from './components/LanguageSwitcher';
import CategorySidebar from './components/CategorySidebar';
import MenuItem from './components/MenuItem';
import CustomizationModal from './components/CustomizationModal';
import Cart from './components/Cart';

const AppContent = () => {
  const { getText, currentLanguage } = useLanguage();
  const { getCartItemCount } = useCart();
  const [selectedRestaurant] = useState('drinking-shop'); // For now, only one restaurant
  const [activeCategory, setActiveCategory] = useState('milk-tea');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const restaurant = restaurantData[selectedRestaurant];
  const currentCategory = restaurant.categories.find(cat => cat.id === activeCategory);

  const handleCustomize = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Left: Logo and Restaurant name */}
            <div className="flex items-center min-w-0 flex-1">
              <img 
                src="/logo.png" 
                alt="Online Ordering System Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 flex-shrink-0"
              />
              <div className="min-w-0">
                <h1 className={`text-base sm:text-lg lg:text-xl font-bold text-gray-900 truncate ${getLanguageClass()}`}>
                  {getText(restaurant.name)}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                  {currentLanguage === 'zh' ? '在线菜单' : currentLanguage === 'th' ? 'เมนูออนไลน์' : 'Online Menu'}
                </p>
              </div>
            </div>

            {/* Right: Compact controls */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <LanguageSwitcher />
              
              {/* Cart icon */}
              <button 
                onClick={openCart}
                className="relative p-1.5 sm:p-2 text-gray-600 hover:text-orange-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Sidebar */}
        <CategorySidebar 
          categories={restaurant.categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-3 sm:p-4 lg:p-6">
          {/* Category Header */}
          <div className="mb-4 sm:mb-6">
            <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 ${getLanguageClass()}`}>
              {getText(currentCategory?.name)}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {currentCategory?.items?.length || 0} {currentLanguage === 'zh' ? '种商品' : currentLanguage === 'th' ? 'รายการ' : 'items'}
            </p>
          </div>

          {/* Items Grid */}
          <div className="space-y-3 sm:space-y-4">
            {currentCategory?.items?.map((item) => (
              <MenuItem 
                key={item.id} 
                item={item} 
                onCustomize={handleCustomize}
              />
            ))}
          </div>

          {/* Empty State */}
          {(!currentCategory?.items || currentCategory.items.length === 0) && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l2 8m0 0l-2 8m2-8H9l4 4-4-4M5 4l2 8L5 20" />
              </svg>
              <h3 className={`text-lg font-medium text-gray-900 mb-2 ${getLanguageClass()}`}>
                {currentLanguage === 'zh' ? '暂无商品' : currentLanguage === 'th' ? 'ไม่มีรายการ' : 'No items available'}
              </h3>
              <p className={`text-gray-500 ${getLanguageClass()}`}>
                {currentLanguage === 'zh' ? '这个分类下暂时没有商品' : currentLanguage === 'th' ? 'ไม่มีรายการในหมวดหมู่นี้' : 'There are no items in this category yet.'}
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Customization Modal */}
      <CustomizationModal 
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Cart */}
      <Cart 
        isOpen={isCartOpen}
        onClose={closeCart}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/logo.png" 
                alt="Online Ordering System Logo" 
                className="w-12 h-12 mr-3"
              />
              <h3 className={`text-lg font-semibold text-gray-900 ${getLanguageClass()}`}>
                {getText(restaurant.name)}
              </h3>
            </div>
            <p className={`text-gray-600 mb-4 ${getLanguageClass()}`}>
              {currentLanguage === 'zh' ? '美味饮品，新鲜制作' : currentLanguage === 'th' ? 'เครื่องดื่มอร่อย ทำใหม่สด' : 'Delicious drinks, freshly made'}
            </p>
            <div className="text-sm text-gray-500">
              {currentLanguage === 'zh' ? '© 2024 在线订餐系统' : currentLanguage === 'th' ? '© 2024 ระบบสั่งอาหารออนไลน์' : '© 2024 Online Ordering System'}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
