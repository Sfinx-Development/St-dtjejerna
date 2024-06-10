import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation";
import { ScreenSizeProvider } from "./screenSizeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScreenSizeProvider>
      <Navigation />
      </ScreenSizeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
