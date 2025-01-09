import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, IconButton, Typography } from "@mui/material";
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
        {/* <Divider sx={{ width: "100%" }} /> */}
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
          <Box
            sx={{
              flex: 1,
              padding: 3,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "16px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                marginBottom: 2,
                fontWeight: 600,
                textTransform: "uppercase",
                color: "#333",
              }}
            >
              Följ oss
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <IconButton
                aria-label="Instagram"
                sx={{
                  backgroundColor: "#833ab4",
                  color: "#fff",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "#8e44ad",
                  },
                }}
              >
                <InstagramIcon sx={{ fontSize: 36 }} />
              </IconButton>
              <IconButton
                aria-label="Facebook"
                sx={{
                  backgroundColor: "#3b5998",
                  color: "#fff",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "#344e86",
                  },
                }}
              >
                <FacebookIcon sx={{ fontSize: 36 }} />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              sx={{
                marginTop: 3,
                color: "#555",
                fontSize: "1rem",
                lineHeight: 1.5,
              }}
            >
              Följ oss på sociala medier för de senaste uppdateringarna från
              Städtjejerna!
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <EmbeddedMap width="100%" height="220px" />
          </Box>
        </Box>
        {/* <Divider sx={{ width: "100%" }} /> */}
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
