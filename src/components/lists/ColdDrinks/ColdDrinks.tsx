import React from "react";
import styles from "./ColdDrinks.module.scss";

interface Volume {
  [key: string]: string;
}

export interface COldDrinkItem {
  name: string;
  description: string;
  price: string;
  glassprices: Volume;
}

interface BeerMenuProps {
  beerData: COldDrinkItem[];
}

const ColdDrinksList: React.FC<BeerMenuProps> = ({ beerData }) => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center w-full mt-8 font-sans">
      <ul className="font-[400] w-[80%] sm:w-[35rem] xl:w-[80%]">
        {beerData.map((item, index) => (
          <li key={index} className="px-2 m-0">
            <div className="flex sm:text-xl text-[15px] flex-row w-full min-w-[15em] justify-between uppercase">
              <h3 className={`${styles.title}`}>{item.name}</h3>
              <span className={styles.price}>{item.price}</span>
            </div>
            <div className="mb-4 text-[12px] text-gray-500">
              <span>
                {item.description} —{" "}
                {Object.entries(item.glassprices)
                  .map(([size, price]) => `${size} - ${price}`)
                  .join(", ")}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColdDrinksList;
