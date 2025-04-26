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
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px",
            borderRadius: "10px",
            zIndex: 1,
            maxWidth: "80%",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Byggstäd i Borås
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: isMobile ? "100%" : "900px",
          margin: "0 auto",
          padding: { xs: 4, md: 8 },
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h6" paragraph sx={{ color: "#555" }}>
          <strong>
            Byggstädning i Borås – för ett inflyttningsklart resultat
          </strong>
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#555" }}>
          Har du renoverat eller byggt nytt? Då behöver du en noggrann
          byggstädning innan inflytt. Vi på Städtjejerna erbjuder professionell
          byggstäd i Borås för både privatpersoner och företag – alltid med
          fasta priser och ett skinande resultat.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#555" }}>
          Vi städar bort allt byggdamm, putsar ytor och ser till att varje hörn
          är redo för inflytt eller verksamhetsstart. Oavsett om det gäller en
          nyproducerad villa, ett nybyggt kontor eller en renoverad lägenhet så
          har vi rätt utrustning och erfarenhet. 
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#555" }}>
          {/* Vår byggstädning i Borås följer en tydlig checklista och utförs med
          miljövänliga produkter.*/} Vi garanterar ett dammfritt, tryggt och
          fräscht slutresultat. Har du särskilda önskemål? Berätta för oss så 
          anpassar vi uppdraget efter dina behov.
        </Typography>
     
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
      {/* </Box> */}
      //{" "}
    </>
  );
};

export default Byggstad;
