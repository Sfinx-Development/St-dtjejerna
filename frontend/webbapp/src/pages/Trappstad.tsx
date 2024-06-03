import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

const Trappstad: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
      <Typography
<<<<<<< HEAD
        variant="h2"
        gutterBottom
        style={{ textAlign: "center", color: "#d29bbf" }}
=======
        variant={isMobile ? "h4" : "h2"}
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#d29bbf",
          position: "relative",
          marginTop: isMobile ? "40px" : "20px",
          marginBottom: "20px",
        }}
>>>>>>> 630bd58672ead9d2b1e7c903118470323d9edca5
      >
        Trappstäd
      </Typography>
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
    </Box>
  );
};

export default Trappstad;
