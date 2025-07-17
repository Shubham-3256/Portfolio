import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import "aos/dist/aos.css"; // Just import CSS here
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // ✅ Add this line

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
