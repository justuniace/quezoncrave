import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [size, setSize] = useState("16oz"); 

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

   const setSizeValue = (value) => {
     setSize(value);
   };

   const removeFromCart = (itemId) => {
     setCartItems((prevItems) =>
       prevItems.filter((item) => item.id !== itemId)
     );
   };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,size, setSize: setSizeValue }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
