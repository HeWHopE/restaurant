import React from "react";
import styles from "./BearList.module.scss";

interface Volume {
  [key: string]: string;
}

export interface BeerItem {
  name: string;
  english: string;
  size: string;
  price: string;
  volume: Volume;
}

interface BeerMenuProps {
  beerData: BeerItem[];
}

const ListBeerMenu: React.FC<BeerMenuProps> = ({ beerData }) => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center w-full mt-8 font-sans">
      <ul className="font-[400] w-[80%] sm:w-[35rem] xl:w-[80%]">
        {beerData.slice(0, 3).map((item, index) => (
          <li key={index} className="px-2 m-0">
            <div className="flex sm:text-xl text-[15px] flex-row w-full min-w-[15em] justify-between uppercase">
              <h3 className={`${styles.title}`}>{item.name}</h3>
              <span className={styles.price}>{item.price}</span>
            </div>
            <div className="mb-4 text-[12px] text-gray-500">
              <span>
                {item.english} —{" "}
                {Object.entries(item.volume)
                  .map(([size, price]) => `${size} - ${price}`)
                  .join(", ")}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Additionals to Beer Section */}
      <div className="font-[400] w-[80%] sm:w-[35rem] xl:w-[80%]">
        <div className="flex justify-center items-center">
          <h2 className={styles.categoryTitle}>Доповнення до пива</h2>
        </div>
        {beerData.slice(3).map((item, index) => (
          <div key={`additional-${index}`} className="px-2 m-0">
            <div className="flex sm:text-xl text-[15px] flex-row w-full min-w-[15em] justify-between uppercase">
              <h3 className={`${styles.title}`}>{item.name}</h3>
              <span className={styles.price}>{item.price}</span>
            </div>
            <div className="mb-4 text-[12px] text-gray-500">
              <span>{item.english}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBeerMenu;
