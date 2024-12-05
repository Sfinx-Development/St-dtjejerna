import React, { useState, useEffect } from "react";
import { Box, Button, Link, Typography } from "@mui/material";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
    window.location.reload(); // Ladda om sidan för att aktivera Google Analytics
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#222",
        color: "#fff",
        zIndex: 9999,
        textAlign: "left",
        padding: { xs: "1rem", md: "1.5rem" },
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: "1rem", md: "2rem" },
      }}
    >
         <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.85rem", md: "1rem" },
          lineHeight: "1.6",
          maxWidth: { xs: "95%", md: "70%" },
          marginBottom: { xs: "0.5rem", md: "0" },
        }}
      >
        Vi använder cookies för att förbättra din upplevelse på vår hemsida.
        Detta inkluderar analys av trafik via Google Analytics. Genom att klicka
        på
        <Typography
          component="span"
          sx={{
            fontWeight: "bold",
            color: "#c499b6",
            marginLeft: "4px",
          }}
        >
          "Acceptera"
        </Typography>
        , ger du oss tillåtelse att använda cookies.{" "}
        <Link
          href="https://cookieinformation.com/sv/vad-ar-en-cookie/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#c499b6",
            textDecoration: "underline",
            "&:hover": {
              textDecoration: "none",
            },
          }}
        >
          Läs mer här
        </Link>
        .
      </Typography>

      <Box sx={{ display: "flex", marginX: 2 }}>
        <Button
          variant="contained"
          sx={{
            color: "#333",
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
          onClick={handleDecline}
          variant="outlined"
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
          Avvisa
        </Button>
      </Box>
    </Box>
  );
};

export default CookieBanner;
