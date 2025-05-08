import React from "react";
import styles from "./DjinList.module.scss";
import djinsData from "../../../../components/menu/djin.json";

const DjinList: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center w-full mt-8 font-sans">
      <ul className="font-[400] w-[25em] sm:w-[35rem] xl:w-[50rem]">
        {djinsData.map((djin, index) => (
          <li key={index} className="px-2 m-0">
            <div className="flex text-xl flex-row w-full  min-w-[15em] justify-between uppercase">
              <h3 className={`${styles.title}`}>
                {djin.name} - {djin.size}
              </h3>
              <span className={styles.price}>{djin.bottlePrice}</span>
            </div>
            <div className="mb-4 text-[12px] text-gray-500">
              <span>
                {djin.description} —{" "}
                {Object.entries(djin.glassPrices)
                  .map(([size, price]) => `(${size} - ${price})`)
                  .join(", ")}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DjinList;
