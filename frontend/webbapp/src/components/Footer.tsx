import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShopIcon from "@mui/icons-material/Shop";
import { Box, Divider, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        paddingY: 6,
        paddingLeft: 2,
        paddingRight: 2,
        textAlign: "center",
        backgroundColor: "lightgrey",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
        <ShopIcon sx={{ marginRight: 2 }} />
        <AppleIcon sx={{ marginRight: 2 }} />
        <InstagramIcon />
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <Typography fontWeight={600}>Kontakt</Typography>
        <Typography sx={{ marginTop: 1 }}>
          E-post: support@dailyvibe.com
        </Typography>
        <Typography>Telefon: +46 123 456 789</Typography>
        <Typography>
          Adress: DailyVibe AB, Gatan 123, 12345 Staden, Sverige
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: "grey" }} />
      <Box sx={{ marginY: 4 }}>
        <Typography sx={{ fontWeight: 600 }}>DailyVibe | Senora AB</Typography>
      </Box>
      <Divider sx={{ backgroundColor: "grey" }} />
      <Box sx={{ marginY: 4 }}>
        <Link
          href="/"
          sx={{ marginRight: 2, color: "black", textDecoration: "none" }}
        >
          INSTAGRAM
        </Link>
        <Link
          href="/"
          sx={{ marginRight: 2, color: "black", textDecoration: "none" }}
        >
          LINKEDIN
        </Link>
        <Link
          href="/"
          sx={{ marginRight: 2, color: "black", textDecoration: "none" }}
        >
          FACEBOOK
        </Link>
        <Link
          href="/"
          sx={{ marginRight: 2, color: "black", textDecoration: "none" }}
        >
          TIK TOK
        </Link>
        <Link href="/" sx={{ color: "black", textDecoration: "none" }}>
          PLAY STORE
        </Link>
      </Box>
    </Box>
  );
}
