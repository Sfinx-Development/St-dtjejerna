import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import { Box, IconButton, SvgIconProps, Typography } from "@mui/material";
import { useScreenSize } from "../screenSizeContext";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

type InfoItemProps = {
  icon: React.ReactElement<SvgIconProps>;
  title: string;
  description: string;
};

export default function Info() {
  const { isMobile } = useScreenSize();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        fontFamily: "Roboto, sans-serif",
        padding: { xs: 2, md: 4 },
        gap: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          paddingBottom: 1,
          textAlign: "center",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            color: "#333",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: 2,
          }}
        >
          Villkor
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "#666",
              fontSize: 14,
              letterSpacing: 1.2,
              textAlign: "center",
            }}
          >
            Vid frågor är du välkommen att kontakta oss
          </Typography>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <IconButton
              aria-label="Mail Icon"
              sx={{
                color: "#555",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <MailOutlineIcon sx={{ fontSize: isMobile ? 24 : 28 }} />
            </IconButton>
            <IconButton
              aria-label="Phone number"
              sx={{
                color: "#555",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <a
                href="tel:033-7269676"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <PhoneIcon sx={{ fontSize: isMobile ? 24 : 28 }} />
              </a>
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
          width: "100%",
          maxWidth: 1200,
        }}
      >
        <InfoItem
          icon={<AccessTimeIcon sx={{ color: "#e48bb1", fontSize: 48 }} />}
          title="Öppettider"
          description="Måndag till fredag: 8:00 - 16:00"
        />
        <InfoItem
          icon={<CalendarTodayIcon sx={{ color: "#e48bb1", fontSize: 48 }} />}
          title="Avvikande öppettider"
          description="Vi har semesterstängt veckorna 28-31. Röda dagar uteblir städet. Vid mån av tid tar vi det vid annat tillfälle."
        />
        <InfoItem
          icon={<CoronavirusIcon sx={{ color: "#e48bb1", fontSize: 48 }} />}
          title="Vid sjukdom"
          description="Vi behöver bli informerade vid smittsamma sjukdomar."
        />
        <InfoItem
          icon={<LooksTwoIcon sx={{ color: "#e48bb1", fontSize: 48 }} />}
          title="Uppsägning"
          description="Två veckors uppsägning gäller vid kontinuerligt städ."
        />
        <InfoItem
          icon={<AttachMoneyIcon sx={{ color: "#e48bb1", fontSize: 48 }} />}
          title="RUT-avdrag"
          description="RUT-avdrag som nekas av Skatteverket debiteras släpande av oss."
        />
      </Box>
    </Box>
  );
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, description }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#f9f9f9",
      borderRadius: 4,
      padding: 3,
      // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
      },
    }}
  >
    {icon}
    <Box sx={{ marginLeft: 2 }}>
      <Typography
        sx={{
          color: "#333",
          fontWeight: "bold",
          fontSize: 18,
          marginBottom: 0.5,
          letterSpacing: 1.5,
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ color: "#666", fontSize: 14, letterSpacing: 1.2 }}>
        {description}
      </Typography>
    </Box>
  </Box>
);
