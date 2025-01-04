import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Info from "../components/Info";
import { useScreenSize } from "../screenSizeContext";

const Byggstad: FC = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          background:
            'url("https://i.imgur.com/fL4AjiZ.jpeg") center/cover no-repeat',
          minHeight: "800px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
          width: "100%",
          padding: 4,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px 40px",
            borderRadius: "10px",
            zIndex: 1,
            marginBottom: 20,
            position: "relative",
            maxWidth: "80%",
          }}
        >
          Byggstäd
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: { xs: 2, md: 4 },
          gap: 4,
          backgroundColor: "#fff",
          position: "relative",
          zIndex: 2,
          marginTop: "-250px",
        }}
      >
        <Box
          sx={{
            maxWidth: "900px",
            width: "100%",
            minHeight: "500px",
            padding: { xs: 2, md: 4 },
            backgroundColor: "#f4f4f4",
            borderRadius: 2,
            filter: "contrast(120%)",
            textAlign: "left",
            marginX: isMobile ? 6 : 0,
            marginBottom: "20px",
          }}
        >
          <Typography variant="h6" paragraph sx={{ color: "#555" }}>
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
          <CustomButton
            title="Få ett kostnadsförslag"
            ariaLabel="Till offertsidan"
            disabled={false}
            animation={false}
            handleOnClik={() => navigate("/offert")}
          />
        </Box>

        <Box
          sx={{
            height: "2px",
            backgroundColor: "#d29bbf",
            marginBottom: "20px",
          }}
        />

        <Info />
      </Box>
    </>
  );
};

export default Byggstad;
