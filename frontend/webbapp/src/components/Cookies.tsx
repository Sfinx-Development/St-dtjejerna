import { Box, Button, Link, Typography } from "@mui/material";
import { useState } from "react";

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    document.cookie = "cookieConsent=true; max-age=" + 60 * 60 * 24 * 365; // 1 year
    setAccepted(true);
  };

  if (accepted || document.cookie.includes("cookieConsent=true")) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#2d2d2d",
        color: "#ffffff",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        display: "flex",
        paddingY: 2,
        flexDirection: "column",
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: "8px", marginX: 2 }}>
        Vi använder Cookies för att förbättra din upplevelse på vår hemsida, det
        inkluderar att analysera trafik till vår sida via Google Analytics. När
        du klickar på "Acceptera", ger du oss tillåtelse att använda Cookies.
      </Typography>
      <Box sx={{ display: "flex", marginX: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#c499b6",
            "&:hover": {
              backgroundColor: "#c499b6",
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
          }}
          onClick={handleAccept}
        >
          Acceptera
        </Button>
        <Button
          variant="outlined"
          component={Link}
          href="https://cookieinformation.com/sv/vad-ar-en-cookie/"
          sx={{
            marginLeft: "8px",
            color: "#c499b6",
            borderColor: "#c499b6",
            "&:hover": {
              borderColor: "#c499b6",
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
          }}
        >
          Läs mer
        </Button>
      </Box>
    </Box>
  );
};

export default CookieBanner;
