import AppleIcon from "@mui/icons-material/Apple";
import Facebook from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Divider, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        paddingY: 6,
        paddingLeft: 2,
        paddingRight: 2,
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 4,
          color: "white",
        }}
      >
        <Facebook sx={{ marginRight: 2 }} />
        <AppleIcon sx={{ marginRight: 2 }} />
        <InstagramIcon />
      </Box>
      <Box sx={{ marginBottom: 4, color: "white" }}>
        <Typography fontWeight={600}>Kontakt</Typography>
        <Box
          sx={{
            display: "flex",
            marginTop: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontWeight: 600, paddingRight: 1, color: "white" }}>
            E-post:
          </Typography>
          <Typography>stadtjejerna@hotmail.com</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: 1,
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Typography sx={{ fontWeight: 600, paddingRight: 1 }}>
            Telefon:
          </Typography>
          <Typography>033-726 96 76</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: 1,
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Typography sx={{ fontWeight: 600, paddingRight: 1 }}>
            Adress:
          </Typography>
          <Typography>Tredje villagatan 17 50453 Borås</Typography>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "white", color: "#c499b6" }} />
      <Box sx={{ marginY: 4 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 24, color: "white" }}>
          Städtjejerna i 7-härad
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: "white", color: "#c499b6" }} />
      <Box sx={{ marginY: 4, color: "white" }}>
        <Link
          href="https://www.instagram.com/stadtjejernai7harad/"
          sx={{ marginRight: 2, color: "white", textDecoration: "none" }}
        >
          INSTAGRAM
        </Link>
        <Link
          href="https://www.facebook.com/people/St%C3%A4dtjejerna-i-7H%C3%A4rad/100063807300331/"
          sx={{ marginRight: 2, color: "white", textDecoration: "none" }}
        >
          FACEBOOK
        </Link>
        <Link
          href="https://www.google.com/maps/dir//Tredje+Villagatan+17,+504+53+Bor%C3%A5s/@57.7204517,12.8688382,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x465aa11a4e01fc6f:0xa00f0b33e3233ba1!2m2!1d12.951238!2d57.7204785?entry=ttu"
          sx={{ color: "white", textDecoration: "none" }}
        >
          HITTA
        </Link>
      </Box>
    </Box>
  );
}
