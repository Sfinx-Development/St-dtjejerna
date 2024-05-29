import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

const Fonsterputs: FC = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://i.imgur.com/VuRzYeq.jpeg"
        alt="Byggstäd"
        style={{
          width: "100%",
          maxWidth: "100vw",
          maxHeight: "50vh",
          objectFit: "cover",
        }}
      />
      <Typography variant="h2" gutterBottom style={{ textAlign: "center", color: "#d29bbf" }}>
        Fönsterputs
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>När du vill njuta av utsikten</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Skinande rena och blanka fönster är lyxigt oavsett om du vill njuta av
        utsikten i hemmet eller på arbetsplatsen. Det ger ett gott intryck och
        lyfter helhetskänslan i varje rum till en ny nivå. Kanske räcker inte
        tiden till för att hålla fönstren rena? Eller så gör meterhöga fönster
        det svårt att komma åt? Städtjejerna finns här för dig och erbjuder
        fönsterputs i toppklass. Vi vänder oss till privatkunder och
        företagskunder i Borås med omnejd och levererar ett resultat utan
        ränder, stänk eller flammor. Oavsett om du har en villa och behöver
        fönsterputsning av rutorna med sjöutsikt eller om du har en butik mitt i
        Borås stadskärna finns rätt resurser för att anpassa oss efter era
        önskemål.
      </Typography>
      <Typography variant="body1" paragraph>
        Fönsterputsning handlar inte bara om att själva rutan ska bli ren, utan
        allt runt omkring ska också skina. Därför torkar Städtjejerna alltid av
        fönsterbleck och karmar i samband med städuppdraget. Vi arbetar på samma
        noggranna sätt oavsett hur många fönster som ska tvättas. Det som
        skiljer arbetsinsatsen åt är hur lång tid jobbet tar och hur många
        fönsterputsare vi tar med oss. Vi tillhandahåller alla redskap och
        rengöringsmedel som behövs när vi utför våra uppdrag.
      </Typography>
      <Typography variant="body1" paragraph>
        Hur ofta du som kund vill boka in fönsterputsning diskuterar vi
        gemensamt utifrån dina önskemål och våra rekommendationer. Det
        viktigaste för Städtjejerna är att du blir nöjd med resultatet. Ett
        enkelt sätt att spara tid och slippa tänka på att göra nya bokningar
        från gång till gång är att teckna ett abonnemang så löper tjänsten på
        och tar inte upp någon tid. Goda möjligheter att kombinera
        fönsterputsningen med några av våra andra städtjänster såsom hemstäd,
        företagsstäd och trappstäd finns också. Välkomna att kontakta oss för
        mer information och en offert!
      </Typography>
    </Box>
  );
};

export default Fonsterputs;
