import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";

export default function Tjanster() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#e3c5da",
              margin: isMobile ? "10px" : "10px 20px",
              paddingX: 3,
              paddingY: 1,
              backgroundColor: "#dbbed1",
              "&:hover": {
                borderColor: "#c499b6",
                backgroundColor: "#c499b6",
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
              minWidth: isMobile ? "100%" : "auto",
            }}
            onClick={() => {
              navigate("/hemstad");
            }}
          >
            Hemstäd
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#e3c5da",
              margin: isMobile ? "10px" : "10px 20px",
              paddingX: 3,
              paddingY: 1,
              backgroundColor: "#dbbed1",
              "&:hover": {
                borderColor: "#c499b6",
                backgroundColor: "#c499b6",
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
              minWidth: isMobile ? "100%" : "auto",
            }}
            onClick={() => {
              navigate("/foretagsstad");
            }}
          >
            Företagsstäd
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#e3c5da",
              margin: isMobile ? "10px" : "10px 20px",
              paddingX: 3,
              paddingY: 1,
              backgroundColor: "#dbbed1",
              "&:hover": {
                borderColor: "#c499b6",
                backgroundColor: "#c499b6",
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
              minWidth: isMobile ? "100%" : "auto",
            }}
            onClick={() => {
              navigate("/fonsterputs");
            }}
          >
            Fönsterputs
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#e3c5da",
              margin: isMobile ? "10px" : "10px 20px",
              paddingX: 3,
              paddingY: 1,
              backgroundColor: "#dbbed1",
              "&:hover": {
                borderColor: "#c499b6",
                backgroundColor: "#c499b6",
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
              minWidth: isMobile ? "100%" : "auto",
            }}
            onClick={() => {
              navigate("/flyttstad");
            }}
          >
            Flyttstäd
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#e3c5da",
              margin: isMobile ? "10px" : "10px 20px",
              paddingX: 3,
              paddingY: 1,
              backgroundColor: "#dbbed1",
              "&:hover": {
                borderColor: "#c499b6",
                backgroundColor: "#c499b6",
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
              minWidth: isMobile ? "100%" : "auto",
            }}
            onClick={() => {
              navigate("/byggstad");
            }}
          >
            Byggstäd
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#e3c5da",
              margin: isMobile ? "10px" : "10px 20px",
              paddingX: 3,
              paddingY: 1,
              backgroundColor: "#dbbed1",
              "&:hover": {
                borderColor: "#c499b6",
                backgroundColor: "#c499b6",
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
              minWidth: isMobile ? "100%" : "auto",
            }}
            onClick={() => {
              navigate("/tradgardsfix");
            }}
          >
            Trädgårdsfix
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#e3c5da",
              margin: isMobile ? "10px" : "10px 20px",
              paddingX: 3,
              paddingY: 1,
              backgroundColor: "#dbbed1",
              "&:hover": {
                borderColor: "#c499b6",
                backgroundColor: "#c499b6",
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
              minWidth: isMobile ? "100%" : "auto",
            }}
            onClick={() => {
              navigate("/trappstad");
            }}
          >
            Trappstäd
          </Button>
        </Box>
      </Box>
    </Fade>
  );
}
