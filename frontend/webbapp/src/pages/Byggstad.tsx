import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

const Byggstad: FC = () => {
  return (
    <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <img
        src="https://i.imgur.com/VuRzYeq.jpeg"
        alt="Byggstäd"
        style={{ width: "100%", maxWidth: "100vw",maxHeight: "50vh", objectFit: "cover" }}
      />
      <Typography variant="h2" gutterBottom style={{ textAlign: "center" }}>
        Byggstäd
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Med känsla för ett dammfritt resultat</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Har du renoverat hemmet eller är på väg att flytta in i ett nybygge? Är
        ditt företag nyrenoverat eller är ni på väg att flytta in i nya lokaler?
        Då är byggstädning första steget mot ett dammfritt resultat. En noggrann
        byggstädning kräver specialutrustning och yrkeskunnig personal.
        Städtjejerna har vad som krävs för att alla ytor ska vara fria från allt
        byggdamm efter avslutat jobb. Välkommen att kontakta oss för en offert
        och personlig genomgång av dina önskemål!
      </Typography>
      <Typography variant="body1" paragraph>
        Byggstädning handlar om mer än ett dammfritt resultat. Det gäller att
        bli av med det hälsofarliga byggdammet och en professionellt utförd
        byggstädning går igenom alla stora ytor samt skrymslen och vrår.
        Städtjejerna garanterar sina kunder att alla tecken på bygg eller
        renovering städas undan.
      </Typography>
      <Typography variant="body1" paragraph>
        Efter avslutat arbete står lokalerna eller hemmet redo för den roliga
        delen av renoveringen, nämligen själva möbleringen och annan inredning.
        Känn dig trygg med att ha gjort rätt val av städfirma i Borås. Vår
        checklista täcker behovet av byggstädning och utöver den är kunden
        alltid välkommen att berätta om sina speciella önskemål.
      </Typography>
    </Box>
  );
};

export default Byggstad;
