import { Box } from "@mui/material";
import PresentingImage from "../components/Presentation";
import Services from "../components/Services";
import CustomerReviews from "../components/CustomerReviews";
import Security from "../components/Security";

export default function Index() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "grey",
        padding: 0,
        height: "100%",
        margin: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <div style={{ height: 1, width: "100%", backgroundColor: "#e3c5da" }} />
      <PresentingImage />
      <div style={{ height: 1, width: "100%", backgroundColor: "#e3c5da" }} />
      <Services />
      <div style={{ height: 1, width: "100%", backgroundColor: "#e3c5da" }} />
      <CustomerReviews />
      <div style={{ height: 1, width: "100%", backgroundColor: "#e3c5da" }} />
      <Security />
      <div style={{ height: 1, width: "100%", backgroundColor: "#e3c5da" }} />
    </Box>
  );
}
