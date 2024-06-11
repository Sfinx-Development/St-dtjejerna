import { Box, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { FC } from "react";
import ContactForm from "../components/ContactForm";
import { useScreenSize } from "../screenSizeContext";

const AboutUs: FC = () => {
  const { isMobile } = useScreenSize();
  return (
    <Fade in timeout={500}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          border: "1px solid #d29bbf",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          padding: isMobile ? "10px" : "20px",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#d29bbf",
            position: "relative",
            marginTop: isMobile ? "40px" : "20px",
            marginBottom: "20px",
          }}
        >
          Om oss
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
        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            marginBottom: "20px",
            filter: "contrast(120%)",
          }}
        >
          <Typography variant="body1" paragraph sx={{ color: "#555" }}>
            <strong>Med känsla för ett dammfritt resultat</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Det började en dag för snart 10 år sedan. Två flickor slöt an på ett
            städföretag i Borås. Helt olika men ändå så lika. Victoria med
            hennes lugna harmoniska personlighet och Josephine med hennes
            spralliga, energiska personlighet. Hur bra fungerar inte dessa två
            personligheter ihop för att arbeta effektivt och noggrant och driva
            Städtjejerna i 7Härad tillsammans?
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              marginBottom: "20px",
              gap: "20px",
            }}
          >
            <Box
              component="img"
              src="https://i.imgur.com/FhsHGOs.jpeg"
              alt="Victoria"
              sx={{
                width: isMobile ? "100%" : "auto",
                maxHeight: "350px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                filter: "grayscale(20%)",
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: 25,
                  letterSpacing: 2,
                  marginBottom: "10px",
                }}
              >
                Victoria
              </Typography>
              <Typography variant="body1">
                <strong>Victoria</strong> har ett öga för detaljer. Fogborste,
                vikta papper, handdukar och en uppolerad kran är något hon gör
                som en klocka.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              marginBottom: "20px",
              gap: "20px",
            }}
          >
            <Box
              component="img"
              src="https://i.imgur.com/yZSk2SB.jpeg"
              alt="Josephine"
              sx={{
                width: isMobile ? "100%" : "auto",
                maxHeight: "350px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                filter: "grayscale(20%)",
                backgroundPosition: "top",
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: 25,
                  letterSpacing: 2,
                  marginBottom: "10px",
                }}
              >
                Josephine
              </Typography>
              <Typography variant="body1">
                <strong>Josephine</strong> dansar gärna loss med dammtrasan och
                dammsugaren efter sig. Det går undan men rent och prydligt blir
                det.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#d29bbf",
              marginBottom: "20px",
            }}
          />
        </Box>
        <ContactForm />
      </Box>
    </Fade>
  );
};

export default AboutUs;
