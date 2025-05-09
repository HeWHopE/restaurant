// src/components/KeyboardNavigation.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KeyboardNavigation: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if both Q and T are pressed simultaneously
      console.log(event)
      if (event.key === "q") {
        // Now check if T is also pressed (during the same event)
        window.addEventListener("keydown", (event) => {
          if (event.key === "t") {
            // Navigate to the /dashboard route
            navigate("/dashboard");
          }
        });
      }
    };

    // Add the event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return null;
};

export default KeyboardNavigation;
