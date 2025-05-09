import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location]); // Re-run when location (page) changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
