import { Box, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { useScreenSize } from "../screenSizeContext";

export default function Tjanster() {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  return (
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
          Våra tjänster
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
            display: "flex",
            flexDirection: isMobile ? "column" : "row",

            justifyContent: isMobile ? "center" : "space-between",
            width: "95%",
            alignItems: "center",

            paddingY: isMobile ? 0 : 8,
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
            ariaLabel="Till Företagssidan"
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
  );
}
