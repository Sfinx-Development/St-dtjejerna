import BathtubIcon from "@mui/icons-material/Bathtub";
import KitchenIcon from "@mui/icons-material/Kitchen";
import HomeIcon from '@mui/icons-material/Home';
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Info from "../components/Info";
import { useScreenSize } from "../screenSizeContext";

const Flyttstad = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  const sections = [
    {
      title: "Städoment som utförs i alla rum",
      icon: (
        <HomeIcon sx={{ fontSize: 30, color: "#d29bbf", marginRight: 1 }} />
      ),
      items: [
        "Fönsterputsning",
        "Dammsugning och våtmoppning av golv, lister, dörrar, dörrkarmar, fönsterbrädor, fria ytor, element garderobsdörrar och skåpdörrar",
        "Torkning utvändligt och invändigt i garderober, skåp, och bokhyllor",
        "Dammtorkning av väggar, eluttag, ytterdörrar och lampor",
        "Spegelputsning",
      ],
    },
    {
      title: "Badrum",
      icon: (
        <BathtubIcon sx={{ fontSize: 30, color: "#d29bbf", marginRight: 1 }} />
      ),
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
      title: "Kök",
      icon: (
        <KitchenIcon sx={{ fontSize: 30, color: "#d29bbf", marginRight: 1 }} />
      ),
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
    <>
      <Box
        sx={{
          backgroundImage: 'url("https://i.imgur.com/KhVvozY.jpeg")',
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
          Flyttstäd i Borås
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: isMobile ? "100%" : "900px",
          margin: "0 auto",
          padding: { xs: 4, md: 8 },
          backgroundColor: "#fff",
          borderRadius: "8px",
          // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h6" paragraph sx={{ color: "#555" }}>
          <strong>Professionellt flyttstäd i Borås</strong>
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#555" }}>
          Dags för nya äventyr på en ny adress? Letar du efter en professionell
          städfirma i Borås med omnejd? Välkommen att boka flyttstäd hos
          Städtjejerna så tar vi hand om städningen medan du får tid över att
          lägga energin på den nya bostaden! Städtjejernas ledord är
          noggrannhet, professionalitet och omtanke.
        </Typography>
        <Button
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

export default Flyttstad;
