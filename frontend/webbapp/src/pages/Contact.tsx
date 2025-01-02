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
import { useScreenSize } from "../screenSizeContext";

export default function Contact() {
  const images = [
    // "https://i.imgur.com/pbme5Ya.jpeg",
    "https://i.imgur.com/rbhnXJd.jpeg",
    "https://i.imgur.com/yZSk2SB.jpeg",
    "https://i.imgur.com/eYby9bC.jpeg",
  ];
  const { isMobile } = useScreenSize();
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
        {/* <Typography
          variant={isMobile ? "h4" : "h2"}
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#d29bbf",
            position: "relative",
            marginTop: isMobile ? "40px" : "20px",
            marginBottom: "20px",
          }}
        >
          Kontakt
        </Typography> */}
        <ContactForm />
        <Divider sx={{ width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            marginLeft: { xs: 0, sm: 2 },
            width: isMobile ? "95%" : "100%",
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
                  sx={{ color: "#833ab4" }}
                >
                  <InstagramIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="Facebook"
                  color="primary"
                  sx={{ color: "#3b5998" }}
                >
                  <FacebookIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              sx={{
                textAlign: isMobile ? "start" : "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Följ oss på sociala medier för de senaste uppdateringarna från
              Städtjejerna!
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
            width: "98%",
            padding: 2,
            flexWrap: "wrap",
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              alt={`Image ${index + 1}`}
              src={src}
              style={{
                flex: "1 1 250px",
                maxWidth: "100%",
                borderRadius: "8px",
                maxHeight: 350,
                transition: "transform 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>
    </Fade>
  );
}
