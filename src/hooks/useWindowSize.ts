import { useState, useEffect } from "react";
interface Size {
  width: number | undefined;
  height: number | undefined;
}

export enum ScreenBreakpoints {
  sm = 576,
  md = 769,
  lg = 992,
  xl = 1240,
  xxl = 1540,
}

interface useSizeHookReturn {
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean;
  isSmallMobile: boolean;
}

function useWindowSize(): useSizeHookReturn {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile:
      windowSize.width != undefined && windowSize.width < ScreenBreakpoints.lg,
    isSmallMobile:
      windowSize.width != undefined && windowSize.width < ScreenBreakpoints.md,
  };
}

export default useWindowSize;
