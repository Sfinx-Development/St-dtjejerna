// import { Box, Typography } from "@mui/material";
// import Fade from "@mui/material/Fade";
// import { useNavigate } from "react-router-dom";
// import CustomButton from "../components/CustomButton";
// import { useScreenSize } from "../screenSizeContext";
// import HelmetWrapper from "../components/HelmetWrapper";

// export default function Tjanster() {
//   const { isMobile } = useScreenSize();
//   const navigate = useNavigate();

//   return (
//     <>
//     <HelmetWrapper
//     title="Städtjänster i Borås | Hemstäd, Flyttstäd & Fönsterputs – Städtjejerna"
//     description="Utforska vårt utbud av professionella städtjänster i Borås – hemstäd, företagsstäd, flyttstäd, fönsterputs, byggstäd och trappstäd. Alltid med kvalitet & trygghet."
//     url="https://www.stadtjejerna.se/tjanster"
//     image="https://i.imgur.com/T0MT49r.jpeg"
//   />
//     <Fade in timeout={500}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           width: "100%",
//           borderRadius: "10px",
//           boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//           backgroundColor: "#fff",
//           flexGrow: 1,
//           justifyContent: "space-evenly",
//           paddingY: isMobile ? "10px" : "20px",
//         }}
//       >
//         <Typography
//           variant={isMobile ? "h4" : "h2"}
//           gutterBottom
//           sx={{
//             textAlign: "center",
//             color: "#d29bbf",
//             position: "relative",
//             marginTop: isMobile ? "40px" : "20px",
//             marginBottom: "20px",
//           }}
//         >
//           Våra tjänster
//           <Box
//             sx={{
//               position: "absolute",
//               bottom: "-10px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               width: "80px",
//               height: "2px",
//               backgroundColor: "#d29bbf",
//               borderRadius: "5px",
//               opacity: 0.7,
//             }}
//           />
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: isMobile ? "column" : "row",

//             justifyContent: isMobile ? "center" : "space-between",
//             width: "95%",
//             alignItems: "center",

//             paddingY: isMobile ? 0 : 8,
//           }}
//         >
//           <CustomButton
//             ariaLabel="Till Hemstädsidan"
//             handleOnClik={() => navigate("/hemstad")}
//             title="Hemstäd"
//             animation={false}
//             disabled={false}
//           />
//           <CustomButton
//             ariaLabel="Till Företagssidan"
//             handleOnClik={() => navigate("/foretagsstad")}
//             title="Företagsstäd"
//             animation={false}
//             disabled={false}
//           />
//           <CustomButton
//             ariaLabel="Till Fönsterputssidan"
//             handleOnClik={() => navigate("/fonsterputs")}
//             title="Fönsterputs"
//             animation={false}
//             disabled={false}
//           />
//           <CustomButton
//             ariaLabel="Till Flyttstädsidan"
//             handleOnClik={() => navigate("/flyttstad")}
//             title="Flyttstäd"
//             animation={false}
//             disabled={false}
//           />
//           <CustomButton
//             ariaLabel="Till Byggstädsidan"
//             handleOnClik={() => navigate("/byggstad")}
//             title="Byggstäd"
//             animation={false}
//             disabled={false}
//           />
//           <CustomButton
//             ariaLabel="Till Trappstädsidan"
//             handleOnClik={() => navigate("/trappstad")}
//             title="Trappstäd"
//             animation={false}
//             disabled={false}
//           />
//         </Box>
//       </Box>
//     </Fade>
//     </>
//   );
// }
import { Box, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { useScreenSize } from "../screenSizeContext";
import HelmetWrapper from "../components/HelmetWrapper";

export default function Tjanster() {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  return (
    <>
      <HelmetWrapper
        title="Städtjänster i Borås | Hemstäd, Flyttstäd & Fönsterputs – Städtjejerna"
        description="Utforska vårt utbud av professionella städtjänster i Borås – hemstäd, företagsstäd, flyttstäd, fönsterputs, byggstäd och trappstäd. Alltid med kvalitet & trygghet."
        url="https://www.stadtjejerna.se/tjanster"
        image="https://i.imgur.com/T0MT49r.jpeg"
      />

      <Fade in timeout={500}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            flexGrow: 1,
            justifyContent: "space-evenly",
            paddingY: isMobile ? "10px" : "20px",
          }}
        >
          <Typography
            component="h1"
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
            Våra städtjänster i Borås
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

          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              color: "#555",
              textAlign: "center",
              paddingX: 2,
              marginBottom: 4,
            }}
          >
            Vi erbjuder ett brett utbud av professionella städtjänster i Borås –
            skräddarsydda efter dina behov. Klicka dig vidare till respektive
            tjänst för att läsa mer om vad vi erbjuder.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: isMobile ? "center" : "space-between",
              width: "95%",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              paddingY: isMobile ? 0 : 4,
            }}
          >
            <CustomButton
              ariaLabel="Till Hemstädsidan"
              handleOnClik={() => navigate("/hemstad")}
              title="Hemstäd"
              animation={false}
              disabled={false}
            />
            <CustomButton
              ariaLabel="Till Företagsstädsidan"
              handleOnClik={() => navigate("/foretagsstad")}
              title="Företagsstäd"
              animation={false}
              disabled={false}
            />
            <CustomButton
              ariaLabel="Till Fönsterputssidan"
              handleOnClik={() => navigate("/fonsterputs")}
              title="Fönsterputs"
              animation={false}
              disabled={false}
            />
            <CustomButton
              ariaLabel="Till Flyttstädsidan"
              handleOnClik={() => navigate("/flyttstad")}
              title="Flyttstäd"
              animation={false}
              disabled={false}
            />
            <CustomButton
              ariaLabel="Till Byggstädsidan"
              handleOnClik={() => navigate("/byggstad")}
              title="Byggstäd"
              animation={false}
              disabled={false}
            />
            <CustomButton
              ariaLabel="Till Trappstädsidan"
              handleOnClik={() => navigate("/trappstad")}
              title="Trappstäd"
              animation={false}
              disabled={false}
            />
          </Box>
        </Box>
      </Fade>
    </>
  );
}

