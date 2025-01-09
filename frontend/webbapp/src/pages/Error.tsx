import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

export default function Error() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflowX: "hidden",
          justifyContent: "center",
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
          Ojdå, här var det tomt.
        </Typography>
        <CustomButton
          title="Till startsidan"
          ariaLabel="Till startsidan"
          handleOnClik={() => navigate("/")}
          disabled={false}
          animation={false}
        />
      </div>
    </Box>
  );
}
