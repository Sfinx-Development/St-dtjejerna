import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import IframeComponent from "../components/IframeComponent";
import { useScreenSize } from "../screenSizeContext";

declare global {
  interface Window {
    //en kommentar
    google: {
      maps: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Map: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Marker: any;
      };
    };
    initMap: () => void;
  }
}

const Locations: FC = () => {
  const { isMobile } = useScreenSize();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: isMobile ? "30px" : "60px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h2"}
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#d29bbf",
          position: "relative",
          marginTop: isMobile ? "50px" : "30px",
          marginBottom: "30px",
        }}
      >
        Här finns vi idag
        <Box
          sx={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "2px",
            backgroundColor: "#d29bbf",
            borderRadius: "5px",
            opacity: 0.7,
          }}
        />
      </Typography>

      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Box
            sx={{
              textAlign: "center",
              color: "#000",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "30px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.2em", marginBottom: "20px" }}
            >
              Sandared ~ Dalsjöfors ~ Sjömarken ~ Fristad ~ Borås
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: "20px" }}>
              <strong>Telefon:</strong> 033-726 96 76
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: "20px" }}>
              <strong>E-post:</strong>{" "}
              <a href="mailto:stadtjejerna@hotmail.com">
                stadtjejerna@hotmail.com
              </a>
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: "20px" }}>
              <strong>Adress:</strong>
              <br />
              Tredje villagatan 17
              <br />
              50453 Borås
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              flex: 1,
            }}
          >
            <IframeComponent
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d114720.2916822142!2d12.796977152010824!3d57.70526010148039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x465aa11a4e01fc6f%3A0xa00f0b33e3233ba1!2sTredje%20Villagatan%2017%2C%20504%2053%20Bor%C3%A5s!3m2!1d57.7204785!2d12.951238!5e0!3m2!1sen!2sse!4v1717058610296!5m2!1sen!2sse"
              width="100%"
              height="450"
              style={{ border: 0 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Locations;
