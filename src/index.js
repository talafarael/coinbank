import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Main from "./screens/Main";
import Shop from "./screens/Shop";
import Profile from "./screens/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
