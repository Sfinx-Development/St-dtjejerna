import { Box, Typography } from "@mui/material";
import { FC } from "react";

const Foretagsstad: FC = () => {
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
        src="https://i.imgur.com/iMAEDV3_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        alt="Flyttstäd"
        style={{
          width: "100%",
          maxWidth: "100vw",
          maxHeight: "50vh",
          objectFit: "cover",
        }}
      />
      <Typography
        variant="h2"
        gutterBottom
        style={{ textAlign: "center", color: "#d29bbf" }}
      >
        Företagsstäd
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>
          Städning på företag och kontor som skapar en god arbetsmiljö för dig
          och dina medarbetare.
        </strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Vi tillbringar många timmar i veckan på våra arbetsplatser och det är
        viktigt att trivas och ha möjlighet att fokusera på sina
        arbetsuppgifter. Städtjejerna riktar sig till en bred målgrupp och är
        redo att erbjuda sina professionella städtjänster till företag med stora
        kontorslandskap, industrilokaler eller mindre butiker och kontor runtom
        i Borås. Oavsett vilket som passar in på ditt företag är den gemensamma
        nämnaren att städningen skapar en god arbetsmiljö för dig och dina
        medarbetare samt för de som besöker företaget.
      </Typography>
      <Typography variant="body1" paragraph>
        Ett rent och fräscht intryck gör att alla kan fokusera på sitt jobb och
        slippa tänka på om papperskorgen blir tömd eller om dammråttorna i
        hörnen kommer städas bort. Det stärker också företagets varumärke och
        gör personalen friskare. Välkommen att kontakta Städtjejerna för att gå
        igenom vårt standardutbud samt göra anpassade tillägg som ditt företag
        önskar. Vi är flexibla och är lyhörda när det gäller varje kunds
        speciella önskemål.
      </Typography>
      <Typography variant="body1" paragraph>
        Städtjejerna tar med sig de rengöringsmedlen som behövs och alla medel
        ingår i priset. Det finns möjlighet att beställa förbrukningsmaterial
        som exempelvis tvål, toalettpapper, och pappershanddukar via oss.
      </Typography>
      <Box
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          width: "100%",
          textAlign: "left",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box style={{ width: "30%" }}>
          <Typography variant="h4" gutterBottom style={{ color: "#d29bbf" }}>
            Kontor
          </Typography>
          <ul>
            <li>
              Dammsugning av alla golv och mattor samt våttorkning av golven.
              Dammtorkning av alla fria ytor. Fläckar på speglar, lister och
              dörrar torkas bort. Papperskorgarna töms.
            </li>
          </ul>
        </Box>
        <Box style={{ width: "30%" }}>
          <Typography variant="h4" gutterBottom style={{ color: "#d29bbf" }}>
            Toaletter
          </Typography>
          <ul>
            <li>
              Dammsugning och våttorkning av golven. Handfat och toaletter
              skuras både in- och utvändigt.
            </li>
          </ul>
        </Box>
        <Box style={{ width: "30%" }}>
          <Typography variant="h4" gutterBottom style={{ color: "#d29bbf" }}>
            Kök/Pentry
          </Typography>
          <ul>
            <li>
              Dammsugning och våttorkning av golven. Arbetsbänk och diskbänk
              rengörs grundligt.
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Foretagsstad;
