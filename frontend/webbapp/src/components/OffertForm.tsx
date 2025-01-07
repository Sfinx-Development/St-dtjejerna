import {
  Alert,
  AlertColor,
  Box,
  Card,
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

export default function OffertForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<string[]>([]);

  const [error, setError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] =
    useState<AlertColor>("success");
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);

  const { isMobile } = useScreenSize();

  const serviceChoices: string[] = [
    "Byggstäd",
    "Hemstäd",
    "Flyttstäd",
    "Fönsterputs",
    "Företagsstäd",
    "Trappstäd",
  ];

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyPolicyChecked(event.target.checked);
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedService = event.target.value;
    setServices((prevServices) =>
      prevServices.includes(selectedService)
        ? prevServices.filter((service) => service !== selectedService)
        : [...prevServices, selectedService]
    );
  };

  const handleSubmit = () => {
    setError(false);
    if (
      name !== "" &&
      message !== "" &&
      email !== "" &&
      phone !== "" &&
      services.length > 0
    ) {
      const templateParams = {
        to_name: "Städtjejerna",
        from_name: name,
        reply_to: email,
        message: `Telefon: ${phone}\nEmail: ${email}\nTjänster: ${services.join(
          ", "
        )}\nMeddelande: ${message}`,
      };

      emailjs
        .send("service_52wg30w", "template_itru98a", templateParams)
        .then(() => {
          setSnackbarSeverity("success");
          setSnackbarMessage("Förfrågan skickad!");
          setOpenSnackbar(true);
          setEmail("");
          setName("");
          setMessage("");
          setPhone("");
          setServices([]);
        })
        .catch(() => {
          setSnackbarSeverity("error");
          setSnackbarMessage(
            "Något gick fel när förfrågan skickades. Försök igen."
          );
          setOpenSnackbar(true);
        });
    } else {
      setError(true);
    }
  };

  const handleSnackbarClose = (
    event: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: { xs: 2, md: 4 },
        background: "url(pexels-shvetsa-5218015.webp) no-repeat center/cover",
        minHeight: "100vh",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Card
        sx={{
          zIndex: 1,
          width: "100%",
          maxWidth: { xs: 320, md: "600px" },
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: 3,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          padding: 4,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            color: "#333",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          Offertförfrågan
        </Typography>

        {error && (
          <Typography color="error" sx={{ textAlign: "center" }}>
            Vänligen fyll i alla obligatoriska fält
          </Typography>
        )}

        <Snackbar open={openSnackbar} autoHideDuration={6000}>
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>

        <TextField
          label="Namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
        />
        <TextField
          label="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Typography variant="h6" sx={{ width: "100%", marginBottom: 0 }}>
            Välj tjänster
          </Typography>
          <Box
            sx={{ display: "flex", flex: 1, flexDirection: "column", gap: 1 }}
          >
            {serviceChoices
              .slice(0, Math.ceil(serviceChoices.length / 2))
              .map((service) => (
                <FormControlLabel
                  key={service}
                  control={
                    <Checkbox
                      checked={services.includes(service)}
                      onChange={handleServiceChange}
                      value={service}
                      sx={{ color: "#333" }}
                    />
                  }
                  label={service}
                />
              ))}
          </Box>
          <Box
            sx={{ display: "flex", flex: 1, flexDirection: "column", gap: 1 }}
          >
            {serviceChoices
              .slice(Math.ceil(serviceChoices.length / 2))
              .map((service) => (
                <FormControlLabel
                  key={service}
                  control={
                    <Checkbox
                      checked={services.includes(service)}
                      onChange={handleServiceChange}
                      value={service}
                      sx={{ color: "#333" }}
                    />
                  }
                  label={service}
                />
              ))}
          </Box>
        </Box>

        <TextField
          label="Meddelande"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          multiline
          rows={4}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={privacyPolicyChecked}
              onChange={handleCheckboxChange}
            />
          }
          label={
            <Typography sx={{ fontSize: 12 }}>
              Jag samtycker till att Städtjejerna i 7-härad behandlar mina
              personuppgifter i enlighet med vår{" "}
              <a href="/privacy-policy" style={{ color: "#333" }}>
                integritetspolicy
              </a>
              .
            </Typography>
          }
        />
        <CustomButton
          title="Skicka förfrågan"
          ariaLabel="Skicka formulär"
          disabled={!privacyPolicyChecked}
          handleOnClik={handleSubmit}
          animation={false}
        />
      </Card>
    </Box>
  );
}
