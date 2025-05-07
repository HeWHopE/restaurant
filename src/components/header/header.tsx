import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./header.module.scss";
import useWindowSize from "../../hooks/useWindowSize";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "lucide-react";

const Header: React.FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobile, isMedium } = useWindowSize();
  const location = useLocation(); // Use this hook to get the current location
  const isActive = (path: string) => location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const handleMenuDropdownToggle = () => {
    setIsMenuDropdownOpen(!isMenuDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleBurgerToggle = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleLinkClick = () => {
    setIsBurgerOpen(false);
    setIsMenuDropdownOpen(false);
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

  const handleMobileToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-999 flex w-full items-center justify-center text-white transition-all duration-200 h-24 ${
          isMedium || isScrolled ? "bg-[#191919] !h-18" : "bg-transparent "
        } ${isMobile && "!h-40"}`}
      >
        {" "}
        <Container>
          {/* Navigation Links (Desktop only) */}
          {!isMedium ? (
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
                  className={`${styles.navitem} ${isActive("/menu") ? styles.active : ""}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={isMobile ? handleMobileToggle : undefined}
                >
                  МЕНЮ ТА БАР
                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.div
                        className="absolute left-0 top-full mt-2 w-48 bg-gray-900 text-white  rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: -10 }} // Start slightly above with 0 opacity
                        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
                        exit={{ opacity: 0, y: -10 }} // Fade out and move slightly up
                        transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth animation
                        onMouseEnter={handleMouseEnter} // Keep open if hovering the dropdown
                        onMouseLeave={handleMouseLeave} // Close when leaving the dropdown
                      >
                        <ul className="flex flex-col rounded-lg">
                          <li className="px-4 py-2 ">
                            <a href="/menu-bar">Menu Bar</a>
                          </li>
                          <li className="px-4 py-2  rounded-lg">
                            <a href="/preskurant">Preskurant</a>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </a>

                <a
                  href="/poslygi"
                  className={`${styles.navitem} ${isActive("/poslygi") ? styles.active : ""}`}
                >
                  БАНКЕТИ
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
                  href="/about"
                  className={`${styles.navitem} ${isActive("/contacts") ? styles.active : ""}`}
                >
                  ПРО НАС
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
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-between flex-col sm:flex-row gap-5  w-[80vw]">
                <div
                  className={`flex items-center transition-transform duration-200`}
                >
                  <img src="/logo.png" alt="logo" className="h-auto w-60" />
                </div>
                <button
                  onClick={handleBurgerToggle}
                  className="block p-2 focus:outline-none"
                  aria-label={isBurgerOpen ? "Close menu" : "Open menu"}
                >
                  {isBurgerOpen ? (
                    // Close Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    // Burger Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Sliding Menu for Mobile */}
          <AnimatePresence>
            {isBurgerOpen && (
              <motion.div
                initial={{ y: "0%", opacity: 0 }} // Start below the header, invisible
                animate={{ y: 0, opacity: 1 }} // Slide up to its position, fully visible
                exit={{ y: "0%", opacity: 0 }} // Slide down and fade out when exiting
                transition={{ duration: 0.5 }}
                className="absolute left-0 w-full bg-slate-900 py-5 text-center"
                style={{ top: "100%" }}
              >
                <ul className="flex flex-col gap-6 pr-8 pl-8">
                  <li className="justify-start flex">
                    <a
                      href="/"
                      onClick={handleLinkClick}
                      className="text-white"
                    >
                      ГОЛОВНА
                    </a>
                  </li>
                  <li className="justify-between flex w-[90%]">
                    <div className="relative">
                      <button
                        onClick={handleMenuDropdownToggle}
                        className="flex items-center justify-between w-[90vw] text-white"
                      >
                        <span>МЕНЮ ТА БАР</span>
                        {isMenuDropdownOpen ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      <AnimatePresence>
                        {isMenuDropdownOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 rounded-lg"
                          >
                            <li className="justify-start flex rounded-lg">
                              <a
                                href="/menu-bar"
                                onClick={handleLinkClick}
                                className="block px-4 py-2  text-white"
                              >
                                Меню ресторану
                              </a>
                            </li>
                            <li className="justify-start flex rounded-lg">
                              <a
                                href="/preskurant"
                                onClick={handleLinkClick}
                                className="block px-4 py-2  text-white"
                              >
                                Прейскурант бару
                              </a>
                            </li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </li>
                  <li className="justify-start flex">
                    <a
                      href="/poslygi"
                      onClick={handleLinkClick}
                      className="text-white"
                    >
                      ПОСЛУГИ
                    </a>
                  </li>
                  <li className="justify-start flex">
                    <a
                      href="/dostavka"
                      onClick={handleLinkClick}
                      className="text-white"
                    >
                      ДОСТАВКА
                    </a>
                  </li>
                  <li className="justify-start flex">
                    <a
                      href="/keyteryng"
                      onClick={handleLinkClick}
                      className="text-white"
                    >
                      КЕЙТЕРИНГ
                    </a>
                  </li>
                  <li className="justify-start flex">
                    <a
                      href="/contacts"
                      onClick={handleLinkClick}
                      className="text-white"
                    >
                      КОНТАКТИ
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </header>
    </>
  );
};

export default Header;
