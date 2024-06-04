import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Fade from "@mui/material/Fade";
import { FC } from "react";

const Byggstad: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Fade in timeout={500}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #d29bbf",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          width: isMobile ? "90%" : "100%",
        }}
      >
        <img
          src="https://i.imgur.com/VuRzYeq.jpeg"
          alt="Byggstäd"
          style={{
            width: "100%",
          maxWidth: "100vw",
          maxHeight: "50vh",
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
          filter: "grayscale(20%)",
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
          Byggstäd
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
        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            maxWidth: "900px",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            filter: "contrast(120%)",
            marginBottom: "20px",
          }}
        >
          <Typography variant="body1" paragraph sx={{ color: "#555" }}>
            <strong>Med känsla för ett dammfritt resultat</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Har du renoverat hemmet eller är på väg att flytta in i ett nybygge?
            Är ditt företag nyrenoverat eller är ni på väg att flytta in i nya
            lokaler? Då är byggstädning första steget mot ett dammfritt
            resultat. En noggrann byggstädning kräver specialutrustning och
            yrkeskunnig personal. Städtjejerna har vad som krävs för att alla
            ytor ska vara fria från allt byggdamm efter avslutat jobb. Välkommen
            att kontakta oss för en offert och personlig genomgång av dina
            önskemål!
          </Typography>
          <Typography variant="body1" paragraph>
            Byggstädning handlar om mer än ett dammfritt resultat. Det gäller
            att bli av med det hälsofarliga byggdammet och en professionellt
            utförd byggstädning går igenom alla stora ytor samt skrymslen och
            vrår. Städtjejerna garanterar sina kunder att alla tecken på bygg
            eller renovering städas undan.
          </Typography>
          <Typography variant="body1" paragraph>
            Efter avslutat arbete står lokalerna eller hemmet redo för den
            roliga delen av renoveringen, nämligen själva möbleringen och annan
            inredning. Känn dig trygg med att ha gjort rätt val av städfirma i
            Borås. Vår checklista täcker behovet av byggstädning och utöver den
            är kunden alltid välkommen att berätta om sina speciella önskemål.
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#d29bbf",
              marginBottom: "20px",
            }}
          />
        </Box>
      </Box>
    </Fade>
  );
};

export default Byggstad;
