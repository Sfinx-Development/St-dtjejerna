import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Hemstäd",
      nav: "/hemstad",
      description: (
        <>
          Vi på <strong>Städtjejerna</strong> ser till att du kommer hem till
          ett <em>rent, nystädat och ett väldoftande hem</em>. Allt för att du
          ska kunna släppa tankarna på städningen och fokusera på annat under
          tiden. <br />
          <br />
          Vår hemstädning gör din vardag lättare så att du har mer tid att lägga
          på din hobby eller familj.
        </>
      ),
      image: "https://i.imgur.com/sKCfjdv.jpeg",
    },
    {
      id: 2,
      title: "Flyttstäd",
      nav: "/flyttstad",
      description: (
        <>
          Allt för att våra kunder ska känna sig{" "}
          <strong>nöjda och trygga</strong> med att flyttstädningen blir
          ordentligt genomförd. <br />
          <br />
          Ett <em>grundligt städschema</em> utformas tillsammans med kunden och
          vi går igenom varje moment och specifika önskemål punkt för punkt.{" "}
        </>
      ),
      image:
        "https://vitalhome.se/wp-content/uploads/2018/11/Flyttst%C3%A4d-1-1024x670.jpg",
    },
    {
      id: 3,
      title: "Företagsstäd",
      nav: "/foretagsstad",
      description: (
        <>
          Städtjejerna tar med sig de <strong>rengöringsmedlen</strong> som
          behövs och alla medel ingår i priset. <br />
          <br />
          Det finns möjlighet att beställa <em>förbrukningsmaterial</em> som
          exempelvis tvål, toalettpapper, och pappershanddukar via oss.
        </>
      ),
      image: "https://i.imgur.com/aCLoUIE.jpeg",
    },
  ];

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "white",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              flex: 1,
              height: 420,
              margin: { xs: 1, md: 0.5 },
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.015)",
              },
            }}
            onClick={() => navigate(service.nav)}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(128, 128, 128, 0.5)",
              }}
            />
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                padding: 2,
                textAlign: "center",
                width: "100%",
                color: "white",
                minHeight: "60%",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  position: "relative",
                  color: "white",
                  backgroundColor: "rgba(219, 190, 209, 0.8)",
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  paddingX: 2,
                }}
              >
                {service.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
