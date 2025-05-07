import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import WineList from "./components/WineList";
import Button from "../../components/button/button";
import styles from "./MenuBar.module.scss";
const MenuBar: React.FC = () => {
  return (
    <div>
      {/* Parallax Banner */}
      <ParallaxBanner
        layers={[
          // First background layer with `barmenutopimage.png`
          {
            image: "/123123.png",
          },
          {
            speed: -10,
            children: (
              <div className="flex items-center justify-center h-full w-full">
                <h1
                  className="text-white text-4xl md:text-6xl font-bold w-full text-center"
                  style={{ fontFamily: "'Marck Script', cursive" }}
                >
                  Прейскурант бару
                </h1>
              </div>
            ),
          },
        ]}
        className="h-[25rem]"
      />{" "}
      <div className="flex items-center justify-center h-[28rem] bg-white text-black bg-opacity-50 text-center relative">
        <div>
          <h1
            className="text-4xl md:text-7xl font-bold text-[#e2e2e2]"
            style={{ fontFamily: "'Marck Script', cursive" }}
          >
            Будьмо! Гей!
          </h1>
          <p className="text-xl md:text-4xl text-black opacity-75 mb-10 -mt-6 uppercase">
            {" "}
            {/* Negative margin */}
            Напої на будь-який смак
          </p>
        </div>
      </div>
      <ParallaxBanner
        layers={[
          // Second background layer with `vina.png`
          { image: "/vina.png", speed: -20 },

          {
            speed: -10,
            children: (
              <div className="flex items-center justify-center h-full w-full">
                <h1
                  className="text-white text-4xl md:text-6xl font-bold w-full text-center"
                  style={{ fontFamily: "'Marck Script', cursive" }}
                >
                  Вина
                </h1>
              </div>
            ),
          },
          // Foreground text
        ]}
        className="h-[17rem]"
      />
      <WineList />
      <button className={styles.seasidetmsButton}>Переглянути всі вина</button>
      <div>
        <br />
      </div>
    </div>
  );
};

export default MenuBar;
