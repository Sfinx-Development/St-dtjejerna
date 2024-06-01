import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Box,
  Card,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import ContactForm from "../components/ContactForm";
import EmbeddedMap from "../components/MapComponent";

export default function Contact() {
  return (
    <Fade in timeout={500}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          gap: "20px",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#d29bbf",
            position: "relative",
            marginY: "20px",
          }}
        >
          Kontakt
          <Box
            sx={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "2px",
              backgroundColor: "#d29bbf",
              borderRadius: "5px",
              opacity: 0.7,
            }}
          />
        </Typography>
        <ContactForm />
        <Divider sx={{ width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            width: "100%",
            gap: "20px",
          }}
        >
          <Card
            sx={{
              padding: "20px",
              backgroundColor: "rgba(255,255,255,0.5)",
              borderRadius: "10px",
              flexGrow: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{ marginBottom: "20px", textAlign: "center" }}
            >
              Följ oss
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <IconButton
                  aria-label="Instagram"
                  color="primary"
                  sx={{ fontSize: "32px", color: "#833ab4" }}
                >
                  <InstagramIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="Facebook"
                  color="primary"
                  sx={{ fontSize: "32px", color: "#3b5998" }}
                >
                  <FacebookIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", marginTop: "20px" }}
            >
              Följ oss på sociala medier för de senaste
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginBottom: "20px", textAlign: "center" }}
            >
              uppdateringarna från Städtjejerna!
            </Typography>
          </Card>
          <EmbeddedMap width="100%" height="300px" />
        </Box>
        <Divider sx={{ width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "20px",
            width: "100%",
          }}
        >
          <img
            alt="girl in mirror"
            src="https://i.imgur.com/ojwnvJ9.jpeg"
            style={{
              width: "calc(25% - 10px)",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
            }}
          />
          <img
            alt="cleaning shower"
            src="https://i.imgur.com/o7ecxHq.jpeg"
            style={{
              width: "calc(25% - 10px)",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
            }}
          />
          <img
            alt="selfie in mirror"
            src="https://i.imgur.com/bznoNdQ.jpeg"
            style={{
              width: "calc(25% - 10px)",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
            }}
          />
          <img
            alt="selfie in mirror"
            src="https://i.imgur.com/BmGZV9K.jpeg"
            style={{
              width: "calc(25% - 10px)",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
            }}
          />
        </Box>
      </Box>
    </Fade>
  );
}
