import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const calculateCartTotal = items => {
    
    const itemsCount = items.reduce((prev, curr) => prev + curr.qty, 0);
    const cartTotal = items.reduce(
      (prev, curr) => prev + curr.qty * curr.price,
      0
    );
      console.log(cartTotal);
    return { itemsCount, cartTotal };
  };

  const [cart, setCart] = useState({
    items: [],
    itemsCount: 0,
    cartTotal: 0,
  });

  const addToCart = product => {
    const { items = [] } = cart;
    const productIndex = items.findIndex(item => item.id === product.id);
    if (productIndex === -1) {
      items.push({
        ...product,
        qty: 1,
      });
    } else {
      items[productIndex].qty++;
    }

    setCart({
      items,
      ...calculateCartTotal(items),
    });
  };

  const removeFromCart = product => {
    const { items = [] } = cart;
    const productIndex = items.findIndex(item => item.id === product.id);
    if (productIndex !== -1) {
      items.splice(productIndex, 1);
    }

    setCart({
      items,
      ...calculateCartTotal(items),
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};