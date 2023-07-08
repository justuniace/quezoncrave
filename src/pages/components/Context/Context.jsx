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

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart,size, setSize: setSizeValue }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
