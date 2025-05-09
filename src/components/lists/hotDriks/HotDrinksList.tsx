import React from "react";
import styles from "./HotDrinksList.module.scss";
import teaData from "../../menu/BarMenu/tea.json";
export interface HotDrinkItem {
  name: string;
  english: string;
  price: number;
  volume: string;
}

interface HotDrinksListProps {
  drinksData: HotDrinkItem[];
}

const HotDrinksList: React.FC<HotDrinksListProps> = ({ drinksData }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 justify-center w-full  mt-10 font-sans">
        <ul className="font-[400] w-[80%] sm:w-[70%] xl:w-[80%]">
          {teaData.map((item, itemIndex) => {
            return (
              <li key={itemIndex} className="px-2 m-0">
                <div className="flex sm:text-xl text-[15px] flex-row w-full min-w-[15em] justify-between uppercase">
                  <h3 className={styles.title}>{item.name}</h3>
                  <span className={styles.price}>{item.price}</span>
                </div>

                <div className="mb-4 text-[12px] text-gray-500">
                  <span>
                    {item.english} —{" "}
                    {Object.entries(item.glassPrices)
                      .map(([size, price]) => `(${size} - ${price})`)
                      .join(", ")}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-10 justify-center w-full font-sans">
        <ul className="font-[400] w-[80%] sm:w-[70%] xl:w-[80%]">
          {drinksData.map((item, index) => (
            <li key={index} className="px-2 m-0">
              <div className="flex sm:text-xl text-[15px] flex-row w-full min-w-[15em] justify-between uppercase">
                <h3 className={`${styles.title}`}>{item.name}</h3>
                <span className={styles.price}>{item.price}</span>
              </div>
              <div className="mb-4 text-[12px] text-gray-500">
                <span>{item.english}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HotDrinksList;
