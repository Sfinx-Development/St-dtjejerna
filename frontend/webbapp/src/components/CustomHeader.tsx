import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function CustomHeader2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        paddingY: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          marginLeft: isMobile ? 0 : 12,
        }}
      >
        <Link href="/" sx={{ marginY: 1 }}>
          <img
            src="https://i.imgur.com/pdj2vhA.png"
            alt="Logo saying dailyvibe"
            height={100}
            width={240}
          />
        </Link>
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginLeft: 10,
            }}
          >
            <Link
              href="/about"
              sx={{ textDecoration: "none", marginY: 1, color: "black" }}
            >
              <Typography variant="h6">LÄS MER</Typography>
            </Link>
            <div style={{ height: 20, width: 2, backgroundColor: "grey" }} />
            <Link
              href="/download"
              sx={{ textDecoration: "none", marginY: 1, color: "black" }}
            >
              <Typography variant="h6">LADDA NED</Typography>
            </Link>
          </Box>
        )}
      </Box>

      {isMobile && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            marginTop: 1,
          }}
        >
          <Link href="/about" sx={{ textDecoration: "none", marginY: 1 }}>
            <Typography variant="h6">LÄS MER</Typography>
          </Link>
          <Link href="/download" sx={{ textDecoration: "none", marginY: 1 }}>
            <Typography variant="h6">LADDA NED</Typography>
          </Link>
        </Box>
      )}
    </Box>
  );
}
