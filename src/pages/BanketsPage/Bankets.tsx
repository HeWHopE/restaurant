import React from "react";
import CustomParallaxBanner from "../../components/Parralax/CustomParralax";
import useWindowSize from "../../hooks/useWindowSize";
import ReservationForm from "../../components/reservForm.tsx/reservForm";

const Bankets = () => {
  const { isMobile } = useWindowSize();
  return (
    <>
      {" "}
      {isMobile && <div className="w-full my-15 border-b " />}
      <div className="w-full text-gray-800">
        {/* Header Section */}
        <CustomParallaxBanner
          imageUrl="/bankets/main.jpg"
          text="Банкети"
          isMobile={isMobile}
        />
        <div className="flex items-center justify-center h-[28rem]  bg-white text-black bg-opacity-50 text-center relative">
          <div className="w-[60%]">
            <h1
              className="text-2xl md:text-7xl font-bold text-[#e2e2e2]"
              style={{ fontFamily: "'Marck Script', cursive" }}
            >
              Ласкаво просимо{" "}
            </h1>{" "}
            <h1 className="text-5xl  font-thin text-[#943131] -mt-8  mb-10 ">
              Все для ідеального проведення Вашого заходу!
            </h1>
            <p className="text-xl  text-black opacity-75 uppercase">
              Ласкаво просимо до найкращого ресторану з українськими традиціями
              в самому серці Києва. Тут Ви відчуєте справжній смак автентичної
              української кухні та щедру душу нашої країни. Ми завжди раді Вас
              зустріти з теплою домашньою гостинністю та почастувати ароматними
              й смачними стравами.
            </p>
          </div>
        </div>

        {/* Photo Section */}
        <section className="py-16 px-4 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: "bankets/zala.JPG",
                  title: "Бенкетні зали",
                  description:
                    "На ваш вибір пропонуються 5 залів від 10 до 100 персон",
                },
                {
                  image: "bankets/specmenu.jpg",
                  title: "Спеціальне меню",
                  description: "Спеціальне бенкетне меню",
                },
                {
                  image: "bankets/podvirya.JPG",
                  title: "Затишне подвiр’я",
                  description: "До Ваших послуг у теплу пору року",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg text-center"
                >
                  <img
                    src={`/${item.image}`}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-gray-50">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Icon Section */}
        <section className="py-16 px-4 md:px-16 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="mb-4"></div>
              <p className="text-lg font-medium">
                Резервація в зимовий період: <strong>200 грн</strong>
              </p>
              <p className="text-lg font-medium">
                Резервація в літній період: <strong>Безкоштовно</strong>
              </p>
            </div>
          </div>
        </section>

        <ReservationForm />
      </div>
    </>
  );
};

export default Bankets;
