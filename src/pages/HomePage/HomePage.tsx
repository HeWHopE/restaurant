import React, { useRef } from "react";
import styles from "./HomePage.module.scss";
import Button from "../../components/button/button";
import ReservationForm from "../../components/reservForm.tsx/reservForm";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const reservRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[110vh] overflow-hidden">
        <div className={styles["image-container"]}>
          <img className={styles.image} src="/01.jpg" alt="Background" />
          <div className={styles["image-overlay"]}></div>
        </div>
        <div className="absolute inset-0 bg-transparent bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1
            className="text-4xl md:text-7xl font-bold mb-6 text-center"
            style={{ fontFamily: "'Marck Script', cursive" }}
          >
            Ласкаво просимо!
            <br />
          </h1>{" "}
          <h1 className="text-2xl uppercase md:text-4xl font-bold mb-6 text-center">
            Кулінарні традиції, що варті Вашого смаку!{" "}
          </h1>
          <Button
            text="Резервувати стіл"
            className="hover:bg-red-500 text-red-600 hover:text-white mt-8"
            onClick={() => {
              if (reservRef.current) {
                reservRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>
      </section>

      {/* Restaurant Menu Section */}
      <section className="bg-white py-10 text-center">
        <h2 className="text-5xl font-bold my-19">МЕНЮ РЕСТОРАНУ</h2>
        <div className="flex flex-wrap gap-6 justify-center ">
          {[
            { text: "ДЕСЕРТИ", src: "/deserts.jpg", id: "desert" },
            { text: "ГОЛОВНІ СТРАВИ", src: "/main.jpg", id: "main" },
            { text: "БЕНКЕТИ", src: "/golovni.png", id: "banket" },
            { text: "ПРЕЙСКУРАНТ БАРУ", src: "/bar.jpg", id: "bar" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center w-[90vw] sm:w-[688px] sm:  h-[350px] lg:max-w-[461px] lg:max-h-[411px] xl:max-w-[560px] xl:max-h-[410px] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover shadow-lg "
                src={item.src}
                alt={item.text}
              />
              <Button
                className="absolute text-2xl top-1/2 left-1/2 transform -translate-x-1/2 curso -translate-y-1/2 py-2 px-4 bg-white text-black hover:bg-[#c7a254] hover:text-white"
                onClick={() => {
                  if (item.id === "bar") {
                    // Redirect directly for the "PREISKURANT BAR"
                    navigate("/preskurant");
                  } else if (item.id === "banket") {
                    // Save the menu item ID to localStorage and redirect to /menu
                    navigate("/bankety");
                  } else {
                    localStorage.setItem("selectedMenuItem", item.id);
                    navigate("/menu");
                  }
                }}
                text={item.text}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="bg-red-700 text-white py-22 text-center">
        <h2 className="text-2xl font-bold">ЧАСИ РОБОТИ</h2>
        <p className="text-lg mt-2">з 12:00 до 22:00</p>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-bold mb-8">ФОТОГАЛЕРЕЯ</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <img
            className="w-full object-cover rounded-lg shadow-lg max-w-[90vw] sm:max-w-[688px]  lg:max-w-[461px] xl:max-w-[560px] xl:max-h-[800px]"
            src="/Preview1.JPG"
            alt="Gallery Image 1"
          />
          <img
            className="w-full object-cover rounded-lg shadow-lg max-w-[90vw] sm:max-w-[688px]  lg:max-w-[461px]  xl:max-w-[560px] xl:max-h-[800px]"
            src="/preview2.JPG"
            alt="Gallery Image 2"
          />
          {/* <img
            className="w-full object-cover rounded-lg shadow-lg max-w-[90vw] sm:max-w-[688px]  lg:max-w-[461px]  xl:max-w-[560px] xl:max-h-[800px]"
            src="/preview3.JPG"
            alt="Gallery Image 3"
          />
          <img
            className="w-full object-cover rounded-lg shadow-lg max-w-[90vw] sm:max-w-[688px]  lg:max-w-[461px]  xl:max-w-[560px] xl:max-h-[800px]"
            src="/preview4.JPG"
            alt="Gallery Image 4"
          /> */}
        </div>
        <div
          className="relative text-center my-9  cursor-pointer"
          onClick={() => (window.location.href = "/gallery")}
        >
          <div className="w-full h-px bg-gray-300 mb-4"></div>
          <Button
            text=" Вiдобразити бiльше"
            className=" py-3 px-6 rounded-lg text-lg transition cursor-pointer !text-black"
          />
          <div className="w-full h-px bg-gray-300 mt-4"></div>
        </div>
      </section>

      <ReservationForm ref={reservRef} />
    </>
  );
};

export default HomePage;
