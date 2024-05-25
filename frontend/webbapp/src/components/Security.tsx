import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Security() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-around",
        height: { xs: "auto", md: 250 },
        width: "100%",
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          padding: 2,
          marginBottom: 2,
          maxWidth: 400,
        }}
        data-aos="fade-up"
      >
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          <SecurityIcon sx={{ marginRight: 1 }} />
          SÄKERHET
        </Typography>
        <Typography>
          För din trygghet och säkerhet genomför Städtjejerna noggranna
          bakgrundskontroller på alla våra anställda, inklusive kontroll av
          brottsregister. Vi ser till att våra medarbetare är pålitliga och på
          så sätt kan du känna dig trygg med att släppa in oss i ditt hem.
        </Typography>
      </Box>
      <Box
        sx={{
          height: { xs: "auto", md: "90%" },
          width: { xs: "90%", md: 1.5 },
          backgroundColor: "#e3c5da",
          marginY: { xs: 2, md: 0 },
        }}
      />
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          padding: 2,
          marginBottom: 2,
          maxWidth: 400,
        }}
        data-aos="fade-up"
      >
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          <LockIcon sx={{ marginRight: 1 }} />
          SEKRETESS
        </Typography>
        <Typography>
          Vi värnar om din integritet. Därför följer alla våra medarbetare
          strikta sekretessregler under varje städuppdrag. Du kan lita på att
          din information och ditt hem behandlas med största diskretion och
          respekt.
        </Typography>
      </Box>
    </Box>
  );
}
