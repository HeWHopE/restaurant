import React from "react";
import styles from "./WineList.module.scss";
// Import your JSON data (or fetch it from an API if needed)
import winesData from "../../../components/menu/BarMenu/vines.json";

const WineList: React.FC = () => {
  return (
    <div className="font-sans py-8 ">
      {/* Apply font-sans here */}
      <div className="flex flex-col lg:flex-row gap-10  justify-center items-center ">
        {/* First two <ul> in 1 row, 2 columns */}
        {winesData.wines.slice(0, 2).map((category, index) => (
          <ul className="font-[400] w-[80%] lg:w-[35%] " key={index}>
            <h2 className="flex items-center justify-center">
              <p className={styles.categoryTitle}>{category.category}</p>
            </h2>
            {category.items.map((wine, idx) => (
              <li key={idx} className="sm:px-2  m-0 ">
                {/* Displaying Name, Volume, and Price on the Same Line */}
                <div className="flex sm:text-xl text-[15px] flex-row w-full mb-4  justify-between uppercase">
                  <h3 className={`${styles.title}`}>
                    {wine.name} ({wine.type}) {wine.volume}
                  </h3>
                  <span className={styles.price}>{wine.price}</span>
                </div>
                <div>
                  <div className="mb-4 text-[12px] text-gray-500">
                    <span>
                      {wine?.english && (
                        <>
                          {wine.english}
                          {wine.glassPrices && (
                            <>
                              {" "}
                              —{" "}
                              {Object.entries(wine.glassPrices)
                                .map(([size, price]) => `(${size} - ${price})`)
                                .join(", ")}
                            </>
                          )}
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Next two <ul> in 1 column, 1 row */}
      <div className="flex items-center justify-center flex-col">
        {" "}
        {winesData.wines.slice(2, 4).map((category, index) => (
          <ul className="font-[400] w-[80%] sm:w-[80%] " key={index}>
            <h2 className="flex items-center justify-center">
              <p className={styles.categoryTitle}>{category.category}</p>
            </h2>
            {category.items.map((wine, idx) => (
              <li key={idx} className="sm:px-2 ">
                {/* Displaying Name, Volume, and Price on the Same Line */}
                <div className="flex sm:text-xl text-[15px] flex-row w-full mb-4  justify-between uppercase">
                  <h3 className={`${styles.title}`}>
                    {wine.name} ({wine.type}) {wine.volume}
                  </h3>
                  <span className={styles.price}>{wine.price}</span>
                </div>{" "}
                <div>
                  <div className="mb-4 text-[12px] text-gray-500">
                    <span>
                      {wine?.english && (
                        <>
                          {wine.english}
                          {wine.glassPrices && (
                            <>
                              {" "}
                              —{" "}
                              {Object.entries(wine.glassPrices)
                                .map(([size, price]) => `(${size} - ${price})`)
                                .join(", ")}
                            </>
                          )}
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default WineList;
