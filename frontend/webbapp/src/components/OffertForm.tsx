import {
  Alert,
  AlertColor,
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import emailjs from "emailjs-com";
import { useState } from "react";

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

  const serviceChoices: string[] = ["Fönsterputs", "Hemstäd", "Flyttstäd"];

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedService = event.target.value;
    setServices((prevServices) =>
      prevServices.includes(selectedService)
        ? prevServices.filter((service) => service !== selectedService)
        : [...prevServices, selectedService]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        message: `Telefon: ${phone}\nEmail: ${email}\nTjänster: ${services.join(
          ", "
        )}\nMeddelande: ${message}`,
      };

      emailjs
        .send("service_f1l2auv", "template_itru98a", templateParams)
        .then((response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          setSnackbarSeverity("success");
          setSnackbarMessage("E-post skickad framgångsrikt!");
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
          setSnackbarMessage("Något gick fel när e-posten skickades.");
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
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-around",
        height: { xs: "auto", md: 500 },
        width: "100%",
        backgroundColor: "#f7f7f7",
        padding: 3,
        gap: 4,
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          maxWidth: 400,
          display: "flex",
          flex: 1,
          padding: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: 2, fontWeight: "bold", color: "#333" }}
        >
          Vänligen fyll i din offertförfrågan
        </Typography>
      </Box>
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
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          borderRadius: 2,
          padding: 2,
          display: "flex",
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
          <Button
            variant="contained"
            type="submit"
            sx={{
              alignSelf: "center",
              marginTop: 2,
              backgroundColor: "#dbbed1",
              color: "#fff",
              paddingX: 4,
              paddingY: 1,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#bda2b3",
              },
            }}
          >
            Skicka förfrågan
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}