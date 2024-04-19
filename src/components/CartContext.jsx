import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({
    totalCount: 0,
    totalPrice: 0,
  });

  const updateCartData = (newCartData) => {
    setCartData(newCartData);
  };

  return (
    <CartContext.Provider value={{ cartData, updateCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};