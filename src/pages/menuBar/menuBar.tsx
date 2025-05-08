import React from "react";
import { Book } from "lucide-react";
import styles from "./MenuBar.module.scss";
import WineList from "../../components/lists/WineList/WineList";
import ListMenu from "../../components/lists/mainList/List";
import ListKokteilsMenu from "../../components/lists/kokteilList/kokteilList";
import djinsData from "../../components/menu/djin.json";
import gorilkaData from "../../components/menu/gorilka.json";
import likersData from "../../components/menu/likers.json";
import kokteilsData from "../../components/menu/kokteil.json";
import CustomParallaxBanner from "../../components/Parralax/CustomParralax";
import useWindowSize from "../../hooks/useWindowSize";
import HotDrinksList, {
  type HotDrinkItem,
} from "../../components/lists/hotDriks/HotDrinksList";
import HotDrinksData from "../../components/menu/hotDrinks.json";
import ListBeerMenu, {
  type BeerItem,
} from "../../components/lists/BearList/BearList";
import BearData from "../../components/menu/bear.json";
import ColdDrinksData from "../../components/menu/coldDrinks.json";
import ColdDrinksList, {
  type COldDrinkItem,
} from "../../components/lists/ColdDrinks/ColdDrinks";

const MenuBar: React.FC = () => {
  const { isMobile } = useWindowSize();
  return (
    <>
      <CustomParallaxBanner
        imageUrl="/123123.png"
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
        imageUrl="/vina.png"
        text="Вина"
        isMobile={isMobile}
      />
      <WineList />
      <div className="w-full flex items-center justify-center">
        <button className={styles.seasidetmsButton}>
          <Book size={20} style={{ marginRight: "0.5em" }} />
          Переглянути всі вина
        </button>
      </div>
      <div className="w-full my-20 border-b border-gray-300" />
      <CustomParallaxBanner
        isMobile={isMobile}
        imageUrl="/djin.jpg"
        text="Lікер, віски, ром, джин"
      />
      <ListMenu menuData={djinsData} />
      <CustomParallaxBanner
        imageUrl="/gorilka.png"
        text="Горілка"
        isMobile={isMobile}
      />
      <ListMenu menuData={gorilkaData} />
      <CustomParallaxBanner
        isMobile={isMobile}
        imageUrl="/likers.png"
        text="Лікери, настоянки, коняк"
      />
      <ListMenu menuData={likersData} />
      <CustomParallaxBanner
        imageUrl="/likers.png"
        text="Коктейлі"
        isMobile={isMobile}
      />
      <ListKokteilsMenu menuData={kokteilsData} />

      <CustomParallaxBanner
        imageUrl="/likers.png"
        text="Коктейлі"
        isMobile={isMobile}
      />
      <ListKokteilsMenu menuData={kokteilsData} />

      <CustomParallaxBanner
        imageUrl="/hotdrinks.jpg"
        text="Гарячі напої"
        isMobile={isMobile}
      />
      <HotDrinksList drinksData={HotDrinksData as unknown as HotDrinkItem[]} />

      <CustomParallaxBanner
        imageUrl="/bear.png"
        text="Пиво"
        isMobile={isMobile}
      />
      <ListBeerMenu beerData={BearData as unknown as BeerItem[]} />
      <CustomParallaxBanner
        isMobile={isMobile}
        imageUrl="/likers.png"
        text="Охолоджені напої"
      />
      <ColdDrinksList beerData={ColdDrinksData as unknown as COldDrinkItem[]} />
    </>
  );
};

export default MenuBar;
