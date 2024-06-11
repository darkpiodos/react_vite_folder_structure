import React from "react";
import "../src/assets/styles/global/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
