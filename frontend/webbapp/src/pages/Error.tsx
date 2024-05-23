import { Box, Typography } from "@mui/material";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflowX: "hidden",
          justifyContent: "center",
        }}
      >
        <Typography>Error sida</Typography>
      </div>
    </Box>
  );
}
