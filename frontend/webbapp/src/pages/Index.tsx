import { Box } from "@mui/material";
import CustomerLogos from "../components/CustomerLogos";
// import CustomerReviews from "../components/CustomerReviews";
import ContactForm from "../components/ContactForm";
import CookieBanner from "../components/Cookies";
import GoogleReviews from "../components/GoogleReviews";
import Info from "../components/Info";
import PresentingImage from "../components/Presentation";
import Security from "../components/Security";
import Services from "../components/Services";

export default function Index() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 0,
        height: "100%",
        margin: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <PresentingImage />
      <CookieBanner />

      {/* <Box
        sx={{
          height: 30,
          width: "100%",
          background: "linear-gradient(to bottom, #fff, #f7eaf2)",
        }}
      /> */}

      <Services />

      <GoogleReviews />

      {/* <Box
        sx={{
          height: 30,
          width: "100%",
          background: "linear-gradient(to bottom, #f7eaf2, #fff)",
        }}
      /> */}

      <CustomerLogos />
      {/* 
      <Box
        sx={{
          height: 30,
          width: "100%",
          background: "linear-gradient(to bottom, #fff, #f7eaf2)",
        }}
      /> */}

      <ContactForm />
      {/* <Box
        sx={{
          height: 30,
          width: "100%",
          background: "linear-gradient(to bottom, #f7eaf2, #fff)",
        }}
      /> */}

      <Security />

      {/* <Box
        sx={{
          height: 30,
          width: "100%",
          background: "linear-gradient(to bottom, #fff, #f7eaf2)",
        }}
      />
      <Box
        sx={{
          height: 30,
          width: "100%",
          background: "linear-gradient(to bottom, #f7eaf2, #fff)",
        }}
      /> */}

      <Info />

      {/* <Box
        sx={{
          height: 30,
          width: "100%",
          background: "linear-gradient(to bottom, #fff, #f7eaf2)",
        }}
      /> */}
    </Box>
  );
}
