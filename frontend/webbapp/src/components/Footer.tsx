import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Divider, IconButton, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        paddingY: 6,
        paddingX: 2,
        textAlign: "center",
        background:
          "rgba(0, 0, 0, 0.7)",
        color: "white",
      }}
    >
      {/* Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginBottom: 4,
        }}
      >
        <IconButton
          aria-label="Location Icon"
          href="https://www.google.com/maps/dir//Tredje+Villagatan+17,+504+53+Bor%C3%A5s"
          sx={{
            color: "white",
            "&:hover": { color: "#dbbed1", transition: "color 0.3s ease" },
          }}
        >
          <LocationOnIcon sx={{ fontSize: 28 }} />
        </IconButton>
        <IconButton
          aria-label="Instagram Icon"
          href="https://www.instagram.com/stadtjejernai7harad/"
          sx={{
            color: "white",
            "&:hover": { color: "#dbbed1", transition: "color 0.3s ease" },
          }}
        >
          <InstagramIcon sx={{ fontSize: 28 }} />
        </IconButton>
        <IconButton
          aria-label="Facebook Icon"
          href="https://www.facebook.com/people/St%C3%A4dtjejerna-i-7H%C3%A4rad/100063807300331/"
          sx={{
            color: "white",
            "&:hover": { color: "#dbbed1", transition: "color 0.3s ease" },
          }}
        >
          <FacebookIcon sx={{ fontSize: 28 }} />
        </IconButton>
        <IconButton
          aria-label="Mail Icon"
          href="mailto:stadtjejerna@hotmail.com"
          sx={{
            color: "white",
            "&:hover": { color: "#dbbed1", transition: "color 0.3s ease" },
          }}
        >
          <MailOutlineIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Box>

      {/* Contact Information */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography fontWeight={600} sx={{ marginBottom: 2 }}>
          Kontakt
        </Typography>
        <Box>
          <Typography>
            <strong>Adress:</strong> Tredje villagatan 17, 50453 Borås
          </Typography>
          <Typography>
            <strong>E-post:</strong>{" "}
            <Link
              href="mailto:stadtjejerna@hotmail.com"
              sx={{
                color: "white",
                textDecoration: "none",
                "&:hover": { color: "#dbbed1" },
              }}
            >
              stadtjejerna@hotmail.com
            </Link>
          </Typography>
          <Typography>
            <strong>Telefon:</strong> 033-726 96 76
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#dbbed1", marginY: 4 }} />

      {/* Company Information */}
      <Box>
        <Typography fontWeight={600} fontSize={24} sx={{ marginBottom: 2 }}>
          Städtjejerna i 7-härad
        </Typography>
        <Typography variant="body2">
          © 2024 Städtjejerna i 7-härad. Alla rättigheter förbehållna.
        </Typography>
        <Typography variant="body2">
          Designad och utvecklad av{" "}
          <Link
            href="https://zeroett.se"
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "#dbbed1" },
            }}
          >
            Zeroett AB
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
