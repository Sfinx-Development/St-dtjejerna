import { Box } from "@mui/material";

interface MapProps {
  width: string;
  height: string;
}
export default function EmbeddedMap(props: MapProps) {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17049.075557515953!2d12.935168085530771!3d57.71417397783847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465aa11a4e01fc6f%3A0xa00f0b33e3233ba1!2sSt%C3%A4dtjejerna%20i%207H%C3%A4rad!5e0!3m2!1ssv!2sse!4v1717275020957!5m2!1ssv!2sse"
        title="Städtjejerna i 7Härad"
        width={props.width}
        height={props.height}
        style={{ border: 0, display: "flex", flexGrow: 1 }}
        // allowFullScreen=false
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
}
