import { Box, Typography } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: { xs: "1rem", sm: "2rem", md: "3rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: { xs: "1rem", sm: "2rem" },
          color: "rgb(37,31,37)",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          textAlign: "center",
        }}
      >
        Integritetspolicy för Städtjejerna i 7-härad
      </Typography>

      <Box
        sx={{
          padding: { xs: "1rem", sm: "2rem" },
          maxWidth: { xs: "100%", sm: "90%", md: "800px" },
          width: "100%",
          color: "rgb(37,31,37)",
        }}
      >
        {/* Section 1 */}
        <Typography
          variant="h4"
          sx={{
            marginBottom: "1rem",
            color: "rgb(37,31,37)",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          1. Vilka uppgifter samlar vi in?
        </Typography>
        <Typography
          sx={{
            marginBottom: "1.5rem",
            lineHeight: "1.8",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          När du kontaktar oss via vårt kontaktformulär samlar vi in följande
          information:
        </Typography>
        <ul>
          <li>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
              Namn
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
              E-post
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
              Telefonnummer
            </Typography>
          </li>
        </ul>
        <Typography
          sx={{
            marginBottom: "1.5rem",
            lineHeight: "1.8",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Dessa uppgifter skickas till vår e-postadress och lagras inte i någon
          databas.
        </Typography>

        {/* Section 2 */}
        <Typography
          variant="h4"
          sx={{
            marginBottom: "1rem",
            color: "rgb(37,31,37)",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          2. Varför samlar vi in dessa uppgifter?
        </Typography>
        <Typography
          sx={{
            marginBottom: "1.5rem",
            lineHeight: "1.8",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Vi samlar in dina uppgifter för att kunna:
        </Typography>
        <ul>
          <li>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
              Svara på din förfrågan.
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
              Kontakta dig om ytterligare information krävs.
            </Typography>
          </li>
        </ul>

        {/* Section 3 */}
        <Typography
          variant="h4"
          sx={{
            marginBottom: "1rem",
            color: "rgb(37,31,37)",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          3. Hur hanterar vi dina uppgifter?
        </Typography>
        <Typography
          sx={{
            marginBottom: "1.5rem",
            lineHeight: "1.8",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Dina uppgifter skickas via e-post och används endast för att hantera
          din förfrågan. Vi lagrar inte uppgifterna i någon databas.
          E-postmeddelandena raderas när de inte längre behövs.
        </Typography>

        {/* Additional sections omitted for brevity */}

        {/* Contact */}
        <Typography
          variant="h4"
          sx={{
            marginBottom: "1rem",
            color: "rgb(37,31,37)",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          5. Kontakt
        </Typography>
        <Typography
          sx={{
            marginBottom: "1.5rem",
            lineHeight: "1.8",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Om du har frågor om vår integritetspolicy, vänligen kontakta oss:
        </Typography>
        <strong>
          <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            E-post:
          </Typography>
        </strong>
        <a
          href="mailto:stadtjejerna@hotmail.com"
          style={{ color: "rgb(37,31,37)", fontSize: "inherit" }}
        >
          <Typography
            sx={{
              marginBottom: 2,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            stadtjejerna@hotmail.com
          </Typography>
        </a>
      </Box>
    </Box>
  );
}
