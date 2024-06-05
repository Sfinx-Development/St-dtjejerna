import { Box, Typography, useMediaQuery, useTheme, Grid } from "@mui/material";
import Fade from "@mui/material/Fade";

const Flyttstad = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sections = [
    {
      title: "Städoment som utförs i alla rum",
      items: [
        "Fönsterputsning",
        "Dammsugning och våtmoppning av golv, lister, dörrar, dörrkarmar, fönsterbrädor, fria ytor, element garderobsdörrar och skåpdörrar",
        "Torkning utvändligt och invändigt i garderober, skåp, och bokhyllor",
        "Dammtorkning av väggar, eluttag, ytterdörrar och lampor",
        "Spegelputsning",
      ],
    },
    {
      title: "Badrumsstädning",
      items: [
        "Rengöring av väggar och golv",
        "Putsning av blandare, synliga rör och duschmunstycke",
        "Avfettning och avkalkning av väggar och fogar",
        "Rengöring av golvbrunnen",
        "Rengöring av dusch/badkar, inklusive under badkaret",
        "Torkar badrumsskåp in- och utvändigt samt ovanpå",
        "Rengöring av kran, handfat och toalettstol samt utsidan av vitvaror och tvättmedelsbehållaren på tvättmaskinen",
      ],
    },
    {
      title: "Köksstädning",
      items: [
        "Rengöring av kyl och frys ut- och invändigt",
        "Rengöring av spis och ugn ut- och invändigt, inklusive plåtar och galler",
        "Rengöring av fläkt och fläktfilter (ej kolfilter)",
        "Rengöring in- och utvändigt samt ovanpå skåp, hyllor och lådor",
        "Rengöring av kakel/stänkskydd ovanför diskbänk samt under skåp, i besticklådor och torkning av socklar",
        "Rengöring av mikrovågsugn ut- och invändigt",
        "Torkning av diskmaskin in- och utvändigt",
        "Tömning och torkning av sopkorg/återvinningsbehållare",
        "Putsning av diskho, blandare, propp och sil",
      ],
    },
  ];

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
              backgroundImage: 'url("https://i.imgur.com/CiITz1N.jpeg")',
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
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          Flyttstäd
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
            <strong>Professionellt flyttstäd i Borås</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Dags för nya äventyr på en ny adress? Letar du efter en
            professionell städfirma i Borås med omnejd? Välkommen att boka
            flyttstäd hos Städtjejerna så tar vi hand om städningen medan du får
            tid över att lägga energin på den nya bostaden! Städtjejernas ledord
            är noggrannhet, professionalitet och omtanke.
          </Typography>
          <Typography variant="body1" paragraph>
            Allt för att våra kunder ska känna sig nöjda och trygga med att
            flyttstädningen blir ordentligt genomförd. Ett grundligt städschema
            utformas tillsammans med kunden och vi går igenom varje moment och
            specifika önskemål punkt för punkt. Du som kund kan också känna dig
            trygg med att Städtjejerna ser till att de som flyttar in i ditt
            gamla boende blir nöjda. De har sista ordet och kan kräva att vissa
            punkter ska åtgärdas. Detta behöver du inte tänka på, eftersom det
            ingår i vårt städuppdrag att följa upp eventuella anmärkningar och
            vi kan därför garantera att samtliga parter blir nöjda med
            resultatet i slutändan.
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
        <Grid
          container
          spacing={2}
          sx={{ padding: "0 20px", marginBottom: "20px", gap: 5 }}
        >
          {sections.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: "#f4f4f4",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  height: "100%",
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: "#d29bbf" }}>
                  {section.title}
                </Typography>
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <Typography>{item}</Typography>
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
          sx={{ textAlign: "center", color: "#d29bbf", marginY: "20px" }}
        >
          Städtjejerna i 7Härad
        </Typography>
      </Box>
    </Fade>
  );
};

export default Flyttstad;
