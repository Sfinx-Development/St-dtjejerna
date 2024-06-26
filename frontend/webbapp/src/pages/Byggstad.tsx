import { Box, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { FC } from "react";
import { useScreenSize } from "../screenSizeContext";
import Info from "../components/Info";

const Byggstad: FC = () => {
  const { isMobile } = useScreenSize();
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
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
            maxHeight: "600px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "100%" },
              height: "400px",
              backgroundImage: 'url("https://i.imgur.com/fL4AjiZ.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center 35%",
              filter: "grayscale(40%)",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          {/* {!isMobile && (
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "350px",
                backgroundImage: 'url("https://i.imgur.com/R73TJ3i.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center 35%",
                transition: "transform 0.3s",
                // objectFit: "cover"
                filter: "grayscale(60%)",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          )} */}
        </Box>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#d29bbf",
            position: "relative",
            marginTop: "20px",
            marginBottom: "40px",
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
        <div
          style={{ height: 1.5, width: "100%", backgroundColor: "#e3c5da" }}
        />
        <Info />
      </Box>
    </Fade>
  );
};

export default Byggstad;
