import BathtubIcon from "@mui/icons-material/Bathtub";
import HomeIcon from "@mui/icons-material/Home";
import KitchenIcon from "@mui/icons-material/Kitchen";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../components/Info";
import { useScreenSize } from "../screenSizeContext";

const Hemstad: FC = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  const sections = [
    {
      title: "Städoment som utförs i alla rum",
      icon: (
        <HomeIcon sx={{ fontSize: 30, color: "#d29bbf", marginRight: 1 }} />
      ),
      items: [
        "Dammsugning av golv, lister, elkontakter, element, mattor och möbler med stoppning som till exempel soffor och fåtöljer.",
        "Fuktmoppning av alla golv.",
        "Dammtorkning och våttorkning av alla öppna ytor som till exempel bord, bänkar, fönsterbrädor, dörrar och hyllor samt golvlister, socklar och lampor (som nås utan pall).",
        "Putsning av speglar.",
      ],
    },
    {
      title: "Badrum",
      icon: (
        <BathtubIcon sx={{ fontSize: 30, color: "#d29bbf", marginRight: 1 }} />
      ),
      items: [
        "Rengöring av badkar, dusch, handfat, kran och toalett samt kaklet runt omkring.",
        "Våttorkning av fläckar på badrumsskåp, väggar, tvättmaskin och torktumlare.",
        "Putsning av speglar.",
      ],
    },
    {
      title: "Kök",
      icon: (
        <KitchenIcon sx={{ fontSize: 30, color: "#d29bbf", marginRight: 1 }} />
      ),
      items: [
        "Våttorkning av kaklet ovanför diskbänken, fläckar på köksluckor, kaffebryggare, mikrovågsugn invändigt och utvändigt, brödrost, bord, stolar och",
        "Lägger in disken i diskmaskinen.",
        "Rengöring av diskhon, kranar och spis.",
        "Tömning av sopor och utrymmet under diskbänken.",
      ],
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("https://i.imgur.com/0Rlm1ay.jpeg")',
          minHeight: "800px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px",
            borderRadius: "10px",
            zIndex: 1,
            maxWidth: "80%",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Hemstäd i Borås
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: isMobile ? "100%" : "900px",
          margin: "0 auto",
          padding: { xs: 4, md: 8 },
          borderRadius: "8px",
          // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h6" paragraph sx={{ color: "#555" }}>
          <strong>Skräddarsydd hemstädning i Borås</strong>
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#555" }}>
          Har du svårt att få vardagspusslet att gå ihop? Vill du få mer tid
          över till sådant som du verkligen uppskattar? Starta då ett
          städabonnemang och låt Städtjejerna göra jobbet! Vi är vana vid att ta
          hand om olika typer av boenden och behov runt om i Borås med omnejd.
          Därför skräddarsys hemstädningen med ett upplägg som matchar just dina
          unika behov. Kanske önskas lakansbyte, strykning eller hjälp med
          tvätt?
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#555" }}>
          Städtjejerna sätter kundens trygghet i första rummet när du anlitar
          våra tjänster och därför utförs städningen på samma veckodag och av
          samma person vid varje tillfälle. Det ger ett resultat med god kvalitè
          och kontinuitet. Allt för att du ska kunna släppa tankarna på
          städningen och fokusera på annat under tiden.
        </Typography>
        <Button
          aria-label="Till offertsidan"
          variant="contained"
          sx={{
            backgroundColor: "#c499b6",
            color: "#333",
            padding: "10px 20px",
            marginTop: "1.5rem",
            "&:hover": {
              backgroundColor: "#a58199",
            },
          }}
          onClick={() => {
            navigate("/offert");
          }}
        >
          Få ett kostnadsförslag
        </Button>
      </Box>

      <>
        {sections.map((section, index) => (
          <Box
            key={index}
            sx={{
              maxWidth: isMobile ? "100%" : "900px",
              margin: "0 auto",
              padding: { xs: 4, md: 8 },
              borderRadius: "8px",
              marginLeft: isMobile ? 0 : 15,
              // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              marginBottom: "2rem",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginBottom: "0.5rem", color: "#555" }}
            >
              <strong>{section.title}</strong>
            </Typography>
            {section.items.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.3rem",
                }}
              >
                <Box sx={{ marginRight: "0.5rem" }}>{section.icon}</Box>
                <Typography variant="body1">{item}</Typography>
              </Box>
            ))}
          </Box>
        ))}
      </>

      <Info />
    </>
  );
};

export default Hemstad;
