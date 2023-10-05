import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
import "./index.css";
import "./shared/config/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);
