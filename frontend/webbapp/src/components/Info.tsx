import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, IconButton, Typography } from "@mui/material";

export default function Info() {
  //   const { isMobile } = useScreenSize();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: { xs: "auto", md: 250 },
        width: "100%",
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "#f7f7f7",
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          mb: 2,
        }}
      >
        <Typography
          sx={{
            marginBottom: { xs: 1, md: 0 },
            fontWeight: "bold",
            color: "#d29bbf",
            letterSpacing: 2,
            fontSize: { xs: 30, md: 40 },
            ml: 3,
            mt: 2,
          }}
        >
          Villkor
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-end" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <IconButton
            sx={{
              color: "#333",
              transition: "transform 0.3s ease",
              "&:hover": {
                color: "#555",
                transform: "scale(1.1)",
              },
            }}
          >
            <MailOutlineIcon sx={{ fontSize: 34 }} />
          </IconButton>

          <IconButton
            sx={{
              color: "#333",
              transition: "transform 0.3s ease",
              "&:hover": {
                color: "#555",
                transform: "scale(1.1)",
              },
            }}
          >
            <a
              href="tel:033-7269676"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PhoneIcon sx={{ fontSize: 34 }} />
            </a>
          </IconButton>
          <Typography
            sx={{
              color: "#333",
              letterSpacing: 2,
              ml: 2,
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 1, md: 0 },
              mb: { xs: 2, md: 0 },
            }}
          >
            Vid frågor är du välkommen att kontakta oss
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flex: 1, padding: 2 }}>
          <CalendarTodayIcon sx={{ color: "#dbbed1", fontSize: 80, mr: 2 }} />
          <Box>
            <Typography
              sx={{
                color: "#333",
                letterSpacing: 2,
                fontWeight: 500,
                fontSize: 20,
              }}
            >
              Undvikande öppettider
            </Typography>
            <Typography sx={{ color: "#333", letterSpacing: 2 }}>
              Vi har semesterstängt veckorna 28-31. Röda dagar uteblir städet.
              Vid mån av tid tar vi det vid annat tillfälle.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flex: 1, padding: 2 }}>
          <CoronavirusIcon sx={{ color: "#dbbed1", fontSize: 80, mr: 2 }} />
          <Box>
            <Typography
              sx={{
                color: "#333",
                letterSpacing: 2,
                fontWeight: 500,
                fontSize: 20,
              }}
            >
              Vid sjukdom
            </Typography>
            <Typography sx={{ color: "#333", letterSpacing: 2 }}>
              Vi behöver bli informerade vid smittsamma sjukdomar.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flex: 1, padding: 2 }}>
          <LooksTwoIcon sx={{ color: "#dbbed1", fontSize: 80, mr: 2 }} />
          <Box>
            <Typography
              sx={{
                color: "#333",
                letterSpacing: 2,
                fontWeight: 500,
                fontSize: 20,
              }}
            >
              Uppsägan
            </Typography>
            <Typography sx={{ color: "#333", letterSpacing: 2 }}>
              Två veckors uppsägning gäller vid kontinuerligt städ.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
