import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

const Flyttstad: FC = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://i.imgur.com/iMAEDV3_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        alt="Flyttstäd"
        style={{
          width: "100%",
          maxWidth: "100vw",
          maxHeight: "50vh",
          objectFit: "cover",
        }}
      />
      <Typography variant="h2" gutterBottom style={{ textAlign: "center" }}>
        Flyttstäd
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Professionell flyttstäd i Borås</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Dags för nya äventyr på en ny adress? Letar du efter en professionell
        städfirma i Borås med omnejd? Välkommen att boka flyttstäd hos
        Städtjejerna så tar vi hand om städningen medan du får tid över att
        lägga energin på den nya bostaden! Städtjejernas ledord är noggrannhet,
        professionalitet och omtanke.
      </Typography>
      <Typography variant="body1" paragraph>
        Allt för att våra kunder ska känna sig nöjda och trygga med att
        flyttstädningen blir ordentligt genomförd. Ett grundligt städschema
        utformas tillsammans med kunden och vi går igenom varje moment och
        specifika önskemål punkt för punkt. Du som kund kan också känna dig
        trygg med att Städtjejerna ser till att de som flyttar in i ditt gamla
        boende blir nöjda. De har sista ordet och kan kräva att vissa punkter
        ska åtgärdas. Detta behöver du inte tänka på, eftersom det ingår i vårt
        städuppdrag att följa upp eventuella anmärkningar och vi kan därför
        garantera att samtliga parter blir nöjda med resultatet i slutändan.
      </Typography>
      <Box
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          width: "100%",
          textAlign: "left",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Städoment som utförs i alla rum
        </Typography>
        <ul>
          <li>Fönsterputsning</li>
          <li>Dammsugning och våtmoppning av, golv, lister, dörrar, dörrkarmar, fönsterbrädor, fria ytor, element garderobsdörrar och skåpdörrar</li>
          <li>Torkning utvändligt och invändigt i garderober, skåp, och bokhyllor.</li>
          <li>Dammtorkarning av väggar, eluttag, ytterdörrar och lampor</li>
          <li>Spegelputsning</li>
        </ul>
        <Typography variant="h4" gutterBottom>
          Badrumsstädning
        </Typography>
        <ul>
          <li>Rengöring av väggar och golv.</li>
          <li>Putsning av blandare, synliga rör och duschmunstycke.</li>
          <li>Avfettning och avkalkning av väggar och fogar.</li>
          <li>Rengöring av golvbrunnen.</li>
          <li>Rengöring av dusch/badkar, inklusive under badkaret.</li>
          <li>Torkar badrumsskåp in- och utvändigt samt ovanpå.</li>
          <li>Rengöring av kran, handfat och toalettstol samt utsidan av vitvaror och tvättmedelsbehållaren på tvättmaskinen.</li>
        </ul>
        <Typography variant="h4" gutterBottom>
          Köksstädning
        </Typography>
        <ul>
          <li>Rengöring av kyl och frys ut- och invändigt.</li>
          <li>Rengöring av spis och ugn ut- och invändigt, inklusive plåtar och galler.</li>
          <li>Rengöring av fläkt och fläktfilter (ej kolfilter).</li>
          <li>Rengöring in- och utvändigt samt ovanpå skåp, hyllor och lådor.</li>
          <li>Rengöring av kakel/stänkskydd ovanför diskbänk samt under skåp, i besticklådor och torkning av socklar.</li>
          <li>Rengöring av mikrovågsugn ut- och invändigt.</li>
          <li>Torkning av diskmaskin in- och utvändigt.</li>
          <li>Tömning och torkning av sopkorg/återvinningsbehållare.</li>
          <li>Putsning av diskho, blandare, propp och sil.</li>
        </ul>
      </Box>
    </Box>
  );
};

export default Flyttstad;
