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
        {/* <IconButton>
          <ArrowBackIosIcon />
        </IconButton> */}
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
              margin: { xs: 1, md: 2 },
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              color: "white",
              position: "relative",
              // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              // borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => navigate(service.nav)}
          >
            <Box
              sx={{
                // backgroundColor: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "rgba(128, 128, 128, 0.5)",

                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: 2,
                padding: 2,
                textAlign: "center",
                flexGrow: 1,
                width: "100%",
                minHeight: 230,
                // backgroundColor: "rgba(0,0,0,0.6)",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  borderColor: "#e3c5da",
                  marginY: 4,
                  paddingX: 3,
                  paddingY: 1,
                  backgroundColor: "#dbbed1",
                  fontSize: 24,

                  fontWeight: "bold",
                  // color: "#d29bbf",
                  // color: "white",
                  padding: 0,
                  letterSpacing: 2,
                  position: "relative",
                  marginBottom: "20px",
                }}
              >
                {service.title}
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
              <Typography
                variant="body1"
                // color="black"
                color="white"
                sx={{ position: "relative" }}
              >
                {service.description}
              </Typography>
            </Box>
          </Box>
        ))}
        {/* <IconButton>
          <ArrowForwardIosIcon />
        </IconButton> */}
      </Box>
    </Box>
  );
}
