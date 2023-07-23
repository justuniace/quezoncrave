import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();


const getLocalItems = () => {
  let cartItems = localStorage.getItem('cartItems');
  console.log(cartItems)

  if (cartItems) {
    return JSON.parse(localStorage.getItem("cartItems"));
  } else {
    return [];
  }
}





export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getLocalItems());
  const [size, setSize] = useState(CartContext);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  

  const setSizeValue = (value) => {
    setSize(value);
  };

  //add data to localStorage
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        size,
        setSize: setSizeValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
