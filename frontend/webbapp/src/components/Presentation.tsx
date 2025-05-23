import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useScreenSize } from "../screenSizeContext";
import CustomButton from "./CustomButton";
import HelmetWrapper from "./HelmetWrapper"; // justera path om filen ligger annorlunda


export default function PresentingImage() {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
    <HelmetWrapper
      title="Städfirma i Borås | Städtjejerna – Hemstäd, Flyttstäd & Företagsstäd"
      description="Städtjejerna i Borås erbjuder trygg och professionell städning – hemstäd, flyttstädning, företagsstäd, fönsterputs och mer. Fasta priser & personlig service."
      url="https://www.stadtjejerna.se"
      image="https://i.imgur.com/T0MT49r.jpeg"
    />


    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: 800, md: 550 },
        width: "100%",
        position: "relative",
        fontFamily: "Roboto, sans-serif",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: isMobile ? 0 : 10,
          alignItems: isMobile ? "center" : "flex-start",
          paddingY: 4,
          zIndex: 2,
          width: "100%",
          textAlign: { xs: "center", md: "left" },
          fontFamily: "Roboto, sans-serif",
          position: "absolute",
          // left: { xs: "0", md: "50px" },
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      >
        <Typography
          variant={isMobile ? "h3" : "h2"}
          sx={{
            marginBottom: 2,
            color: "white",
            letterSpacing: 2,
            fontWeight: "600",
            textShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            component: "h1",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          Städtjejerna i 7Härad
        </Typography>

        <Typography
          sx={{
            fontSize: 26,
            fontWeight: "600",
            color: "white",
            letterSpacing: 2,
            textShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          Låt Städtjejerna göra jobbet
        </Typography>

        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 400,
            color: "white",
            marginTop: 2,
            maxWidth: 600,
            textShadow: "0px 0px 10px rgba(0,0,0,0.4)",
          }}
        >
          Din lokala <strong>städfirma i centrala Borås</strong>
        </Typography>

        <CustomButton
          ariaLabel="Till Startsidan"
          handleOnClik={() => navigate("/contact")}
          title="Kontakta oss"
          animation={true}
          disabled={false}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
            // alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Link
            to="https://www.instagram.com/stadtjejernai7harad/"
            style={{ textDecoration: "none" }}
          >
            <IconButton
              aria-label="Instagram ikon"
              sx={{
                color: "white",
                transition: "transform 0.3s ease",
                "&:hover": {
                  color: "#dbbed1",
                  transform: "scale(1.1)",
                  transition: "color 0.3s ease, transform 0.3s ease",
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: 26 }} />
            </IconButton>
          </Link>

          <Link
            to="https://www.facebook.com/p/St%C3%A4dtjejerna-i-7H%C3%A4rad-100063807300331/"
            style={{ textDecoration: "none" }}
          >
            <IconButton
              aria-label="Facebook Ikon"
              sx={{
                color: "white",
                transition: "transform 0.3s ease",
                "&:hover": {
                  color: "#dbbed1",
                  transform: "scale(1.1)",
                  transition: "color 0.3s ease, transform 0.3s ease",
                },
              }}
            >
              <FacebookIcon sx={{ fontSize: 26 }} />
            </IconButton>
          </Link>
          <Link
            aria-label="Öppna mail"
            to="mailto:stadtjejerna@hotmail.com"
            style={{ textDecoration: "none" }}
          >
            <IconButton
              aria-label="Mail Ikon"
              sx={{
                color: "white",
                transition: "transform 0.3s ease",
                "&:hover": {
                  color: "#dbbed1",
                  transform: "scale(1.1)",
                  transition: "color 0.3s ease, transform 0.3s ease",
                },
              }}
            >
              <MailOutlineIcon sx={{ fontSize: 26 }} />
            </IconButton>
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          zIndex: 1,
          position: "relative",
        }}
      >
        <picture>
          <source srcSet="stad1.webp" type="image/webp" />
          <img
            src="https://i.imgur.com/T0MT49r.jpeg"
            alt="girl cleaning"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              filter: "brightness(70%)",
              objectPosition: "center 32%",
            }}
          />
        </picture>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        />
      </Box>
    </Box>
    </>
  );
  
}
