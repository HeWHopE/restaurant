// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/header/header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/menu" element={<MenuPage />} />
          <Route path="/poslygi" element={<ServicesPage />} />
          <Route path="/dostavka" element={<DeliveryPage />} />
          <Route path="/keyteryng" element={<CateringPage />} />
          <Route path="/contacts" element={<ContactsPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
