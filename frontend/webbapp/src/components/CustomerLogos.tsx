import { Box, Grid, Typography } from "@mui/material";

const logos = [
  "https://i.imgur.com/BppOfZg.png",
  "https://i.imgur.com/SyKiY71.jpeg",
  "https://i.imgur.com/FX69JrS.png",
  "https://i.imgur.com/dwjZsiQ.png",
  "https://i.imgur.com/hltJ8rW.jpeg",
  "https://i.imgur.com/71EgxKY.jpeg",
  "https://i.imgur.com/daJbP0E.jpeg",
  "https://i.imgur.com/r6ZIX9Q.jpeg",
  "https://i.imgur.com/q9jDpa6.png",
  "https://i.imgur.com/z9imIe1.png",
];

export default function CustomerLogos() {
  return (
    <Box
      sx={{
        width: "100%",
        // background:
        //   "linear-gradient(to right, white, #d1acc4 20%, #d1acc4 80%, white)",
        backgroundColor: "#e3c5da",
        display: "flex",
        flexDirection: "column",

        paddingY: 4,
        textAlign: "center",
        overflow: "hidden",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 32, md: 40 },
          fontWeight: "700",
          color: "white",
          letterSpacing: 1,
          marginBottom: 6,
          textTransform: "uppercase",
        }}
      >
        Nöjda kunder
      </Typography>
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
