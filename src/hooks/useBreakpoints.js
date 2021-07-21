import { useEffect, useState } from "react";

export default function useBreakpoints() {
  const breakpoints = {
    smallMedium: 450,
    mediumLarge: 1360,
  };
  const [windowDimensions, setWindowDimensions] = useState({});

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < breakpoints.smallMedium) {
        setWindowDimensions({
          isDesktop: false,
          isMobile: true,
          isTablet: false,
          isMobileOrTablet: true,
        });
      }
      if (
        window.innerWidth >= breakpoints.smallMedium &&
        window.innerWidth < breakpoints.mediumLarge
      ) {
        setWindowDimensions({
          isDesktop: false,
          isMobile: false,
          isTablet: true,
          isMobileOrTablet: true,
        });
      }
      if (window.innerWidth >= breakpoints.mediumLarge) {
        setWindowDimensions({
          isDesktop: true,
          isMobile: false,
          isTablet: false,
          isMobileOrTablet: false,
        });
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // call once on page load to set initial breakpoint
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
