import { Box } from "@mui/material";
import OffertForm from "../components/OffertForm";
import HelmetWrapper from "../components/HelmetWrapper";

export default function Offert() {
  return (
    <>
      <HelmetWrapper
        title="Städtjänster i Borås | Pris & Offert – Städtjejerna"
        description="Få ett kostnadsfritt prisförslag för hemstäd, flyttstäd eller företagsstäd i Borås. Vi skräddarsyr en lösning utifrån dina behov."
        url="https://www.stadtjejerna.se/offert"
        image="https://i.imgur.com/bo2l48Z.jpeg"
      />

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <OffertForm />
      </Box>
    </>
  );
}
