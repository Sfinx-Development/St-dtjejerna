import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function Services() {
  const [serviceIdFocused, setServiceIdFocused] = useState<null | number>(null);
  const services = [
    {
      id: 1,
      title: "Hemstäd",
      description:
        "Vi på Städtjejerna ser till att du kommer hem till ett ren, nystädat och ett väldoftande hem. Allt för att du ska kunna släppa tankarna på städningen och fokusera på annat under tiden. Vår hemstädning gör din vardag lättare så att du har mer tid att lägga på din hobby eller familj.",
      image:
        "https://www.pennmedicine.org/-/media/images/miscellaneous/random%20generic%20photos/cleaning_spray_closeup.ashx?mw=620&mh=408",
    },
    {
      id: 2,
      title: "Flyttstäd",
      description:
        "Allt för att våra kunder ska känna sig nöjda och trygga med att flyttstädningen blir ordentligt genomförd. Ett grundligt städschema utformas tillsammans med kunden och vi går igenom varje moment och specifika önskemål punkt för punkt. Du som kund kan också känna dig trygg med att Städtjejerna ser till att de som flyttar in i ditt gamla boende blir nöjda.",
      image:
        "https://www.pennmedicine.org/-/media/images/miscellaneous/random%20generic%20photos/cleaning_spray_closeup.ashx?mw=620&mh=408",
    },
    {
      id: 3,
      title: "Företagsstäd",
      description:
        "Städtjejerna tar med sig de rengöringsmedlen som behövs och alla medel ingår i priset. Det finns möjlighet att beställa förbrukningsmaterial som exempelvis tvål, toalettpapper, och pappershanddukar via oss.",
      image:
        "https://www.pennmedicine.org/-/media/images/miscellaneous/random%20generic%20photos/cleaning_spray_closeup.ashx?mw=620&mh=408",
    },
  ];

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
        paddingY: 4,
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
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              flex: 1,
              height: 400,
              margin: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              position: "relative",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            onMouseEnter={() => setServiceIdFocused(service.id)}
            onMouseLeave={() => setServiceIdFocused(null)}
            // onClick={() => setServiceIdFocused(service.id)}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: 2,
                padding: 2,
                textAlign: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                color={serviceIdFocused == service.id ? "#d29bbf" : "white"}
              >
                {service.title}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
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
