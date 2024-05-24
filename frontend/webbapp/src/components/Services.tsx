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
      image: "https://cdn.jwplayer.com/v2/media/tsK4pYnR/poster.jpg?width=720",
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
        "data:image/jpeg;base64,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",
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
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: 2,
                padding: 2,
                textAlign: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                color={serviceIdFocused == service.id ? "#d29bbf" : "black"}
              >
                {service.title}
              </Typography>
              <Typography variant="body2" color="black">
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
