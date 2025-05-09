import React from "react";
import CustomParallaxBanner from "../../components/Parralax/CustomParralax";
import useWindowSize from "../../hooks/useWindowSize";

const Contact = () => {
  const { isMobile } = useWindowSize();
  return (
    <>
      {" "}
      {isMobile && <div className="w-full my-15 border-b " />}
      <CustomParallaxBanner
        imageUrl="/toplogo.png"
        text="Контакти"
        isMobile={isMobile}
      />
      <div className="py-16 px-4 md:px-10 bg-white flex flex-col lg:flex-row ">
        {" "}
        <div className="max-w-6xl mx-auto text-center w-[50%]">
          <h2 className="text-3xl font-semibold mb-8">Чекаємо на Вас</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Де нас знайти</h3>
            <p>02105 Україна, м Київ, вул. Шумского 3</p>
            <p className="mb-4">
              <span>(044) 295 57 79 | (093) 763 86 72</span>
            </p>
          </div>

          <div className="mb-8 ">
            <h3 className="text-xl font-semibold mb-4">Години роботи</h3>
            <p>Пн-Нд: 12:00-22:00</p>
          </div>
        </div>
        <div className=" flex-col flex items-center justify-center w-[100%] lg:w-[] ">
          {" "}
          <h3 className="text-xl font-semibold mb-4">Наша локація</h3>
          <div className="w-full h-96 mb-8 flex items-center justify-center">
            <img src="/map.png" alt="logo" className="w-[90%] h-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
