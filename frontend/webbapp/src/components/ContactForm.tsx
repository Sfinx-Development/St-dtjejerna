import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Form submitted", { name, phone, email, message });
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
    >
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          maxWidth: 400,
          padding: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: 2, fontWeight: "bold", color: "#333" }}
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
          <Typography sx={{ color: "grey", marginRight: 1 }}>
            Tredje villagatan 17
          </Typography>
          <Typography sx={{ color: "grey" }}>504 53 Borås</Typography>
        </Box>
      </Box>
      <Card
        sx={{
          width: "100%",
          maxWidth: 500,
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          borderRadius: 2,
          padding: 2,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
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
              "& .MuiInputLabel-outlined": {
                color: "#666666",
              },
              "&.Mui-focused": {
                color: "#666666",
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
              "& .MuiInputLabel-outlined": {
                color: "#666666",
              },
              "&.Mui-focused": {
                color: "#666666",
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
              "& .MuiInputLabel-outlined": {
                color: "#666666",
              },
              "&.Mui-focused": {
                color: "#666666",
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
              "& .MuiInputLabel-outlined": {
                color: "#666666",
              },
              "&.Mui-focused": {
                color: "#666666",
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
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
            Skicka
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
