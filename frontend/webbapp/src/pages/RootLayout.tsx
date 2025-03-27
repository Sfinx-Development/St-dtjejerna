// import { Outlet } from "react-router-dom";
// import CustomHeader from "../components/CustomHeader";
// import Footer from "../components/Footer";
// import MobileHeader from "../components/MobileHeader";
// import ScrollToTop from "../components/ScrollToTop";
// import { useScreenSize } from "../screenSizeContext";

// const RootLayout = () => {
//   const { isMobile } = useScreenSize();
//   return (
//     <div
//     // style={{
//     //   display: "flex",
//     //   flexDirection: "column",
//     //   flex: 1,
//     //   height: "100vh",
//     //   alignItems: "center",
//     //   width: "100%",
//     //   margin: 0,
//     //   padding: 0,
//     // }}
//     >
//       {isMobile ? <MobileHeader /> : <CustomHeader />}
//       <main
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           flexGrow: 1,
//           width: "100%",
//           alignItems: "center",
//         }}
//       >
//         <ScrollToTop />
//         <Outlet />
//       </main>

//       <footer
//         style={{
//           width: "100%",
//           display: "flex",
//           flex: 1,
//           flexDirection: "column",
//           padding: 0,
//           margin: 0,
//           maxWidth: "none",
//         }}
//       >
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default RootLayout;
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
      {/* Hoppa till innehåll-länk för tillgänglighet */}
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

      <header aria-label="Webbplatsens huvudmeny">
        {isMobile ? <MobileHeader /> : <CustomHeader />}
      </header>

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
        <ScrollToTop />
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

