import { Box, Grid, Typography } from "@mui/material";

const logos = [
  "https://i.imgur.com/BppOfZg.png",
  "https://i.imgur.com/q9jDpa6.png",
  "https://i.imgur.com/dwjZsiQ.png",
  "https://i.imgur.com/SyKiY71.jpeg",
  "https://i.imgur.com/FX69JrS.png",
  "https://i.imgur.com/hltJ8rW.jpeg",
  "https://i.imgur.com/71EgxKY.jpeg",
  "https://i.imgur.com/daJbP0E.jpeg",
  "https://i.imgur.com/r6ZIX9Q.jpeg",
  "https://i.imgur.com/z9imIe1.png",
];

export default function CustomerLogos() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fbf9fa",
        paddingY: 4,
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 4,
          fontWeight: "semibold",
          color: "#333",
        }}
      >
        Nöjda kunder
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {logos.map((logo, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <Box
              component="img"
              src={logo}
              alt={`Logo ${index + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 100,
                maxWidth: 200,
                objectFit: "contain",
                padding: 1,
                borderRadius: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
