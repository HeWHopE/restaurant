import React from "react";
import styles from "./List.module.scss";

interface MenuItem {
  name: string;

  portionPrice: string;
  description?: string;
  portions: string;
}

interface ListMenuProps {
  menuData: MenuItem[];
}

const ListMenu: React.FC<ListMenuProps> = ({ menuData }) => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center w-full mt-8 font-sans">
      <ul className="font-[400] w-[80%] sm:w-[70%] xl:w-[80%]">
        {menuData.map((item, index) => (
          <li key={index} className="px-2 m-0">
            <div className="flex sm:text-xl text-[15px] flex-row w-full min-w-[15em] justify-between uppercase">
              <h3 className={`${styles.title}`}>{item.name}</h3>
              <span className={styles.price}>{item.portionPrice}</span>
            </div>
            <div className="mb-4 text-[12px] text-gray-500">
              <span>
                {item.description}
                {item.description && <> — {item.portions}</>}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMenu;
