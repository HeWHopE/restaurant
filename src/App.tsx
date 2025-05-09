// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MenuBar from "./pages/menuBar/menuBar";
import { ToastContainer } from "react-toastify";
import Menu from "./pages/Menu/MenuPage";
import Bankets from "./pages/BanketsPage/Bankets";
import ComingSoonBanner from "./pages/ComingSoon/ComingSoon";
import Contact from "./pages/Contact/contact";
import ScrollToTop from "./hooks/useScrollback";
import Gallery from "./pages/Gallery/Gallery";
import Dashboard from "./pages/Dasboard/Dashboard";
import KeyboardNavigation from "./components/script/bind";
const App: React.FC = () => {
  return (
    <Router>
      <Header />      <KeyboardNavigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preskurant" element={<MenuBar />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bankety" element={<Bankets />} />
        <Route path="/keyteryng" element={<ComingSoonBanner />} />
        <Route path="/dostavka" element={<ComingSoonBanner />} />{" "}
        <Route path="/contacts" element={<Contact />} />
        <Route path="/poslygi" element={<ComingSoonBanner />} />
        <Route path="/about" element={<ComingSoonBanner />} />
        <Route path="/gallery" element={<Gallery />} />
       <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer /> <ToastContainer />

    </Router>
  );
};

export default App;
