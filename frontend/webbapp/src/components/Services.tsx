import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Hemstäd",
      nav: "/hemstad",
      description: (
        <>
          Vi på <strong>Städtjejerna</strong> ser till att du kommer hem till
          ett
          <em> rent, nystädat och ett väldoftande hem</em>. Allt för att du ska
          kunna släppa tankarna på städningen och fokusera på annat under tiden.{" "}
          <br />
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
      image: "https://i.imgur.com/liZhO4v.jpeg",
    },
    {
      id: 3,
      title: "Företagsstäd",
      nav: "/foretagsstad",
      description: (
        <>
          Städtjejerna tar med sig de <strong>rengöringsmedel</strong> som
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
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {services.map((service, index) => (
        <Box
          key={service.id}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            },
            alignItems: "center",
            justifyContent: "center",
            padding: 4,
            backgroundColor: index % 2 === 0 ? "#ffffff" : "#f0f0f0",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: "100%",
                maxWidth: "400px",
                maxHeight: "500px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              padding: { xs: 2, md: 4 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: 24, md: 32 },
                fontWeight: "bold",
                color: "#333",
                marginBottom: 2,
              }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: 16,
                lineHeight: 1.5,
                color: "#666",
                marginBottom: 4,
              }}
            >
              {service.description}
            </Typography>
            <CustomButton
              ariaLabel={`Till ${service.title}-sidan`}
              handleOnClik={() => navigate(service.nav)}
              title={`Till ${service.title}`}
              animation={false}
              disabled={false}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
