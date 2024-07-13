import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, IconButton, SvgIconProps, Typography } from "@mui/material";
import { useScreenSize } from "../screenSizeContext";

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
        backgroundColor: "#f9f9f9",
        padding: { xs: 2, md: 4 },
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          width: "100%",
          maxWidth: 1200,
          paddingBottom: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            marginLeft: isMobile ? 2 : 0,
            color: "#d29bbf",
            letterSpacing: 2,
            fontSize: { xs: 28, md: 36 },
          }}
        >
          Villkor
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-end" },
            width: { xs: "100%", md: "auto" },
            gap: isMobile ? 2 : 2,
            marginLeft: isMobile ? 1 : 0,
            paddingX: 2,
            display: "flex",
            maxWidth: { xs: "80%", md: "100%" },
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          <IconButton
            sx={{
              color: "#333",
              transition: "transform 0.3s ease",
              padding: 0,
              "&:hover": {
                color: "#555",
                transform: "scale(1.1)",
              },
            }}
          >
            <MailOutlineIcon sx={{ fontSize: isMobile ? 20 : 28 }} />
          </IconButton>
          <IconButton
            sx={{
              color: "#333",
              transition: "transform 0.3s ease",
              padding: 0,
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
              <PhoneIcon sx={{ fontSize: isMobile ? 20 : 28 }} />
            </a>
          </IconButton>
          <Typography
            sx={{
              color: "#333",
              letterSpacing: 1.5,
              marginLeft: isMobile ? 0 : 1,
              textAlign: { xs: "center", md: "left" },
              fontSize: 14,
            }}
          >
            Vid frågor är du välkommen att kontakta oss
          </Typography>
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
          icon={<AccessTimeIcon sx={{ color: "#dbbed1", fontSize: 48 }} />}
          title="Öppettider"
          description="Måndag till fredag: 8:00 - 16:00"
        />
        <InfoItem
          icon={<CalendarTodayIcon sx={{ color: "#dbbed1", fontSize: 48 }} />}
          title="Avvikande öppettider"
          description="Vi har semesterstängt veckorna 28-31. Röda dagar uteblir städet. Vid mån av tid tar vi det vid annat tillfälle."
        />
        <InfoItem
          icon={<CoronavirusIcon sx={{ color: "#dbbed1", fontSize: 48 }} />}
          title="Vid sjukdom"
          description="Vi behöver bli informerade vid smittsamma sjukdomar."
        />
        <InfoItem
          icon={<LooksTwoIcon sx={{ color: "#dbbed1", fontSize: 48 }} />}
          title="Uppsägning"
          description="Två veckors uppsägning gäller vid kontinuerligt städ."
        />
        <InfoItem
          icon={<AttachMoneyIcon sx={{ color: "#dbbed1", fontSize: 48 }} />}
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
      backgroundColor: "#fff",
      borderRadius: 2,
      padding: 3,
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.02)",
      },
    }}
  >
    {icon}
    <Box sx={{ marginLeft: 2 }}>
      <Typography
        sx={{
          color: "#333",
          letterSpacing: 1.5,
          fontWeight: 500,
          fontSize: 18,
          marginBottom: 0.5,
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ color: "#333", letterSpacing: 1.2, fontSize: 14 }}>
        {description}
      </Typography>
    </Box>
  </Box>
);
