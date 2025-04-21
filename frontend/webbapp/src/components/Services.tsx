import { Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Hemstäd",
      nav: "/hemstad",
      description: (
        <>
          Vi på <strong>Städtjejerna</strong> är en städfirma som ser till att
          du kommer hem till ett rent, nystädat och ett väldoftande hem. Allt
          för att du ska kunna släppa tankarna på städningen och fokusera på
          annat under tiden. <br />
          <br />
          Välj{" "}
          <strong>
            veckostädning, hemstäd varannan vecka eller engångsstädning
          </strong>{" "}
          – du bestämmer. Vi är en personlig och pålitlig{" "}
          <strong>städfirma i Borås</strong> som
          {/* förenklar din vardag.<br />
          <br />
          <a href="/hemstad">Läs mer om vår hemstädning i Borås här</a>. */}
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
          Behöver du hjälp med <strong>flyttstädning i Borås</strong>? Vår{" "}
          <strong>städfirma</strong> utför flyttstäd med garanti – så att du kan
          fokusera på ditt nya hem och lämna det gamla skinande rent. <br />
          <br />
          <strong>Städtjejerna Borås</strong> erbjuder tydliga priser och
          punktliga leveranser. Allt för att våra kunder ska känna sig{" "}
          <strong>nöjda och trygga</strong> med att flyttstädningen blir
          ordentligt genomförd.
          {/* Ett <em>grundligt städschema</em> utformas tillsammans med kunden och
          vi går igenom varje moment och specifika önskemål punkt för punkt.{" "} */}
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
          Behöver ditt företag hjälp med{" "}
          <strong>företagsstädning i Borås</strong>?{" "}
          <strong>Städtjejerna</strong> erbjuder professionell städning för
          kontor, butiker och andra verksamheter – alltid med samma höga
          kvalitet. <br />
          <br />
          Vi tar med oss miljövänliga <strong>rengöringsmedel</strong> som ingår
          i priset. Det finns även möjlighet att beställa förbrukningsmaterial
          som tvål, toalettpapper och pappershanddukar via oss. <br />
          <br />
          Som en etablerad <strong>städfirma i Borås</strong> värdesätter vi
          punktlighet, tydlig kommunikation och en ren arbetsmiljö.{" "}
          {/* <a href="/foretagsstad">Läs mer om våra tjänster för företag här</a>. */}
        </>
      ),
      image: "https://i.imgur.com/aCLoUIE.jpeg",
    },
  ];

  // const navigate = useNavigate();

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
              handleOnClik={() => {
                window.location.href = service.nav;
              }}
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
