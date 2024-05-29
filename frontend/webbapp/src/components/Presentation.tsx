import FacebookIcon from "@mui/icons-material/Facebook";

import InstagramIcon from "@mui/icons-material/Instagram";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { Box, Button, IconButton, Typography } from "@mui/material";

export default function PresentingImage() {
  return (
    <Box
      sx={{
        display: "flex",

        flexDirection: { xs: "column", md: "row" },

        alignItems: "center",

        justifyContent: "center",

        height: { xs: "auto", md: 500 },

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

          alignItems: { xs: "center", md: "flex-start" },

          padding: 4,

          zIndex: 1,

          width: { xs: "90%", md: "40%" },

          textAlign: { xs: "center", md: "left" },

          position: "absolute",

          left: { xs: "0", md: "50px" },

          // backgroundColor: "rgba(0,0,0,0.5)",

          borderRadius: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: 2,

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
              borderColor: "#e3c5da",

              backgroundColor: "#e3c5da",

              color: "#333",

              transition: "background-color 0.3s ease, color 0.3s ease",
            },
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
            <InstagramIcon />
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
            <FacebookIcon />
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
            <MailOutlineIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "100%" },

          height: { xs: 300, md: "100%" },

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
