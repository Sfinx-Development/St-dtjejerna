import { Box, Grid, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { FC } from "react";
import { useScreenSize } from "../screenSizeContext";

const Hemstad: FC = () => {
  const { isMobile } = useScreenSize();

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
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
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
              width: { xs: "100%", md: "50%" },
              height: "350px",
              backgroundImage: 'url("https://i.imgur.com/sKCfjdv.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(30%)",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          {!isMobile && (
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "350px",
                backgroundImage: 'url("https://i.imgur.com/0Rlm1ay.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center 90%",
                transition: "transform 0.3s",
                // objectFit: "cover",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          )}
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
              margin: "20px 0",
            }}
          />
        </Box>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: "center", color: "#d29bbf" }}
        >
          Följande städmoment ingår som grund i abonnemanget
        </Typography>
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
              title: "Alla rum",
              tasks: [
                "Dammsugning av golv, lister, elkontakter, element, mattor och möbler med stoppning som till exempel soffor och fåtöljer.",
                "Fuktmoppning av alla golv.",
                "Dammtorkning/våttorkning av alla öppna ytor som till exempel bord, bänkar, fönsterbrädor, dörrar och hyllor samt golvlister, socklar och lampor (som nås utan pall).",
                "Putsning av speglar.",
                "Lösa föremål plockas i ordning som till exempel leksaker, kläder, tidningar.",
              ],
            },
            {
              title: "Badrum",
              tasks: [
                "Rengöring av badkar, dusch, handfat, kran och toalett samt kaklet runt omkring.",
                "Våttorkning av fläckar på badrumsskåp, väggar, tvättmaskin och torktumlare.",
                "Putsning av speglar.",
              ],
            },
            {
              title: "Kök",
              tasks: [
                "Våttorkning av kaklet ovanför diskbänken, fläckar på köksluckor, kaffebryggare, mikrovågsugn invändigt och utvändigt, brödrost, bord, stolar och",
                "Lägger in disken i diskmaskinen.",
                "Rengöring av diskhon, kranar och spis.",
                "Tömning av sopor och utrymmet under diskbänken.",
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
          Utöver städabonnemang erbjuder vi även storstädning eller hemstäd vid
          enskilda tillfällen när behov finns.
        </Typography>
      </Box>
    </Fade>
  );
};

export default Hemstad;
