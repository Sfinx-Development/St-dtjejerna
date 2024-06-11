import { Box, Grid, Typography } from "@mui/material";
const logos = [
  "https://i.imgur.com/SyKiY71.jpeg",
  "https://i.imgur.com/dwjZsiQ.png",
  "https://i.imgur.com/q9jDpa6.png",
  "https://i.imgur.com/z9imIe1.png",
  "https://i.imgur.com/vFNMWwc.png",
  "https://i.imgur.com/5Q9mOW2.png",
];

export default function CustomerLogos() {
  return (
    <Box
      sx={{
        width: "100%",
        fontFamily: "Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        paddingY: 3,
        textAlign: "center",
        overflow: "hidden",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 4,
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 32, md: 40 },
            color: "#d29bbf",
            letterSpacing: 1,
            position: "relative",
            marginBottom: "15px",
          }}
        >
          Nöjda kunder
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
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        sx={{
          width: "100%",
          paddingX: 2,
        }}
        justifyContent="center"
        alignItems={"center"}
      >
        {logos.map((logo, index) => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={index}>
            <Box
              component="img"
              src={logo}
              alt={`Logo ${index + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 120,
                maxWidth: 140,
                objectFit: "contain",
                padding: { xs: 1, md: 2 },
                borderRadius: 2,
                backgroundColor: "white",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
