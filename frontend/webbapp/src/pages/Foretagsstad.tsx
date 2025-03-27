// import BathtubIcon from "@mui/icons-material/Bathtub";
// import KitchenIcon from "@mui/icons-material/Kitchen";
// import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
// import { Box, Typography } from "@mui/material";
// import { FC } from "react";
// import { useNavigate } from "react-router-dom";
// import CustomButton from "../components/CustomButton";
// import Info from "../components/Info";
// import { useScreenSize } from "../screenSizeContext";
// import HelmetWrapper from "../components/HelmetWrapper";

// const Foretagsstad: FC = () => {
//   const { isMobile } = useScreenSize();
//   const navigate = useNavigate();

//   const sections = [
//     {
//       title: "Kontor",
//       icon: (
//         <MeetingRoomIcon
//           sx={{ fontSize: 30, color: "#e48bb1", marginRight: 1 }}
//         />
//       ),
//       items: [
//         "Dammsugning av alla golv och mattor samt våttorkning av golven. Dammtorkning av alla fria ytor. Fläckar på speglar, lister och dörrar torkas bort. Papperskorgarna töms.",
//       ],
//     },
//     {
//       title: "Toaletter",
//       icon: (
//         <BathtubIcon sx={{ fontSize: 30, color: "#e48bb1", marginRight: 1 }} />
//       ),
//       items: [
//         "Dammsugning och våttorkning av golven. Handfat och toaletter skuras både in- och utvändigt.",
//       ],
//     },
//     {
//       title: "Kök/Pentry",
//       icon: (
//         <KitchenIcon sx={{ fontSize: 30, color: "#e48bb1", marginRight: 1 }} />
//       ),
//       items: [
//         "Dammsugning och våttorkning av golven. Arbetsbänk och diskbänk rengörs grundligt.",
//       ],
//     },
//   ];

//   return (
//     <>
//       <HelmetWrapper
//         title="Företagsstäd i Borås | Kontorsstäd med Kvalitet – Städtjejerna"
//         description="Städtjejerna erbjuder professionell företagsstädning i Borås för kontor, butiker och verksamheter. Flexibla upplägg med fasta priser."
//         url="https://www.stadtjejerna.se/foretagsstad"
//         image="https://i.imgur.com/aCLoUIE.jpeg"
//       />

//       <Box
//         sx={{
//           backgroundImage: 'url("https://i.imgur.com/aCLoUIE.jpeg")',
//           minHeight: "800px",
//           backgroundAttachment: "fixed",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           display: "flex",
//           alignItems: "center",
//           width: "100%",
//           justifyContent: "center",
//           color: "white",
//           fontSize: "1.5rem",
//           textAlign: "center",
//           padding: "4rem 2rem",
//         }}
//       >
//         <Typography
//           variant={isMobile ? "h4" : "h2"}
//           sx={{
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//             padding: "20px",
//             borderRadius: "10px",
//             zIndex: 1,
//             maxWidth: "80%",
//             textAlign: "center",
//             marginBottom: 20,
//           }}
//         >
//           Företagsstäd
//         </Typography>
//       </Box>

//       <Box
//         sx={{
//           maxWidth: isMobile ? "100%" : "900px",
//           margin: "0 auto",
//           padding: { xs: 4, md: 8 },
//           backgroundColor: "#fff",
//           borderRadius: "8px",
//           // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//           marginBottom: "2rem",
//         }}
//       >
//         <Typography variant="h6" paragraph sx={{ color: "#555" }}>
//           <strong>
//             Städning på företag och kontor som skapar en god arbetsmiljö för dig
//             och dina medarbetare.
//           </strong>
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{ lineHeight: 1.8, color: "#555", marginTop: 2 }}
//         >
//           Vi tillbringar många timmar i veckan på våra arbetsplatser och det är
//           viktigt att trivas och ha möjlighet att fokusera på sina
//           arbetsuppgifter. Städtjejerna riktar sig till en bred målgrupp och är
//           redo att erbjuda sina professionella städtjänster till företag med
//           stora kontorslandskap, industrilokaler eller mindre butiker och kontor
//           runtom i Borås. Oavsett vilket som passar in på ditt företag är den
//           gemensamma nämnaren att städningen skapar en god arbetsmiljö för dig
//           och dina medarbetare samt för de som besöker företaget.
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{ lineHeight: 1.8, color: "#555", marginTop: 2 }}
//         >
//           Ett rent och fräscht intryck gör att alla kan fokusera på sitt jobb
//           och slippa tänka på om papperskorgen blir tömd eller om dammråttorna i
//           hörnen kommer städas bort. Det stärker också företagets varumärke och
//           gör personalen friskare. Välkommen att kontakta Städtjejerna för att
//           gå igenom vårt standardutbud samt göra anpassade tillägg som ditt
//           företag önskar. Vi är flexibla och är lyhörda när det gäller varje
//           kunds speciella önskemål.
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{ lineHeight: 1.8, color: "#555", marginTop: 2 }}
//         >
//           Städtjejerna tar med sig de rengöringsmedlen som behövs och alla medel
//           ingår i priset. Det finns möjlighet att beställa förbrukningsmaterial
//           som exempelvis tvål, toalettpapper, och pappershanddukar via oss.
//         </Typography>
//         <CustomButton
//           title="Få ett kostnadsförslag"
//           ariaLabel="Till offertsidan"
//           disabled={false}
//           animation={false}
//           handleOnClik={() => navigate("/offert")}
//         />
//       </Box>

//       <>
//         {sections.map((section, index) => (
//           <Box
//             key={index}
//             sx={{
//               maxWidth: isMobile ? "100%" : "900px",
//               margin: "0 auto",
//               padding: { xs: 4, md: 8 },
//               borderRadius: "8px",
//               // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//               marginLeft: isMobile ? 0 : 15,
//               marginBottom: "2rem",
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{ marginBottom: "0.5rem", color: "#555" }}
//             >
//               <strong>{section.title}</strong>
//             </Typography>
//             {section.items.map((item, idx) => (
//               <Box
//                 key={idx}
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   marginBottom: "0.3rem",
//                 }}
//               >
//                 <Box sx={{ marginRight: "0.5rem" }}>{section.icon}</Box>
//                 <Typography variant="body1">{item}</Typography>
//               </Box>
//             ))}
//           </Box>
//         ))}
//       </>

//       <Info />
//     </>
//   );
// };

// export default Foretagsstad;
import BathtubIcon from "@mui/icons-material/Bathtub";
import KitchenIcon from "@mui/icons-material/Kitchen";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Info from "../components/Info";
import { useScreenSize } from "../screenSizeContext";
import HelmetWrapper from "../components/HelmetWrapper";

const Foretagsstad: FC = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  const sections = [
    {
      title: "Kontorsstädning",
      icon: <MeetingRoomIcon sx={{ fontSize: 30, color: "#e48bb1", marginRight: 1 }} />,
      items: [
        "Dammsugning och våttorkning av golv och mattor.",
        "Dammtorkning av fria ytor, speglar, lister och dörrar.",
        "Tömning av papperskorgar och avfläckning av ytor.",
      ],
    },
    {
      title: "Toaletter",
      icon: <BathtubIcon sx={{ fontSize: 30, color: "#e48bb1", marginRight: 1 }} />,
      items: [
        "Skurning av toaletter och handfat, invändigt och utvändigt.",
        "Rengöring av speglar, golv, väggar och andra ytor.",
      ],
    },
    {
      title: "Kök & Pentry",
      icon: <KitchenIcon sx={{ fontSize: 30, color: "#e48bb1", marginRight: 1 }} />,
      items: [
        "Rengöring av arbetsbänk, diskbänk och ytor.",
        "Dammsugning och våttorkning av golv.",
      ],
    },
  ];

  return (
    <>
      <HelmetWrapper
        title="Företagsstädning i Borås | Professionell kontorsstäd – Städtjejerna"
        description="Vi erbjuder noggrann och flexibel företagsstädning i Borås för kontor, butiker och verksamheter. Fast pris, miljövänliga medel och god service."
        url="https://www.stadtjejerna.se/foretagsstad"
        image="https://i.imgur.com/aCLoUIE.jpeg"
      />

      <Box
        sx={{
          backgroundImage: 'url("https://i.imgur.com/aCLoUIE.jpeg")',
          minHeight: "800px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px 40px",
            borderRadius: "10px",
            maxWidth: "80%",
          }}
        >
          Företagsstädning i Borås
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: { xs: 4, md: 8 },
          backgroundColor: "#fff",
          borderRadius: "8px",
          marginBottom: "2rem",
          color: "#555",
        }}
      >
        <Typography variant="h6" paragraph sx={{ color: "#555" }}>
          <strong>
          Skapa en trivsam arbetsmiljö med professionell städning
          </strong>
        </Typography>

        <Typography variant="body1" paragraph>
          En ren arbetsplats ger både ett bra intryck och en hälsosam miljö. Vi på Städtjejerna erbjuder flexibel och noggrann företagsstädning i Borås – oavsett om det gäller kontorslokaler, butiker eller verksamheter av annan typ.
        </Typography>

        <Typography variant="body1" paragraph>
          Vårt team arbetar utifrån beprövade checklistor men anpassar oss alltid efter dina behov. Vi erbjuder fasta priser, använder miljövänliga produkter och ser till att du får samma städare vid varje tillfälle för trygghet och kontinuitet.
        </Typography>

        <Typography variant="body1" paragraph>
          Vi kan även leverera förbrukningsmaterial såsom pappershanddukar, tvål och toalettpapper vid behov.
        </Typography>

        <CustomButton
          title="Få ett kostnadsförslag"
          ariaLabel="Till offertsidan"
          disabled={false}
          animation={false}
          handleOnClik={() => navigate("/offert")}
        />
      </Box>

      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: { xs: 4, md: 4 },
            borderRadius: "8px",
            marginLeft: isMobile ? 0 : 15,
            marginBottom: "1rem",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "0.5rem", color: "#555" }}>
            <strong>{section.title}</strong>
          </Typography>
          {section.items.map((item, idx) => (
            <Box
              key={idx}
              sx={{ display: "flex", alignItems: "start", marginBottom: "0.3rem" }}
            >
              <Box sx={{ marginRight: "0.5rem" }}>{section.icon}</Box>
              <Typography variant="body1" sx={{ color: "#555" }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      ))}

      <Info />
    </>
  );
};

export default Foretagsstad;
