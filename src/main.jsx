import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar.jsx";
import "./index.css";
import Card from "./getData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Card />
  </React.StrictMode>
);
