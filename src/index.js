import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./themes/colors.css";
import "./themes/hawthorn.css";
import "./themes/common.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
