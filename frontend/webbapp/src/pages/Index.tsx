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
      <PresentingImage />
      <Services />
      <CustomerReviews />
      <Security />
    </Box>
  );
}
