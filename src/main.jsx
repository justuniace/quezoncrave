import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./pages/theme/theme.js";
import { ChakraProvider } from "@chakra-ui/react";
// Supports weights 100-900
import "@fontsource/inter";
import "@fontsource/abril-fatface";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
