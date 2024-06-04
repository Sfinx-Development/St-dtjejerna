import FacebookIcon from "@mui/icons-material/Facebook";

import InstagramIcon from "@mui/icons-material/Instagram";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PresentingImage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",

        flexDirection: "row",

        alignItems: "center",

        justifyContent: "center",

        height: { xs: "400px", md: 500 },

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

          zIndex: 1,

          width: { xs: "100%", md: "40%" },

          textAlign: { xs: "center", md: "left" },

          position: "absolute",

          left: { xs: "0", md: "50px" },

          // backgroundColor: "rgba(0,0,0,0.5)",

          borderRadius: 2,
        }}
      >
        <Typography
          variant={isMobile ? "h3" : "h2"}
          sx={{
            marginBottom: 2,
            marginTop: 2,

            color: "white",

            letterSpacing: 2,

            fontWeight: "bold",
          }}
        >
          Städtjejerna i 7Härad
        </Typography>

        <Typography
          sx={{
            fontSize: 24,

            fontWeight: "bold",

            color: "white",

            letterSpacing: 2,
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
            <InstagramIcon sx={{ fontSize: 32 }} />
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
            <FacebookIcon sx={{ fontSize: 32 }} />
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
            <MailOutlineIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "100%" },

          height: { xs: 400, md: "100%" },

          zIndex: 0,
        }}
      >
        <video
          src="https://i.imgur.com/9HPDDud.mp4"
          autoPlay
          loop
          muted
          style={{
            width: "100%",

            height: "100%",

            objectFit: "cover",

            opacity: 0.8,
          }}
        />
      </Box>
    </Box>
  );
}
