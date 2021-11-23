import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <MainNavigation />

    <App />
    {/* <Routes>
      <Route path="/" element={<App />} />
    </Routes> */}
  </BrowserRouter>,
  document.getElementById("root")
);
