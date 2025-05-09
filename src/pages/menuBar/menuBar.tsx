import React from "react";

import WineList from "../../components/lists/WineList/WineList";
import ListBarMenu from "../../components/lists/mainList/List";
import ListKokteilsMenu from "../../components/lists/kokteilList/kokteilList";
import djinsData from "../../components/menu/BarMenu/djin.json";
import gorilkaData from "../../components/menu/BarMenu/gorilka.json";
import likersData from "../../components/menu/BarMenu/likers.json";
import kokteilsData from "../../components/menu/BarMenu/kokteil.json";
import CustomParallaxBanner from "../../components/Parralax/CustomParralax";
import useWindowSize from "../../hooks/useWindowSize";
import HotDrinksList, {
  type HotDrinkItem,
} from "../../components/lists/hotDriks/HotDrinksList";
import HotDrinksData from "../../components/menu/BarMenu/hotDrinks.json";
import ListBeerMenu, {
  type BeerItem,
} from "../../components/lists/BearList/BearList";
import BearData from "../../components/menu/BarMenu/bear.json";
import ColdDrinksData from "../../components/menu/BarMenu/coldDrinks.json";
import ColdDrinksList, {
  type COldDrinkItem,
} from "../../components/lists/ColdDrinks/ColdDrinks";
import MenuButton from "../../components/menuButton/menuButton";
import ReservationForm from "../../components/reservForm.tsx/reservForm";

const MenuBar: React.FC = () => {
  const { isMobile } = useWindowSize();
  return (
    <>
      {isMobile && <div className="w-full my-15 border-b " />}
      <CustomParallaxBanner
        imageUrl="/toplogo.png"
        text="Прейскурант бару"
        isMobile={isMobile}
      />
      <div className="flex items-center justify-center h-[28rem] bg-white text-black bg-opacity-50 text-center relative">
        <div>
          <h1
            className="text-4xl md:text-7xl font-bold text-[#e2e2e2]"
            style={{ fontFamily: "'Marck Script', cursive" }}
          >
            Будьмо! Гей!
          </h1>
          <p className="text-xl md:text-4xl text-black opacity-75 mb-10 -mt-6 uppercase">
            Напої на будь-який смак
          </p>
        </div>
      </div>
      <CustomParallaxBanner
        imageUrl="/bar/vina.png"
        text="Вина"
        isMobile={isMobile}
      />
      <WineList />
      <MenuButton />
      <CustomParallaxBanner
        isMobile={isMobile}
        imageUrl="/bar/djin.jpg"
        text="Lікер, віски, ром, джин"
      />
      <ListBarMenu menuData={djinsData} /> <MenuButton />
      <CustomParallaxBanner
        imageUrl="/bar/gorilka.png"
        text="Горілка"
        isMobile={isMobile}
      />
      <ListBarMenu menuData={gorilkaData} /> <MenuButton />
      <CustomParallaxBanner
        isMobile={isMobile}
        imageUrl="/bar/likers.png"
        text="Лікери, настоянки, коняк"
      />
      <ListBarMenu menuData={likersData} /> <MenuButton />
      <CustomParallaxBanner
        imageUrl="/bar/kokteli.png"
        text="Коктейлі"
        isMobile={isMobile}
      />
      <ListKokteilsMenu menuData={kokteilsData} /> <MenuButton />
      <CustomParallaxBanner
        imageUrl="/bar/hotdrinks.jpg"
        text="Гарячі напої"
        isMobile={isMobile}
      />
      <HotDrinksList drinksData={HotDrinksData as unknown as HotDrinkItem[]} />{" "}
      <MenuButton />
      <CustomParallaxBanner
        imageUrl="/bar/bear.png"
        text="Пиво"
        isMobile={isMobile}
      />
      <ListBeerMenu beerData={BearData as unknown as BeerItem[]} />{" "}
      <MenuButton />
      <CustomParallaxBanner
        isMobile={isMobile}
        imageUrl="/bar/likers.png"
        text="Охолоджені напої"
      />
      <ColdDrinksList beerData={ColdDrinksData as unknown as COldDrinkItem[]} />
      <ReservationForm />
    </>
  );
};

export default MenuBar;
