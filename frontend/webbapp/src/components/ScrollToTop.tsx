// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     document.documentElement.scrollTop = 0;
//     document.body.scrollTop = 0;
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
