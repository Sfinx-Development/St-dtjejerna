import { Box, Typography, useMediaQuery, useTheme, Grid } from "@mui/material";
import { FC } from "react";
import Fade from "@mui/material/Fade";

const Hemstad: FC = () => {
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
          Hemstäd
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
            <strong>Skräddarsydd hemstädning i Borås</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Har du svårt att få vardagspusslet att gå ihop? Vill du få mer tid
            över till sådant som du verkligen uppskattar? Starta då ett
            städabonnemang och låt Städtjejerna göra jobbet! Vi är vana vid att
            ta hand om olika typer av boenden och behov runt om i Borås med
            omnejd. Därför skräddarsys hemstädningen med ett upplägg som matchar
            just dina unika behov. Kanske önskas lakansbyte, strykning eller
            hjälp med tvätt?
          </Typography>
          <Typography variant="body1" paragraph>
            Berätta vad du önskar få hjälp med så sammanställer vi allt
            tillsammans i en städbeskrivning där det också framgår vilka rum som
            ska ingå och hur du vill ha städningen utförd. Som kund hos oss
            bestämmer du själv intervallen på städningen. Det finns möjlighet
            att boka veckostäd, varannan vecka eller en gång i månaden.
          </Typography>
          <Typography variant="body1" paragraph>
            Städtjejerna sätter kundens trygghet i första rummet när du anlitar
            våra tjänster och därför utförs städningen på samma veckodag och av
            samma person vid varje tillfälle. Det ger ett resultat med god
            kvalitè och kontinuitet. Allt för att du ska kunna släppa tankarna
            på städningen och fokusera på annat under tiden.
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
        <Typography
          variant="h6"
          gutterBottom
          style={{ textAlign: "center", color: "#d29bbf" }}
        >
          Följande städmoment ingår som grund i abonnemanget
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{ padding: "0 20px", marginBottom: "20px" }}
        >
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#f4f4f4",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                style={{ color: "#d29bbf" }}
              >
                Alla rum:
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Dammsugning av golv, lister, elkontakter, element, mattor
                    och möbler med stoppning som till exempel soffor och
                    fåtöljer.
                  </Typography>
                </li>
                <li>
                  <Typography>Fuktmoppning av alla golv.</Typography>
                </li>
                <li>
                  <Typography>
                    Dammtorkning/våttorkning av alla öppna ytor som till exempel
                    bord, bänkar, fönsterbrädor, dörrar och hyllor samt
                    golvlister, socklar och lampor (som nås utan pall).
                  </Typography>
                </li>
                <li>
                  <Typography>Putsning av speglar.</Typography>
                </li>
                <li>
                  <Typography>
                    Lösa föremål plockas i ordning som till exempel leksaker,
                    kläder, tidningar.
                  </Typography>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#f4f4f4",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                style={{ color: "#d29bbf" }}
              >
                Badrum:
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Rengöring av badkar, dusch, handfat, kran och toalett samt
                    kaklet runt omkring.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Våttorkning av fläckar på badrumsskåp, väggar, tvättmaskin
                    och torktumlare.
                  </Typography>
                </li>
                <li>
                  <Typography>Putsning av speglar.</Typography>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#f4f4f4",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                style={{ color: "#d29bbf" }}
              >
                Kök:
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Våttorkning av kaklet ovanför diskbänken, fläckar på
                    köksluckor, kaffebryggare, mikrovågsugn invändigt och
                    utvändigt, brödrost, bord, stolar och
                  </Typography>
                </li>
                <li>
                  <Typography>Lägger in disken i diskmaskinen.</Typography>
                </li>
                <li>
                  <Typography>
                    Rengöring av diskhon, kranar och spis.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Tömning av sopor och utrymmet under diskbänken.
                  </Typography>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          gutterBottom
          style={{ textAlign: "center", color: "#d29bbf" }}
        >
          Utöver städabonnemang erbjuder vi även storstädning eller hemstäd vid
          enskilda tillfällen när behov finns.
        </Typography>
      </Box>
    </Fade>
  );
};

export default Hemstad;
