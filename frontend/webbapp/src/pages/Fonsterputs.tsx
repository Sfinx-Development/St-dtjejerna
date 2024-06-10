import { Box, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { FC } from "react";
import { useScreenSize } from "../screenSizeContext";

const Fonsterputs: FC = () => {
  const { isMobile } = useScreenSize();
  return (
    <Fade in timeout={500}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #d29bbf",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
            maxHeight: "600px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "350px",
              backgroundImage: 'url("https://i.imgur.com/2ntsmw7.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(40%)",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          {!isMobile && (
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "350px",
                backgroundImage: 'url("https://i.imgur.com/H4CO2Hw.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center 90%",
                transition: "transform 0.3s",
                // objectFit: "cover",
                filter: "grayscale(80%)",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          )}
        </Box>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#d29bbf",
            position: "relative",
            marginTop: isMobile ? "40px" : "20px",
            marginBottom: "40px",
          }}
        >
          Fönsterputs
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
            maxWidth: "900px",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            filter: "contrast(120%)",
            marginBottom: "20px",
          }}
        >
          <Typography variant="body1" paragraph>
            <strong>När du vill njuta av utsikten</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Skinande rena och blanka fönster är lyxigt oavsett om du vill njuta
            av utsikten i hemmet eller på arbetsplatsen. Det ger ett gott
            intryck och lyfter helhetskänslan i varje rum till en ny nivå.
            Kanske räcker inte tiden till för att hålla fönstren rena? Eller så
            gör meterhöga fönster det svårt att komma åt? Städtjejerna finns här
            för dig och erbjuder fönsterputs i toppklass. Vi vänder oss till
            privatkunder och företagskunder i Borås med omnejd och levererar ett
            resultat utan ränder, stänk eller flammor. Oavsett om du har en
            villa och behöver fönsterputsning av rutorna med sjöutsikt eller om
            du har en butik mitt i Borås stadskärna finns rätt resurser för att
            anpassa oss efter era önskemål.
          </Typography>
          <Typography variant="body1" paragraph>
            Fönsterputsning handlar inte bara om att själva rutan ska bli ren,
            utan allt runt omkring ska också skina. Därför torkar Städtjejerna
            alltid av fönsterbleck och karmar i samband med städuppdraget. Vi
            arbetar på samma noggranna sätt oavsett hur många fönster som ska
            tvättas. Det som skiljer arbetsinsatsen åt är hur lång tid jobbet
            tar och hur många fönsterputsare vi tar med oss. Vi tillhandahåller
            alla redskap och rengöringsmedel som behövs när vi utför våra
            uppdrag.
          </Typography>
          <Typography variant="body1" paragraph>
            Hur ofta du som kund vill boka in fönsterputsning diskuterar vi
            gemensamt utifrån dina önskemål och våra rekommendationer. Det
            viktigaste för Städtjejerna är att du blir nöjd med resultatet. Ett
            enkelt sätt att spara tid och slippa tänka på att göra nya bokningar
            från gång till gång är att teckna ett abonnemang så löper tjänsten
            på och tar inte upp någon tid. Goda möjligheter att kombinera
            fönsterputsningen med några av våra andra städtjänster såsom
            hemstäd, företagsstäd och trappstäd finns också. Välkomna att
            kontakta oss för mer information och en offert!
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
      </Box>
    </Fade>
  );
};

export default Fonsterputs;
