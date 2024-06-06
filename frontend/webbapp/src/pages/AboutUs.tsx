import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Fade from "@mui/material/Fade";
import { FC } from "react";
import ContactForm from "../components/ContactForm";

const AboutUs: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        }}
      >
        <Box
          component="img"
          src="https://i.imgur.com/FhsHGOs.jpeg"
          alt="Byggstäd"
          sx={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
            filter: "grayscale(20%)",
          }}
        />
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
            städföretag i Borås. Helt olika men ändå så lika. Viktoria med
            hennes lugna harmoniska personlighet och Josephine med hennes
            spralliga, energiska personlighet. Hur bra fungerar inte dessa två
            personligheter ihop för att arbeta effektivt och noggrant och driva
            Städtjejerna i 7Härad tillsammans?
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Viktoria</strong> har ett öga för detaljer. Fogborste, vikta
            papper, handdukar och en uppolerad kran är något hon gör som en
            klocka.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Josephine</strong> dansar gärna loss med dammtrasan och
            dammsugaren efter sig. Det går undan men rent och prydligt blir det.
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#d29bbf",
              marginBottom: "20px",
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            filter: "contrast(120%)",
          }}
        >
          <Typography variant="body1" paragraph>
            Vi skräddarsyr ett upplägg som matchar ditt unika boende eller
            företag. Kanske önskas lakansbyte i hemmet eller hjälp med
            återvinningen på företaget? Berätta vad du önskar få hjälp med så
            sammanställer vi allt tillsammans i en städbeskrivning där det också
            framgår vilka rum som ska ingå och hur du vill ha städningen utförd.
          </Typography>
          <Typography variant="body1" paragraph>
            Det ger ett resultat med god kvalitet och kontinuitet. Allt för att
            du ska kunna släppa tankarna på städningen och fokusera på annat
            under tiden.
          </Typography>
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
