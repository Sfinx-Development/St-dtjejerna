import { Box, Typography } from "@mui/material";

export default function CustomerReviews() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        height: { xs: "auto", md: 500 },
        width: "100%",
        fontFamily: "Roboto, sans-serif",
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h2">KUND RECENSIONER</Typography>
    </Box>
  );
}
