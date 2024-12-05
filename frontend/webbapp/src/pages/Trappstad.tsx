import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../components/Info";
import { useScreenSize } from "../screenSizeContext";

const Trappstad: FC = () => {
  const { isMobile } = useScreenSize();

  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          background:
            'url("https://i.imgur.com/gWL9NEP.jpeg") center/cover no-repeat',
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
          Trappstäd
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
            <strong>Ta trapporna med lätta steg</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Trapphuset är första anhalten i en fastighet och det är där de
            boende eller besökarna får sitt första intryck av inomhusmiljön.
            Regelbunden rengöring av trapporna bidrar till att ge en positiv
            känsla i samma ögonblick som du kliver in genom porten. Gör ett
            klokt val och anlita Städtjejerna som garanterar ett proffsigt
            utfört arbete med skinande rent resultat utan damm, grus och annan
            smuts så du kan ta trapporna med lätta steg.
          </Typography>
          <Typography variant="body1" paragraph>
            En annan fördel är att Städtjejerna använder miljövänliga
            städprodukter som rengör skonsamt. Borås är en stad med varierande
            arkitektur och det återspeglar sig även i designen på trappor och
            trapphus som kan se ut på många olika sätt beroende på typ av
            byggnad, byggår och andra faktorer. Därför utformar Städtjejerna
            uppdraget efter varje kunds enskilda önskemål. Varje kund är unik
            för oss och bemöts därefter med en nära dialog kring upplägget. När
            du kontaktat oss kommer vi ut och tittar på trapphuset för att gå
            igenom hur vi på bästa sätt utför städningen. Tidsåtgång och
            intervall på tjänsten påverkar priset och vi presenterar en offert
            som matchar beställarens behov.
          </Typography>
          <Typography variant="body1" paragraph>
            Det finns också möjlighet att kombinera trappstädningen med andra
            tjänster hos oss såsom hemstäd, företagsstäd och fönsterputsning.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#333",
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

export default Trappstad;
