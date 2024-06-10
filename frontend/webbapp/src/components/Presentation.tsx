import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../screenSizeContext";

export default function PresentingImage() {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 550,
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
          alignItems: { xs: "center", md: "flex-start" },
          paddingY: 4,
          zIndex: 2,
          width: { xs: "100%", md: "40%" },
          textAlign: { xs: "center", md: "left" },
          fontFamily: "Roboto, sans-serif",
          position: "absolute",
          // bottom: isMobile ? "50px" : "auto",
          left: { xs: "0", md: "50px" },
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
          }}
        >
          Låt Städtjejerna göra jobbet
        </Typography>

        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#e3c5da",
            marginY: 4,
            paddingX: 3,
            paddingY: 1,
            backgroundColor: "#dbbed1",
            "&:hover": {
              borderColor: "#c499b6",
              backgroundColor: "#c499b6",
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
          }}
          onClick={() => {
            navigate("/contact");
          }}
        >
          Kontakta oss
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: 2,
          }}
        >
          <IconButton
            sx={{
              color: "white",
              "&:hover": {
                color: "#dbbed1",
                transition: "color 0.3s ease",
              },
            }}
          >
            <InstagramIcon sx={{ fontSize: 34 }} />
          </IconButton>

          <IconButton
            sx={{
              color: "white",
              "&:hover": {
                color: "#dbbed1",
                transition: "color 0.3s ease",
              },
            }}
          >
            <FacebookIcon sx={{ fontSize: 34 }} />
          </IconButton>

          <IconButton
            sx={{
              color: "white",
              "&:hover": {
                color: "#dbbed1",
                transition: "color 0.3s ease",
              },
            }}
          >
            <MailOutlineIcon sx={{ fontSize: 34 }} />
          </IconButton>
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
        <img
          src="https://i.imgur.com/T0MT49r.jpeg"
          alt="girl cleaning"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            filter: "brightness(80%)",
            objectPosition: "center 32%",
          }}
        />
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
  );
}
