import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Info from "../components/Info";
import { useScreenSize } from "../screenSizeContext";
import HelmetWrapper from "../components/HelmetWrapper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Byggstad: FC = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  return (
    <>
      <HelmetWrapper
        title="Byggstädning i Borås | Professionell byggstäd – Städtjejerna"
        description="Behöver du byggstädning i Borås? Vi hjälper både privatpersoner och företag efter renovering eller nybygge. Miljövänligt, noggrant och klart för inflytt."
        url="https://www.stadtjejerna.se/byggstad"
        image="https://i.imgur.com/fL4AjiZ.jpeg"
      />

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
            color: "#555",
          }}
        >
          <Typography variant="h5" paragraph sx={{ color: "#555" }}>
            <strong>
              Byggstädning i Borås – för ett inflyttningsklart resultat
            </strong>
          </Typography>

          <Typography variant="body1" paragraph>
            Har du renoverat eller byggt nytt? Då behöver du en noggrann
            byggstädning innan inflytt. Vi på Städtjejerna erbjuder
            professionell byggstäd i Borås för både privatpersoner och företag –
            alltid med fasta priser och ett skinande resultat.
          </Typography>

          <Typography variant="body1" paragraph>
            Vi städar bort allt byggdamm, putsar ytor och ser till att varje
            hörn är redo för inflytt eller verksamhetsstart. Oavsett om det
            gäller en nyproducerad villa, ett nybyggt kontor eller en renoverad
            lägenhet så har vi rätt utrustning och erfarenhet.
          </Typography>

          <Typography variant="body1" paragraph>
            Vår byggstädning i Borås följer en tydlig checklista och utförs med
            miljövänliga produkter. Vi garanterar ett dammfritt, tryggt och
            fräscht slutresultat. Har du särskilda önskemål? Berätta för oss så
            anpassar vi uppdraget efter dina behov.
          </Typography>

          <Typography variant="body1" paragraph>
            Efter vår byggstädning kan du direkt börja möblera och inreda – utan
            att behöva oroa dig för slipdamm eller byggrester. Kontakta oss för
            mer information och få en kostnadsfri offert redan idag.
          </Typography>

          {/* <Typography variant="h6" paragraph sx={{ color: "#555" }}>
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
          </Typography> */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#555", marginTop: 8 }}
          >
            Vad ingår i vår byggstädning?
          </Typography>

          <Box
            component="ul"
            sx={{ listStyle: "none", paddingLeft: 0, marginTop: 1 }}
          >
            {[
              "Dammsugning och våttorkning av alla golvytor",
              "Rengöring av lister, dörrkarmar, eluttag och strömbrytare",
              "Fönsterputs – in- och utvändigt (vid behov)",
              "Avtorkning av alla ytor, hyllor och skåp – invändigt och utvändigt",
              "Borttagning av byggdamm från väggar, tak och svåråtkomliga ytor",
              "Rengöring av sanitetsutrustning, kök och vitvaror",
              "Tömning av sopor och byggrester",
            ].map((item, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 1,
                }}
              >
                <CheckCircleIcon sx={{ color: "#e48bb1", marginRight: 1 }} />
                <Typography variant="body1" sx={{ color: "#e48bb1" }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

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
