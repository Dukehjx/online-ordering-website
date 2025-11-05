import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, customization) => {
    const cartItem = {
      id: `${item.id}-${Date.now()}`, // Unique ID for each cart item
      itemId: item.id,
      name: item.name,
      description: item.description,
      image: item.image,
      basePrice: item.price,
      customization,
      quantity: 1,
      unitPrice: calculateItemPrice(item.price, customization)
    };

    setCartItems(prev => [...prev, cartItem]);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }

    setCartItems(prev => 
      prev.map(item => 
        item.id === cartItemId 
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateItemPrice = (basePrice, customization) => {
    // No size premiums or extras for this shop - all items are regular size only
    return basePrice;
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
