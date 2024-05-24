import { Box, Typography } from "@mui/material";

export default function Services() {
  // const [serviceIdFocused, setServiceIdFocused] = useState(2);
  const services = [
    {
      id: 1,
      title: "Hemstäd",
      description: "Professionell städning av ditt hem",
      image:
        "https://www.pennmedicine.org/-/media/images/miscellaneous/random%20generic%20photos/cleaning_spray_closeup.ashx?mw=620&mh=408",
    },
    {
      id: 2,
      title: "Flyttstäd",
      description: "Noggrann städning vid flytt",
      image:
        "https://www.pennmedicine.org/-/media/images/miscellaneous/random%20generic%20photos/cleaning_spray_closeup.ashx?mw=620&mh=408",
    },
    {
      id: 3,
      title: "Företagsstäd",
      description: "Effektiv städning för ditt företag",
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
              height: 300,
              margin: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              position: "relative",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: 2,
            }}
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
              <Typography variant="h6">{service.title}</Typography>
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
