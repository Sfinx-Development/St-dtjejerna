import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Alert,
  AlertColor,
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useScreenSize } from "../screenSizeContext";
import CustomButton from "./CustomButton";

emailjs.init("C8CxNnxZg6mg-d2tq");

interface ContactFormProps {
  backgroundColor?: string;
}

export default function ContactForm(props: ContactFormProps) {
  const [name, setName] = useState("");
  const { isMobile } = useScreenSize();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyPolicyChecked(event.target.checked);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    setError(false);
    if (name != "" && message != "" && email != "" && phone != "") {
      const templateParams = {
        to_name: "Städtjejerna",
        reply_to: email,
        from_name: name,
        message: `Telefon: ${phone}\nEmail: ${email}\nMeddelande: ${message}`,
      };

      emailjs
        .send("service_52wg30w", "template_h691rd4", templateParams)
        .then((response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          setSnackbarSeverity("success");
          setSnackbarMessage("Meddelande skickat!");
          setOpenSnackbar(true);
          setEmail("");
          setName("");
          setMessage("");
          setPhone("");
        })
        .catch((err) => {
          console.error("Error sending email:", err);
          setSnackbarSeverity("error");
          setSnackbarMessage("Något gick fel när meddelanden skickades.");
          setOpenSnackbar(true);
          setEmail("");
          setName("");
          setMessage("");
          setPhone("");
        });
    } else {
      setError(true);
    }
  };
  const handleSnackbarClose = (
    event: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway" && event) {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-around",
        height: { xs: "auto", md: 550 },
        width: "100%",
        backgroundImage: "url('../pexels-shvetsa-5217918.jpg')", // Korrekt format
        backgroundSize: "cover", // För att bilden ska täcka hela ytan
        backgroundPosition: "center", // För att centrera bilden
        backgroundRepeat: "no-repeat", // För att undvika upprepningar
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : "#f7f7f7",
        gap: 4,
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          textAlign: { xs: "left", md: "left" },
          maxWidth: 400,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          // alignItems: { xs: "center", md: "start" },
          marginBottom: { xs: 0, md: 25 },
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            color: "#333",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: 2,
            marginTop: 4,
          }}
        >
          Kontakta oss
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <PhoneIcon
            sx={{ color: "rgba(0,0,0,0.8)", fontSize: 22, marginRight: 1 }}
          />
          <Typography
            sx={{ color: "rgba(0,0,0,0.8)", fontSize: { xs: 20, md: 22 } }}
          >
            <a
              href="tel:033-7269676"
              style={{
                color: "inherit",
                textDecoration: "none",
                // fontSize: {xs:20, md:22},
              }}
            >
              033-726 96 76
            </a>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <EmailIcon
            sx={{
              color: "rgba(0,0,0,0.8)",
              fontSize: { xs: 20, md: 22 },
              marginRight: 1,
            }}
          />
          <Typography
            sx={{ color: "rgba(0,0,0,0.8)", fontSize: { xs: 20, md: 22 } }}
          >
            <a
              href="mailto:stadtjejerna@hotmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              stadtjejerna@hotmail.com
            </a>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <LocationOnIcon
            sx={{
              color: "rgba(0,0,0,0.8)",
              fontSize: { xs: 20, md: 22 },
              marginRight: 1,
            }}
          />
          <Typography
            sx={{
              color: "rgba(0,0,0,0.8)",
              fontSize: { xs: 20, md: 22 },
              marginRight: 0.5,
            }}
          >
            Tredje villagatan 17
          </Typography>
          <Typography
            sx={{ color: "rgba(0,0,0,0.8)", fontSize: { xs: 20, md: 22 } }}
          >
            50453 Borås
          </Typography>
        </Box>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000}>
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity as AlertColor}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Card
        sx={{
          width: "100%",
          maxWidth: 500,
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          borderRadius: 2,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {error && (
            <Typography color="red">Vänligen fyll i alla fält</Typography>
          )}
          <TextField
            label="Namn"
            variant="outlined"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#d4acc7",
                },
                "&:hover fieldset": {
                  borderColor: "#dbbed1",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#dbbed1",
                },
              },
            }}
          />
          <TextField
            label="Telefon"
            variant="outlined"
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#d4acc7",
                },
                "&:hover fieldset": {
                  borderColor: "#dbbed1",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#dbbed1",
                },
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#d4acc7",
                },
                "&:hover fieldset": {
                  borderColor: "#dbbed1",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#dbbed1",
                },
              },
            }}
          />
          <TextField
            label="Meddelande"
            variant="outlined"
            type="text"
            multiline
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#d4acc7",
                },
                "&:hover fieldset": {
                  borderColor: "#dbbed1",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#dbbed1",
                },
              },
            }}
          />
          <FormControlLabel
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "start",
              width: "100%",
              // gap: 1,
              // backgroundColor: "red",
            }}
            control={
              <Checkbox
                sx={{
                  color: "#333",
                  "&.Mui-checked": {
                    textAlign: "start",
                  },
                }}
                checked={privacyPolicyChecked}
                onChange={handleCheckboxChange}
              />
            }
            label={
              <Typography
                sx={{ color: "#333", fontSize: 13, textAlign: "start" }}
              >
                Jag samtycker till att Städtjejerna i 7-härad behandlar mina
                personuppgifter i enlighet med vår{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#333" }}
                >
                  integritetspolicy
                </a>
                .
              </Typography>
            }
          />
          <CustomButton
            title="Skicka"
            handleOnClik={handleSubmit}
            disabled={!privacyPolicyChecked}
            ariaLabel="Skicka formulära"
            animation={false}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
