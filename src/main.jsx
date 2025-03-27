import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CalculatorProvider } from "./CalculatorProvider/index.jsx";

createRoot(document.getElementById("root")).render(
  <CalculatorProvider>
    <App />
  </CalculatorProvider>
);
