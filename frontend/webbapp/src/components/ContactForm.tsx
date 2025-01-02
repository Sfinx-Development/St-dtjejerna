import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Alert,
  AlertColor,
  Box,
  Button,
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          textAlign: { xs: "center", md: "left" },
          maxWidth: 400,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          // gutterBottom
          sx={{
            textAlign: "center",
            color: "#d29bbf",
            position: "relative",
            marginTop: { xs: "40px", md: "20px" },
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Kontakta oss
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <PhoneIcon sx={{ color: "grey", marginRight: 1 }} />
          <Typography sx={{ color: "grey" }}>
            <a
              href="tel:033-7269676"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              033-726 96 76
            </a>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <EmailIcon sx={{ color: "grey", marginRight: 1 }} />
          <Typography sx={{ color: "grey" }}>
            <a
              href="mailto:stadtjejerna@hotmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              stadtjejerna@hotmail.com
            </a>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <LocationOnIcon sx={{ color: "grey", marginRight: 1 }} />
          <Typography sx={{ color: "grey", marginRight: 0.5 }}>
            Tredje villagatan 17
          </Typography>
          <Typography sx={{ color: "grey" }}>50453 Borås</Typography>
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
            gap: 2,
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
              justifyContent: "center",
              width: "100%",
              gap: 1,
            }}
            control={
              <Checkbox
                required
                sx={{
                  color: "#333",
                  "&.Mui-checked": {
                    color: "#333",
                  },
                }}
                checked={privacyPolicyChecked}
                onChange={handleCheckboxChange}
              />
            }
            label={
              <Typography sx={{ color: "#333" }}>
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
          <Button
            variant="contained"
            type="submit"
            disabled={!privacyPolicyChecked}
            sx={{
              alignSelf: "center",
              marginTop: 2,
              backgroundColor: "#dbbed1",
              color: "#333",
              paddingX: 4,
              paddingY: 1,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#bda2b3",
              },
            }}
          >
            Skicka
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
