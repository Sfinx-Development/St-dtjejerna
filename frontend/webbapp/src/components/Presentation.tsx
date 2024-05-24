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
        height: { xs: "auto", md: 500 },
        width: "100%",
        position: "relative",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          zIndex: 1,
          width: { xs: "90%", md: "40%" },
          marginBottom: { xs: 4, md: 0 },
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: 2,
          textAlign: "center",
          position: { xs: "relative", md: "absolute" },
          left: { xs: "0", md: "50px" },
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        }}
      >
        <Typography sx={{ marginBottom: 2, padding: 1, fontSize: 40 }}>
          Städtjejerna i Borås
        </Typography>
        <Typography sx={{ padding: 1, fontSize: 30 }}>
          Låt Städtjejerna göra jobbet
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            borderColor: "#e3c5da",
            marginY: 4,
            padding: 1.5,
            backgroundColor: "transparent",
            "&:hover": {
              borderColor: "#e3c5da",
              backgroundColor: "#e3c5da",
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
          }}
        >
          Kontakta oss
        </Button>
        <div
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#e3c5da",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <IconButton
            sx={{
              marginY: 2,
              // "&:hover": {
              //   backgroundColor: "#dbbed1",
              //   transition: "background-color 0.3s ease, color 0.3s ease",
              // },
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ marginY: 2 }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ marginY: 2 }}>
            <MailOutlineIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
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
