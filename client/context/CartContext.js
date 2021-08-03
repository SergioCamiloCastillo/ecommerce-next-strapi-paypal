import { createContext, useState } from "react";
export const CartContext = createContext({});
//cart
const calculateCartTotal = (items) => {
  const itemsCount = items.reduce((prev, curr) => prev + curr.qty, 0);
  const cartTotal = items.reduce(
    (prev, curr) => prev + curr.qty * curr.price,
    0
  );
  return { itemsCount, cartTotal };
};
export const CartProvider = ({ children }) => {
  const addToCart = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      items.push({
        ...product,
        qty: 1,
      });
    } else {
      items[productIndex].qty++;
    }
    const total = calculateCartTotal(items);
    setCart({
      items,
      ...total,
    });
  };
  const removeFromCart = (product) => {};
  const [cart, setCart] = useState({
    items: [],
    itemsCount: 0,
    cartTotal: 0,
  });
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
