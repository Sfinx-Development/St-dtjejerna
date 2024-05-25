import { Box } from "@mui/material";

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
        paddingY: 1,
      }}
    >
      <div
        className="elfsight-app-3cb98f17-fb62-43ae-8296-e90226d10c1d"
        data-elfsight-app-lazy
      ></div>
    </Box>
  );
}
