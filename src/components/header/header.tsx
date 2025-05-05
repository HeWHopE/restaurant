import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./header.module.scss";
import useWindowSize from "../../hooks/useWindowSize";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobile } = useWindowSize();
  const location = useLocation(); // Use this hook to get the current location
  const isActive = (path: string) => location.pathname === path;
  console.log(location);
  const handleBurgerToggle = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleLinkClick = () => {
    setIsBurgerOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-10 flex w-full items-center justify-center p-4 text-white transition-all duration-200 ${
        isScrolled ? "bg-[#191919] shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Navigation Links (Desktop only) */}
      {!isMobile ? (
        <div className="flex items-center justify-center w-screen gap-[8rem]">
          <div
            className={`flex items-center transition-transform duration-200 ${
              isScrolled ? "scale-75" : "scale-115 translate-x-10"
            }`}
          >
            <img src="/logo.png" alt="logo" className="h-auto w-60" />
          </div>

          <nav className=" sm:flex gap-5">
            <a
              href="/"
              className={`${styles.navitem} ${isActive("/") ? styles.active : ""}`}
            >
              ГОЛОВНА
            </a>
            <a
              href="/menu"
              className={`${styles.navitem} ${isActive("/menu") ? styles.active : ""}`}
            >
              МЕНЮ ТА БАР
            </a>
            <a
              href="/poslygi"
              className={`${styles.navitem} ${isActive("/poslygi") ? styles.active : ""}`}
            >
              ПОСЛУГИ
            </a>
            <a
              href="/dostavka"
              className={`${styles.navitem} ${isActive("/dostavka") ? styles.active : ""}`}
            >
              ДОСТАВКА
            </a>
            <a
              href="/keyteryng"
              className={`${styles.navitem} ${isActive("/keyteryng") ? styles.active : ""}`}
            >
              КЕЙТЕРИНГ
            </a>
            <a
              href="/contacts"
              className={`${styles.navitem} ${isActive("/contacts") ? styles.active : ""}`}
            >
              КОНТАКТИ
            </a>
            <a className={`${styles.navitem}`}>
              <img
                src="/ua-flag.png"
                alt="UA Flag"
                className="inline-block w-4 h-[11px] mr-2 align-middle "
              />
              UA
            </a>
          </nav>
        </div>
      ) : (
        <button onClick={handleBurgerToggle} className="block p-2">
          <span className="block w-6 h-1 bg-white mb-2"></span>
          <span className="block w-6 h-1 bg-white mb-2"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
      )}

      {/* Sliding Menu for Mobile */}
      {isBurgerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 top-16 w-full bg-slate-900/80 pb-10 pt-10 rounded-b-full backdrop-blur-md"
        >
          <ul className="flex flex-col items-center gap-5">
            <li>
              <a
                onClick={handleLinkClick}
                href="/"
                className="text-2xl font-medium text-white"
              >
                ГОЛОВНА
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="/menu"
                className="text-2xl font-medium text-white "
              >
                МЕНЮ ТА БАР
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="/poslygi"
                className="text-2xl font-medium text-white "
              >
                ПОСЛУГИ
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="/dostavka"
                className="text-2xl font-medium text-white "
              >
                ДОСТАВКА
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="/keyteryng"
                className="text-2xl font-medium text-white"
              >
                КЕЙТЕРИНГ
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                href="/contacts"
                className="text-2xl font-medium text-white"
              >
                КОНТАКТИ
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
