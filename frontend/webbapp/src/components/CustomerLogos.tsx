import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const logos = [
  "https://i.imgur.com/SyKiY71.jpeg",
  "https://i.imgur.com/dwjZsiQ.png",
  "https://i.imgur.com/q9jDpa6.png",
  "https://i.imgur.com/z9imIe1.png",
  "https://i.imgur.com/vFNMWwc.png",
  "https://i.imgur.com/5Q9mOW2.png",
];

export default function CustomerLogos() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: 4,
        // background: "linear-gradient(to bottom, white, rgba(244,195,216,255))",
        textAlign: "center",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Rubrik */}
      <Typography
        variant={isMobile ? "h4" : "h4"}
        sx={{
          color: "#333",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: 2,
          marginTop: 4,
        }}
      >
        Nöjda Kunder
      </Typography>

      {/* Logobilder */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 2, md: 4 },
          marginTop: 3,
          paddingX: { xs: 2, md: 6 },
        }}
      >
        {logos.map((logo, index) => (
          <Box
            key={index}
            component="img"
            src={logo}
            alt={`Logo ${index + 1}`}
            sx={{
              width: "auto",
              height: "auto",
              maxHeight: 100,
              maxWidth: 120,
              objectFit: "contain",
              padding: { xs: 1, md: 2 },
              borderRadius: 3,
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
