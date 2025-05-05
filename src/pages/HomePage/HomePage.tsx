// src/App.tsx
import React from "react";
import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <>
      <div className={styles["image-container"]}>
        <img className={styles.image} src="/01.jpg" alt="Background" />
        <div className={styles["image-overlay"]}></div>
      </div>
      <div className={styles["image-container"]}>
        <img className={styles.image} src="/01.jpg" alt="Background" />
        <div className={styles["image-overlay"]}></div>
      </div>
      <div className={styles["image-container"]}>
        <img className={styles.image} src="/01.jpg" alt="Background" />
        <div className={styles["image-overlay"]}></div>
      </div>
    </>
  );
};

export default HomePage;
