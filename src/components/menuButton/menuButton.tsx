import styles from "./menuButton.module.scss"; // Adjust the path as needed
import { Book } from "lucide-react";

const MenuButton = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <button
          className={styles.seasidetmsButton}
          onClick={() => window.open("/menu.pdf", "_blank")}
        >
          <Book size={20} style={{ marginRight: "0.5em" }} />
          Переглянути все меню
        </button>
      </div>
      <div className="w-full my-20 border-b border-gray-300" />
    </>
  );
};

export default MenuButton;
