import { Box, Button, Typography, Link } from "@mui/material";

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
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: 2,
          textAlign: "center",
          position: { xs: "relative", md: "absolute" },
          left: { xs: "0", md: "50px" },
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: 2, padding: 2 }}>
          Städtjejerna i Borås
        </Typography>
        <Typography variant="h4" sx={{ marginBottom: 2, padding: 2 }}>
          Låt Städtjejerna göra jobbet
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            borderColor: "#e3c5da",
            backgroundColor: "transparent",
            "&:hover": {
              borderColor: "#e3c5da",
              backgroundColor: "#e3c5da",
              color: "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
          }}
        >
          Kontakta oss
        </Button>
        <Link
          href="/download"
          sx={{
            textDecoration: "none",
            marginY: 1,
            color: "black",
            fontSize: "1.25rem",
            "&:hover": {
              color: "#e3c5da",
              transition: "color 0.3s ease",
            },
          }}
        >
          <Typography variant="h6">OFFERT</Typography>
        </Link>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "100%" },
          height: { xs: 300, md: "100%" },
          background:
            "url(https://i.imgur.com/5fxRWmH.jpeg) no-repeat center center",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      />
    </Box>
  );
}
