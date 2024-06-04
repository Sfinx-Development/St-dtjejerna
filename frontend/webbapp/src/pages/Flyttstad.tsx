import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import Fade from "@mui/material/Fade";

const Flyttstad = () => {
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
            maxWidth: "800px",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            width: "100%",
            padding: "20px",
            backgroundColor: "#f4f4f4",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ maxWidth: "100%", marginBottom: { xs: "20px", md: 0 } }}>
            <Typography variant="h4" gutterBottom sx={{ color: "#d29bbf" }}>
              Städoment som utförs i alla rum
            </Typography>
            <ul>
              <li>
                <Typography>Fönsterputsning</Typography>
              </li>
              <li>
                <Typography>
                  Dammsugning och våtmoppning av, golv, lister, dörrar,
                  dörrkarmar, fönsterbrädor, fria ytor, element garderobsdörrar
                  och skåpdörrar
                </Typography>
              </li>
              <li>
                <Typography>
                  Torkning utvändligt och invändigt i garderober, skåp, och
                  bokhyllor.
                </Typography>
              </li>
              <li>
                {" "}
                <Typography>
                  Dammtorkarning av väggar, eluttag, ytterdörrar och lampor{" "}
                </Typography>
              </li>
              <li>
                {" "}
                <Typography>Spegelputsning </Typography>
              </li>
            </ul>
          </Box>
          <Box sx={{ maxWidth: "100%", marginBottom: { xs: "20px", md: 0 } }}>
            <Typography variant="h4" gutterBottom sx={{ color: "#d29bbf" }}>
              Badrumsstädning
            </Typography>
            <ul>
              <li>
                <Typography>Rengöring av väggar och golv.</Typography>
              </li>
              <li>
                <Typography>
                  Putsning av blandare, synliga rör och duschmunstycke.
                </Typography>
              </li>
              <li>
                <Typography>
                  Avfettning och avkalkning av väggar och fogar.
                </Typography>
              </li>
              <li>
                <Typography>Rengöring av golvbrunnen.</Typography>
              </li>
              <li>
                <Typography>
                  Rengöring av dusch/badkar, inklusive under badkaret.
                </Typography>
              </li>
              <li>
                <Typography>
                  Torkar badrumsskåp in- och utvändigt samt ovanpå.
                </Typography>
              </li>
              <li>
                <Typography>
                  Rengöring av kran, handfat och toalettstol samt utsidan av
                  vitvaror och tvättmedelsbehållaren på tvättmaskinen.
                </Typography>
              </li>
            </ul>
          </Box>
          <Box sx={{ maxWidth: "100%", marginBottom: { xs: "20px", md: 0 } }}>
            <Typography variant="h4" gutterBottom sx={{ color: "#d29bbf" }}>
              Köksstädning
            </Typography>
            <ul>
              <li>
                <Typography>
                  Rengöring av kyl och frys ut- och invändigt.
                </Typography>
              </li>
              <li>
                <Typography>
                  Rengöring av spis och ugn ut- och invändigt, inklusive plåtar
                  och galler.
                </Typography>
              </li>
              <li>
                <Typography>
                  Rengöring av fläkt och fläktfilter (ej kolfilter).
                </Typography>
              </li>
              <li>
                <Typography>
                  Rengöring in- och utvändigt samt ovanpå skåp, hyllor och
                  lådor.
                </Typography>
              </li>
              <li>
                <Typography>
                  Rengöring av kakel/stänkskydd ovanför diskbänk samt under
                  skåp, i besticklådor och torkning av socklar.
                </Typography>
              </li>
              <li>
                <Typography>
                  Rengöring av mikrovågsugn ut- och invändigt.
                </Typography>
              </li>
              <li>
                <Typography>
                  Torkning av diskmaskin in- och utvändigt.
                </Typography>
              </li>
              <li>
                <Typography>
                  Tömning och torkning av sopkorg/återvinningsbehållare.
                </Typography>
              </li>
              <li>
                <Typography>
                  Putsning av diskho, blandare, propp och sil.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default Flyttstad;
