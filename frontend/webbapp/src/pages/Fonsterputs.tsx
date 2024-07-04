import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import Info from "../components/Info";
import { useScreenSize } from "../screenSizeContext";
import { useNavigate } from "react-router-dom";

const Fonsterputs: FC = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          background:
            'url("https://i.imgur.com/H4CO2Hw.jpeg") center/cover no-repeat',
          minHeight: "800px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
          width: "100%",
          padding: 4,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px 40px",
            borderRadius: "10px",
            zIndex: 1,
            marginBottom: 20,
            position: "relative",
            maxWidth: "80%",
          }}
        >
          Fönsterputs
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: { xs: 2, md: 4 },
          gap: 4,
          backgroundColor: "#fff",
          position: "relative",
          zIndex: 2,
          marginTop: "-250px",
        }}
      >
        <Box
          sx={{
            maxWidth: "900px",
            width: "100%",
            minHeight: "500px",
            padding: { xs: 2, md: 4 },
            backgroundColor: "#f4f4f4",
            borderRadius: 2,
            filter: "contrast(120%)",
            textAlign: "left",
            marginX: isMobile ? 6 : 0,
            marginBottom: "20px",
          }}
        >
          <Typography variant="h6" paragraph sx={{ color: "#555" }}>
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
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#e3c5da",
              marginY: 4,
              paddingX: 3,
              paddingY: 1,
              backgroundColor: "#c499b6",
              animation: "moveUpDown 2s ease-in-out infinite",
              "&:hover": {
                borderColor: "#c499b6",
                backgroundColor: "#c499b6",
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
            }}
            onClick={() => {
              navigate("/offert");
            }}
          >
            Få ett kostnadsförslag
          </Button>
        </Box>

        <Box
          sx={{
            height: "2px",
            backgroundColor: "#d29bbf",
            marginBottom: "20px",
          }}
        />

        <Info />
      </Box>
    </>
  );
};

export default Fonsterputs;
