import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
    if (inView1) controls1.start({ opacity: 1, y: 0 });
    if (inView2) controls2.start({ opacity: 1, y: 0 });
  }, [controls1, controls2, inView1, inView2]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "start",
        justifyContent: "space-around",
        width: "100%",
        paddingY: 4,
        background: "linear-gradient(to bottom, white, #f9f7fb)", // Subtil gradient
      }}
    >
      {/* Säkerhet */}
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 60 }}
        animate={controls1}
        transition={{ duration: 1 }}
      >
        <Box
          sx={{
            textAlign: { xs: "left", md: "left" },
            padding: 3,
            marginBottom: 2,
            maxWidth: 400,
            // backgroundColor: "rgba(244, 199, 219, 0.2)", // Ljus bakgrund för kontrast
            borderRadius: 4,
            // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              letterSpacing: 1.5,
              marginBottom: 1,
              alignItems: "center",
              fontWeight: "bold",
              color: "#444",
            }}
          >
            <SecurityIcon sx={{ marginRight: 1, color: "#444" }} />
            SÄKERHET
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.75,
              fontSize: 16,
            }}
          >
            {securityDescription}
          </Typography>
        </Box>
      </motion.div>

      {/* Separator */}
      <Box
        sx={{
          height: { xs: 1, md: "auto" },
          width: { xs: "80%", md: 2 },
          backgroundColor: "#e3c5da",
          marginY: { xs: 3, md: 0 },
        }}
      />

      {/* Sekretess */}
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 60 }}
        animate={controls2}
        transition={{ duration: 1 }}
      >
        <Box
          sx={{
            textAlign: { xs: "left", md: "left" },
            padding: 3,
            marginBottom: 2,
            maxWidth: 400,
            // backgroundColor: "rgba(244, 199, 219, 0.2)", // Ljus bakgrund för kontrast
            borderRadius: 4,
            // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              letterSpacing: 1.5,
              marginBottom: 1,
              alignItems: "center",
              fontWeight: "bold",
              color: "#444",
            }}
          >
            <LockIcon sx={{ marginRight: 1, color: "#444",  }} />
            SEKRETESS
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.75,
              fontSize: 16,
            }}
          >
            {confidentialityDescription}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
