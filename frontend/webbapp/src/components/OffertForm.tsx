import {
  Alert,
  AlertColor,
  Box,
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
    _event: React.SyntheticEvent,
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
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url(pexels-shvetsa-5217915.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          width: "100%",
          maxWidth: { xs: "90%", md: "600px" },
          padding: 4,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          backdropFilter: "blur(5px)", // Subtil suddning för att ge kontrast
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
          Offertförfrågan
        </Typography>

        {error && (
          <Typography
            color="error"
            sx={{
              textAlign: "center",
              fontSize: "0.9rem",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
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
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              color: "rgba(0, 0, 0, 0.8)",
            },
            input: {
              color: "rgba(0, 0, 0, 0.8)",
            },
            label: {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />
        <TextField
          label="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              color: "rgba(0, 0, 0, 0.8)",
            },
            input: {
              color: "rgba(0, 0, 0, 0.8)",
            },
            label: {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />
        <TextField
          label="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.8)",
              },
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              color: "rgba(0, 0, 0, 0.8)",
            },
            input: {
              color: "rgba(0, 0, 0, 0.8)",
            },
            label: {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {serviceChoices.map((service, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={services.includes(service)}
                  onChange={handleServiceChange}
                  value={service}
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    "&.Mui-checked": {
                      color: "rgba(0, 0, 0, 0.6)",
                    },
                  }}
                />
              }
              label={service}
              sx={{ flex: "1 1 45%", color: "rgba(0, 0, 0, 0.8)" }}
            />
          ))}
        </Box>

        <TextField
          label="Meddelande"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          multiline
          rows={4}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              color: "rgba(0, 0, 0, 0.6)",
            },
            textarea: {
              color: "rgba(0, 0, 0, 0.8)",
            },
            label: {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={privacyPolicyChecked}
              onChange={handleCheckboxChange}
              sx={{
                color: "rgba(0, 0, 0, 0.6)",
                "&.Mui-checked": {
                  color: "rgba(0, 0, 0, 0.6)",
                },
              }}
            />
          }
          label={
            <Typography sx={{ fontSize: 13, color: "rgba(0,0,0,0.8)" }}>
              Jag samtycker till att Städtjejerna i 7-härad behandlar mina
              personuppgifter i enlighet med vår{" "}
              <a href="/privacy-policy" style={{ color: "rgba(0,0,0,0.8)" }}>
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
      </Box>
    </Box>
  );
}
