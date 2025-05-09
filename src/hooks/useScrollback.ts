import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if custom scroll behavior is required
    const isCustomScroll = localStorage.getItem("selectedMenuItem");

    if (!isCustomScroll || isCustomScroll === "1") {
      window.scrollTo(0, 0); // Only scroll to top if no custom scroll logic
    }
  }, [location.pathname]); // Trigger only when the pathname changes

  return null;
};

export default ScrollToTop;
