// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MenuBar from "./pages/menuBar/menuBar";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu-bar" element={<MenuBar />} />
        {/* 
           <Route path="/poslygi" element={<ServicesPage />} />
           <Route path="/dostavka" element={<DeliveryPage />} />
           <Route path="/keyteryng" element={<CateringPage />} />
          <Route path="/contacts" element={<ContactsPage />} />  */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
