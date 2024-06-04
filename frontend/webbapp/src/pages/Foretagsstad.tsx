import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import Fade from "@mui/material/Fade";

const Foretagsstad: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        width: isMobile ? "90%" : "100%",
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
        Företagsstäd
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
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#d29bbf",
              marginBottom: "20px",
            }}
          />
      </Box>
     
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
        <Box style={{ flex: 1 }}>
          <Typography
            variant={isMobile ? "h6" : "h4"}
            gutterBottom
            style={{ color: "#d29bbf", textAlign: "center" }}
          >
            Kontor
          </Typography>
          <ul>
            <li>
              <Typography>
                Dammsugning av alla golv och mattor samt våttorkning av golven.
                Dammtorkning av alla fria ytor. Fläckar på speglar, lister och
                dörrar torkas bort. Papperskorgarna töms.
              </Typography>
            </li>
          </ul>
        </Box>
        <Box style={{ flex: 1 }}>
          <Typography
            variant={isMobile ? "h6" : "h4"}
            gutterBottom
            style={{ color: "#d29bbf", textAlign: "center" }}
          >
            Toaletter
          </Typography>
          <ul>
            <li>
              <Typography>
                Dammsugning och våttorkning av golven. Handfat och toaletter
                skuras både in- och utvändigt.
              </Typography>
            </li>
          </ul>
        </Box>
        <Box style={{ flex: 1 }}>
          <Typography
            variant={isMobile ? "h6" : "h4"}
            gutterBottom
            style={{ color: "#d29bbf", textAlign: "center" }}
          >
            Kök/Pentry
          </Typography>
          <ul>
            <li>
              <Typography>
                Dammsugning och våttorkning av golven. Arbetsbänk och diskbänk
                rengörs grundligt.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
    </Fade>
  );
};

export default Foretagsstad;
