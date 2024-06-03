import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import { useEffect } from "react";

const securityDescription = (
  <>
    För din <strong>trygghet och säkerhet</strong> genomför Städtjejerna
    noggranna bakgrundskontroller på alla våra anställda, inklusive kontroll av
    brottsregister. Vi ser till att våra medarbetare är pålitliga och på så sätt
    kan du känna dig trygg med att släppa in oss i ditt hem.
  </>
);

const confidentialityDescription = (
  <>
    Vi värnar om din <strong>integritet</strong>. Därför följer alla våra
    medarbetare strikta sekretessregler under varje städuppdrag. Du kan lita på
    att din information och ditt hem behandlas med största{" "}
    <em>diskretion och respekt</em>.
  </>
);

export default function Security() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    }
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    }
  }, [controls1, controls2, inView1, inView2]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-around",
        height: { xs: "auto", md: 250 },
        width: "100%",
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "white",
      }}
    >
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 60 }}
        animate={controls1}
        transition={{ duration: 1 }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            padding: 2,
            marginBottom: 2,
            maxWidth: 400,
          }}
        >
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <SecurityIcon sx={{ marginRight: 1 }} />
            SÄKERHET
          </Typography>
          <Typography variant="body1">{securityDescription}</Typography>
        </Box>
      </motion.div>

      <Box
        sx={{
          height: { xs: "auto", md: "60%" },
          width: { xs: "90%", md: 1.5 },
          backgroundColor: "#e3c5da",
          marginY: { xs: 2, md: 0 },
        }}
      />

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 60 }}
        animate={controls2}
        transition={{ duration: 1 }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            padding: 2,
            marginBottom: 2,
            maxWidth: 400,
          }}
        >
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <LockIcon sx={{ marginRight: 1 }} />
            SEKRETESS
          </Typography>
          <Typography variant="body1">{confidentialityDescription}</Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
