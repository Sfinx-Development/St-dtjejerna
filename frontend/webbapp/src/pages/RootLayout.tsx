import { Outlet } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";
import ScrollToTop from "../components/ScrollToTop";
import { useScreenSize } from "../screenSizeContext";

const RootLayout = () => {
  const { isMobile } = useScreenSize();

  return (
    <div>
      <a
        href="#main-content"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        Hoppa till innehåll
      </a>
      <ScrollToTop />
      {/* <header aria-label="Webbplatsens huvudmeny"> */}
      {isMobile ? <MobileHeader /> : <CustomHeader />}
      {/* </header> */}

      <main
        id="main-content"
        role="main"
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Outlet />
      </main>

      <footer
        aria-label="Webbplatsens sidfot"
        style={{
          width: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          padding: 0,
          margin: 0,
          maxWidth: "none",
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
