import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

interface ParallaxBannerProps {
  imageUrl: string;
  text: string;
  isMobile?: boolean; // Make `isMobile` optional to avoid requiring it for every use
}

const CustomParallaxBanner: React.FC<ParallaxBannerProps> = ({
  imageUrl,
  text,
  isMobile = false, // Default to `false` if not provided
}) => {
  return (
    <>
      {!isMobile ? (
        <ParallaxBanner
          layers={[
            {
              image: imageUrl,
              speed: -20, // Add `speed` for consistent behavior
            },
            {
              speed: -10,
              children: (
                <div className="flex items-center justify-center h-full w-full">
                  <h1
                    className="text-white text-4xl md:text-6xl font-bold w-full text-center"
                    style={{ fontFamily: "'Marck Script', cursive" }}
                  >
                    {text}
                  </h1>
                </div>
              ),
            },
          ]}
          className="h-[25rem]"
        />
      ) : (
        <div className="relative h-[15rem] sm:h-[20rem]">
          <img
            src={imageUrl}
            alt={text}
            className="absolute z-1 inset-0 w-full h-full object-cover"
          />
          <div className="flex  items-center justify-center h-full w-full bg-black bg-opacity-50">
            <h1
              className="text-white z-2 text-4xl md:text-6xl font-bold w-full text-center"
              style={{ fontFamily: "'Marck Script', cursive" }}
            >
              {text}
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomParallaxBanner;
