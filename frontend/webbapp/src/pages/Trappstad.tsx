import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import Fade from "@mui/material/Fade";

const Trappstad: FC = () => {
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
        border: "1px solid #d29bbf",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        width: isMobile ? "90%" : "100%",
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
        Trappstäd
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
        <strong>Ta trapporna med lätta steg</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Trapphuset är första anhalten i en fastighet och det är där de boende
        eller besökarna får sitt första intryck av inomhusmiljön. Regelbunden
        rengöring av trapporna bidrar till att ge en positiv känsla i samma
        ögonblick som du kliver in genom porten. Gör ett klokt val och anlita
        Städtjejerna som garanterar ett proffsigt utfört arbete med skinande
        rent resultat utan damm, grus och annan smuts så du kan ta trapporna med
        lätta steg.
      </Typography>
      <Typography variant="body1" paragraph>
        Vi finns i Borås med omnejd och vänder oss till fastighetsägare,
        företag, bostadsrättsföreningar och privatpersoner. Det lönar sig på
        flera sätt att vara noggrann med trappstädningen. Inomhusmiljön och
        luften håller sig fräsch och ökar hälsan och välbefinnandet för de som
        rör sig i byggnaden. Slitage och olyckor minskar också i samband med
        regelbunden städning av trapporna.
      </Typography>
      <Typography variant="body1" paragraph>
        En annan fördel är att Städtjejerna använder miljövänliga städprodukter
        som rengör skonsamt. Borås är en stad med varierande arkitektur och det
        återspeglar sig även i designen på trappor och trapphus som kan se ut på
        många olika sätt beroende på typ av byggnad, byggår och andra faktorer.
        Därför utformar Städtjejerna uppdraget efter varje kunds enskilda
        önskemål. Varje kund är unik för oss och bemöts därefter med en nära
        dialog kring upplägget. När du kontaktat oss kommer vi ut och tittar på
        trapphuset för att gå igenom hur vi på bästa sätt utför städningen.
        Tidsåtgång och intervall på tjänsten påverkar priset och vi presenterar
        en offert som matchar beställarens behov.
      </Typography>
      <Typography variant="body1" paragraph>
        Det finns också möjlighet att kombinera trappstädningen med andra
        tjänster hos oss såsom hemstäd, företagsstäd och fönsterputsning.
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

export default Trappstad;
