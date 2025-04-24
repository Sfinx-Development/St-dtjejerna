import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, key } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, key, id]);

  return null;
};

export default ScrollToTop;
