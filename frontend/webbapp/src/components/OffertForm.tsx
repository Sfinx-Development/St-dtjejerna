import {
  Alert,
  AlertColor,
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
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
    // e.preventDefault();
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
        .then((response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          setSnackbarSeverity("success");
          setSnackbarMessage("Förfrågan skickad!");
          setOpenSnackbar(true);
          setEmail("");
          setName("");
          setMessage("");
          setPhone("");
          setServices([]);
        })
        .catch((err) => {
          console.error("Error sending email:", err);
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
    if (reason === "clickaway" && event) {
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
        boxSizing: "border-box",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      {/* <Typography
        variant={isMobile ? "h4" : "h2"}
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#d29bbf",
          // fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          position: "relative",
          marginTop: isMobile ? "40px" : "20px",
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          "&:after": {
            content: '""',
            position: "absolute",
            width: "40px",
            height: "4px",
            backgroundColor: "#d29bbf",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "2px",
          },
        }}
      >
        Offertförfrågan
      </Typography> */}
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
      <Snackbar open={openSnackbar} autoHideDuration={6000}>
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
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
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: 4,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          marginY: 1,
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
            <Typography color="error">Vänligen fyll i alla fält</Typography>
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
        </CardContent>
        <CardContent>
          <FormGroup>
            <Typography variant="h6">Välj tjänster</Typography>
            {serviceChoices.map((service, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={services.includes(service)}
                    onChange={handleServiceChange}
                    value={service}
                    sx={{
                      color: "#d4acc7",
                      "&.Mui-checked": {
                        color: "#dbbed1",
                      },
                    }}
                  />
                }
                label={service}
              />
            ))}
          </FormGroup>

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
            title="Skicka förfrågan"
            ariaLabel="Skicka formulär"
            disabled={!privacyPolicyChecked}
            animation={false}
            handleOnClik={handleSubmit}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
