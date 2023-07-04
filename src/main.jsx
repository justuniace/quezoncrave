import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import theme from "./pages/theme/theme.js";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./pages/components/Context/Context.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
   
        <CartProvider>
          <App />
        </CartProvider>
    
    </ChakraProvider>
  </React.StrictMode>
);
