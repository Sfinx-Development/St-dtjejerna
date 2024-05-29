import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

const AboutUs: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%", 
      }}
    >
      <Box
        component="img"
        src="https://i.imgur.com/VuRzYeq.jpeg"
        alt="Byggstäd"
        sx={{
          width: "100vw", 
          maxHeight: "50vh",
          objectFit: "cover",
        }}
      />
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center", color: "#d29bbf" }}>
        Om oss
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Med känsla för ett dammfritt resultat</strong>
      </Typography>
      <Box
        sx={{
          backgroundColor: "#f4f4f4",
          padding: 3,
          maxWidth: "100%",

          margin: "0 auto",
          textAlign: "left",
          borderRadius: 1,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            padding: 3,
            maxWidth: "800px",

            margin: "0 auto",
            textAlign: "left",
            borderRadius: 1,
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
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
        </Box>
      </Box>
      <Typography variant="body1" paragraph>
        Vi skräddarsyr ett upplägg som matchar ditt unika boende eller företag.
        Kanske önskas lakansbyte i hemmet eller hjälp med återvinningen på
        företaget? Berätta vad du önskar få hjälp med så sammanställer vi allt
        tillsammans i en städbeskrivning där det också framgår vilka rum som ska
        ingå och hur du vill ha städningen utförd.
      </Typography>
      <Typography variant="body1" paragraph>
        Det ger ett resultat med god kvalitè och kontinuitet. Allt för att du
        ska kunna släppa tankarna på städningen och fokusera på annat under
        tiden.
      </Typography>
     
    </Box>
  );
};

export default AboutUs;
