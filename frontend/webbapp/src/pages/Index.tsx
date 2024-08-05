import { Box } from "@mui/material";
import CustomerLogos from "../components/CustomerLogos";
// import CustomerReviews from "../components/CustomerReviews";
import ContactForm from "../components/ContactForm";
import GoogleReviews from "../components/GoogleReviews";
import Info from "../components/Info";
import PresentingImage from "../components/Presentation";
import Security from "../components/Security";
import Services from "../components/Services";
import CookieBanner from "../components/Cookies";

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
      {/* <div style={{ height: 1.5, width: "100%", backgroundColor: "#e3c5da" }} /> */}
      <PresentingImage />
      <CookieBanner />
      <div style={{ height: 1.5, width: "100%", backgroundColor: "#e3c5da" }} />

      <Services />

      {/* <div style={{ height: 1, width: "100%", backgroundColor: "#e3c5da" }} />
      <CustomerReviews /> */}

      <div style={{ height: 1.5, width: "100%", backgroundColor: "#e3c5da" }} />
      <Security />

      <div style={{ height: 1.5, width: "100%", backgroundColor: "#e3c5da" }} />
      <GoogleReviews />

      <div style={{ height: 1.5, width: "100%", backgroundColor: "#e3c5da" }} />
      <CustomerLogos />
      <div style={{ height: 1, width: "100%", backgroundColor: "#e3c5da" }} />
      <ContactForm />
      <div style={{ height: 1.5, width: "100%", backgroundColor: "#e3c5da" }} />
      <Info />
      <div style={{ height: 1.5, width: "100%", backgroundColor: "#e3c5da" }} />
    </Box>
  );
}
