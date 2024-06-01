import { Box } from "@mui/material";
import OffertForm from "../components/OffertForm";

export default function Offert() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <OffertForm />
    </Box>
  );
}
