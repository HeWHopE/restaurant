import React from "react";
import styles from "./WineList.module.scss";
// Import your JSON data (or fetch it from an API if needed)
import winesData from "../../../components/menu/vies.json";

const WineList: React.FC = () => {
  return (
    <div className=" font-sans py-8 w-full">
      {" "}
      {/* Apply font-sans here */}{" "}
      <div className="flex flex-wrap items-center gap-10 justify-center  w-full">
        {winesData.wines.map((category, index) => (
          <ul className="font-[400] w-[35rem]" key={index}>
            <h2 className="flex items-center justify-center">
              <p className={styles.categoryTitle}>{category.category}</p>
            </h2>
            {category.items.map((wine, idx) => (
              <li key={idx} className="px-2 m-0">
                {/* Displaying Name, Volume, and Price on the Same Line */}
                <div className="flex text-xl flex-row w-full mb-4 min-w-[20rem] justify-between uppercase">
                  <h3 className={`${styles.title}`}>
                    {wine.name} ({wine.type}) {wine.volume}
                  </h3>{" "}
                  <span className={styles.price}>{wine.price}</span>
                </div>

                {/* Displaying Type on a New Line */}
              </li>
            ))}
          </ul>
        ))}{" "}
      </div>
    </div>
  );
};

export default WineList;
