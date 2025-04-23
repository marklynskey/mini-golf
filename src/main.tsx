import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "infima/dist/css/default/default.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
