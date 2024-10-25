import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider value={system}>
    <React.StrictMode>
      <App totalSprints={6} />
    </React.StrictMode>
  </ChakraProvider>
);
reportWebVitals();
