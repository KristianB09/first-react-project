import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar/navbar.jsx";
import "./index.css";
import Card from "./getData/getData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Card />
  </React.StrictMode>
);
