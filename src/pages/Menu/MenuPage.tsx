import React from "react";
import styles from "./MenuPage.module.scss";
import CustomParallaxBanner from "../../components/Parralax/CustomParralax";
import useWindowSize from "../../hooks/useWindowSize";
import ListMenu from "./components/List";
import SaladsData from "../../components/menu/Menu/Salads.json";
import ColdDishesToOrder from "../../components/menu/Menu/ToOrder/ColdDishesToOrder.json";
import DesertsToOrder from "../../components/menu/Menu/ToOrder/DesertsToOrder.json";
import HotDishesToOrder from "../../components/menu/Menu/ToOrder/HotDishesToOrder.json";
import SaladDIshesToOrder from "../../components/menu/Menu/ToOrder/SaladDIshesToOrder.json";

import pisniDeserts from "../../components/menu/Menu/PisniDishes/Deserts.json";
import pisniFirstDishes from "../../components/menu/Menu/PisniDishes/FirstDishes.json";
import pisniHotDishes from "../../components/menu/Menu/PisniDishes/HotDishes.json";
import pisniHotZakuski from "../../components/menu/Menu/PisniDishes/HotZakuski.json";
import pisniSalads from "../../components/menu/Menu/PisniDishes/Salads.json";

import fursetFirst from "../../components/menu/Menu/FursetMenu/First.json";
import fursetHotDishes from "../../components/menu/Menu/FursetMenu/HotDishes.json";
import DesertsData from "../../components/menu/Menu/Deserts.json";

import FirstDishes from "../../components/menu/Menu/MainDishes/FirstDishes.json";
import MuchniDishes from "../../components/menu/Menu/MainDishes/MuchniDishes.json";

import Chiken from "../../components/menu/Menu/MainDishes/secondDishes/Chiken.json";
import Pig from "../../components/menu/Menu/MainDishes/secondDishes/Pig.json";
import SecondDishedFromFish from "../../components/menu/Menu/MainDishes/secondDishes/SecondDishedFromFish.json";
import Skovoroda from "../../components/menu/Menu/MainDishes/secondDishes/Skovoroda.json";
import Telya from "../../components/menu/Menu/MainDishes/secondDishes/Telya.json";

import Souses from "../../components/menu/Menu/MainDishes/Souses.json";
import Shashliki from "../../components/menu/Menu/MainDishes/Shashliki.json";
import MenuButton from "../../components/menuButton/menuButton";
import ReservationForm from "../../components/reservForm.tsx/reservForm";

const Menu: React.FC = () => {
  const { isMobile } = useWindowSize();
  return (
    <>
      {" "}
      {isMobile && <div className="w-full my-15 border-b " />}
      <CustomParallaxBanner
        imageUrl="/toplogo.png"
        text="Меню"
        isMobile={isMobile}
      />
      <div className="flex items-center justify-center h-[28rem] bg-white text-black bg-opacity-50 text-center relative">
        <div>
          <h1
            className="text-4xl md:text-7xl font-bold text-[#e2e2e2]"
            style={{ fontFamily: "'Marck Script', cursive" }}
          >
            Рекомендуємо
          </h1>
          <p className="text-xl md:text-4xl text-black opacity-75 mb-10 -mt-6 uppercase">
            Відбірні страви від нашого шефа
          </p>
        </div>
      </div>{" "}
      <CustomParallaxBanner
        imageUrl="/toplogo.png"
        text="Головні страви"
        isMobile={isMobile}
      />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Перші страви</p>
      </h2>
      <ListMenu menuData={FirstDishes} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Мучні страви</p>
      </h2>
      <ListMenu menuData={MuchniDishes} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Другі страви</p>
      </h2>{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categorySubTitle}> з свинини:</p>
      </h2>
      <ListMenu menuData={Pig} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categorySubTitle}> з птиці:</p>
      </h2>
      <ListMenu menuData={Chiken} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categorySubTitle}> з телятини:</p>
      </h2>
      <ListMenu menuData={Telya} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categorySubTitle}> з риби:</p>
      </h2>
      <ListMenu menuData={SecondDishedFromFish} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categorySubTitle}> блюда на сковороді:</p>
      </h2>
      <ListMenu menuData={Skovoroda} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Соуси</p>
      </h2>
      <ListMenu menuData={Souses} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>ШАШЛИКИ</p>
      </h2>
      <ListMenu menuData={Shashliki} /> <MenuButton />
      <CustomParallaxBanner
        imageUrl="/menu/салати.png"
        text="Салати"
        isMobile={isMobile}
      />
      <ListMenu menuData={SaladsData} /> <MenuButton />
      <CustomParallaxBanner
        imageUrl="/toplogo.png"
        text="Страви на замовлення"
        isMobile={isMobile}
      />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Салати</p>
      </h2>
      <ListMenu menuData={SaladDIshesToOrder} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Гарячі стави</p>
      </h2>
      <ListMenu menuData={HotDishesToOrder} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Холодні страви</p>
      </h2>
      <ListMenu menuData={ColdDishesToOrder} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Десерти</p>
      </h2>
      <ListMenu menuData={DesertsToOrder} /> <MenuButton />
      <CustomParallaxBanner
        imageUrl="/toplogo.png"
        text="Пістні страви"
        isMobile={isMobile}
      />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Салати</p>
      </h2>
      <ListMenu menuData={pisniSalads} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Гарячі стави</p>
      </h2>
      <ListMenu menuData={pisniHotDishes} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Перші страви</p>
      </h2>
      <ListMenu menuData={pisniFirstDishes} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Десерти</p>
      </h2>
      <ListMenu menuData={pisniDeserts} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Гарячі Закуски</p>
      </h2>
      <ListMenu menuData={pisniHotZakuski} /> <MenuButton />
      <CustomParallaxBanner
        imageUrl="/toplogo.png"
        text="Фуршетне меню"
        isMobile={isMobile}
      />{" "}
      <ListMenu menuData={fursetFirst} />{" "}
      <h2 className="flex items-center justify-center">
        <p className={styles.categoryTitle}>Гарячі Страви</p>
      </h2>{" "}
      <ListMenu menuData={fursetHotDishes} />{" "}
      <CustomParallaxBanner
        imageUrl="/toplogo.png"
        text="Десерти"
        isMobile={isMobile}
      />{" "}
      <ListMenu menuData={DesertsData} /> <ReservationForm />
    </>
  );
};

export default Menu;
