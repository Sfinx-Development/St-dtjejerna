import { Box, Typography, useMediaQuery, useTheme, Grid } from "@mui/material";
import { FC } from "react";
import Fade from "@mui/material/Fade";

const Foretagsstad: FC = () => {
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
          width: "100%",
        }}
      >
        <Box
          sx={{
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
              width: "100%",
              height: "300px",
              backgroundImage: 'url("https://i.imgur.com/aCLoUIE.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(20%)",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#d29bbf",
            position: "relative",
            marginTop: isMobile ? "20px" : "40px",
            marginBottom: "40px",
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
            // backgroundColor: "#f4f4f4",
            padding: "20px",
            maxWidth: "900px",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            marginBottom: "20px",
          }}
        >
          <Typography variant="body1" paragraph>
            <strong>
              Städning på företag och kontor som skapar en god arbetsmiljö för
              dig och dina medarbetare.
            </strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Vi tillbringar många timmar i veckan på våra arbetsplatser och det
            är viktigt att trivas och ha möjlighet att fokusera på sina
            arbetsuppgifter. Städtjejerna riktar sig till en bred målgrupp och
            är redo att erbjuda sina professionella städtjänster till företag
            med stora kontorslandskap, industrilokaler eller mindre butiker och
            kontor runtom i Borås. Oavsett vilket som passar in på ditt företag
            är den gemensamma nämnaren att städningen skapar en god arbetsmiljö
            för dig och dina medarbetare samt för de som besöker företaget.
          </Typography>
          <Typography variant="body1" paragraph>
            Ett rent och fräscht intryck gör att alla kan fokusera på sitt jobb
            och slippa tänka på om papperskorgen blir tömd eller om dammråttorna
            i hörnen kommer städas bort. Det stärker också företagets varumärke
            och gör personalen friskare. Välkommen att kontakta Städtjejerna för
            att gå igenom vårt standardutbud samt göra anpassade tillägg som
            ditt företag önskar. Vi är flexibla och är lyhörda när det gäller
            varje kunds speciella önskemål.
          </Typography>
          <Typography variant="body1" paragraph>
            Städtjejerna tar med sig de rengöringsmedlen som behövs och alla
            medel ingår i priset. Det finns möjlighet att beställa
            förbrukningsmaterial som exempelvis tvål, toalettpapper, och
            pappershanddukar via oss.
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#d29bbf",
              margin: "20px 0",
            }}
          />
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            padding: "0 20px",
            marginBottom: "25px",
            gap: 5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {[
            {
              title: "Kontor",
              tasks: [
                "Dammsugning av alla golv och mattor samt våttorkning av golven. Dammtorkning av alla fria ytor. Fläckar på speglar, lister och dörrar torkas bort. Papperskorgarna töms.",
              ],
            },
            {
              title: "Toaletter",
              tasks: [
                "Dammsugning och våttorkning av golven. Handfat och toaletter skuras både in- och utvändigt.",
              ],
            },
            {
              title: "Kök/Pentry",
              tasks: [
                "Dammsugning och våttorkning av golven. Arbetsbänk och diskbänk rengörs grundligt.",
              ],
            },
          ].map((section, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Box
                sx={{
                  backgroundColor: "#f4f4f4",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  height: "100%",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: "#d29bbf" }}>
                  {section.title}
                </Typography>
                <ul>
                  {section.tasks.map((task, idx) => (
                    <li key={idx}>
                      <Typography>{task}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#d29bbf",
            marginY: 4,
            width: "98%",
          }}
        >
          Städtjejerna i 7Härad
        </Typography>
      </Box>
    </Fade>
  );
};

export default Foretagsstad;
