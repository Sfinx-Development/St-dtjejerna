import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

const Hemstad: FC = () => {
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
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Skräddarsydd hemstädning i Borås</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Har du svårt att få vardagspusslet att gå ihop? Vill du få mer tid över
        till sådant som du verkligen uppskattar? Starta då ett städabonnemang
        och låt Städtjejerna göra jobbet! Vi är vana vid att ta hand om olika
        typer av boenden och behov runt om i Borås med omnejd. Därför
        skräddarsys hemstädningen med ett upplägg som matchar just dina unika
        behov. Kanske önskas lakansbyte, strykning eller hjälp med tvätt?
      </Typography>
      <Typography variant="body1" paragraph>
        Berätta vad du önskar få hjälp med så sammanställer vi allt tillsammans
        i en städbeskrivning där det också framgår vilka rum som ska ingå och
        hur du vill ha städningen utförd. Som kund hos oss bestämmer du själv
        intervallen på städningen. Det finns möjlighet att boka veckostäd,
        varannan vecka eller en gång i månaden.
      </Typography>
      <Typography variant="body1" paragraph>
        Städtjejerna sätter kundens trygghet i första rummet när du anlitar våra
        tjänster och därför utförs städningen på samma veckodag och av samma
        person vid varje tillfälle. Det ger ett resultat med god kvalitè och
        kontinuitet. Allt för att du ska kunna släppa tankarna på städningen och
        fokusera på annat under tiden.
      </Typography>
      <Typography variant="h6">
        Följande städmoment ingår som grund i abonnemanget:
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
        }}
      >
        <Box style={{ maxWidth: "30%" }}>
          <Typography variant="h4" gutterBottom style={{ color: "#d29bbf" }}>
            Alla rum:
          </Typography>
          <ul>
            <li>
              Dammsugning av golv, lister, elkontakter, element, mattor och
              möbler med stoppning som till exempel soffor och fåtöljer.
            </li>
            <li>Fuktmoppning av alla golv.</li>
            <li>
              Dammtorkning/våttorkning av alla öppna ytor som till exempel bord,
              bänkar, fönsterbrädor, dörrar och hyllor samt golvlister, socklar
              och lampor (som nås utan pall).
            </li>
            <li>Putsning av speglar.</li>
            <li>
              Lösa föremål plockas i ordning som till exempel leksaker, kläder,
              tidningar.
            </li>
          </ul>
        </Box>
        <Box style={{ maxWidth: "30%" }}>
          <Typography variant="h4" gutterBottom style={{ color: "#d29bbf" }}>
            Badrum:
          </Typography>
          <ul>
            <li>
              Rengöring av badkar, dusch, handfat, kran och toalett samt kaklet
              runt omkring.
            </li>
            <li>
              Våttorkning av fläckar på badrumsskåp, väggar, tvättmaskin och
              torktumlare.
            </li>
            <li>Putsning av speglar</li>
          </ul>
        </Box>
        <Box style={{ maxWidth: "30%" }}>
          <Typography variant="h4" gutterBottom style={{ color: "#d29bbf" }}>
            Kök:
          </Typography>
          <ul>
            <li>
              Våttorkning av kaklet ovanför diskbänken, fläckar på köksluckor,
              kaffebryggare, mikrovågsugn invändigt och utvändigt, brödrost,
              bord, stolar och
            </li>
            <li>Lägger in disken i diskmaskinen.</li>
            <li>Rengöring av diskhon, kranar och spis.</li>
            <li>Tömning av sopor och utrymmet under diskbänken.</li>
          </ul>
        </Box>
      </Box>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Utöver städabonnemang erbjuder vi även storstädning eller hemstäd vid
        enskilda tillfällen när behov finns.
      </Typography>
    </Box>
  );
};

export default Hemstad;
