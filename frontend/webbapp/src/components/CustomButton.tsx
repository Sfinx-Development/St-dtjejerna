import { Button, Typography } from "@mui/material";

interface CustomButtonProps {
  ariaLabel: string;
  handleOnClik: () => void;
  title: string;
  disabled: boolean;
  animation: boolean;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <Button
      aria-label={props.ariaLabel}
      variant="outlined"
      disabled={props.disabled}
      sx={{
        color: "#555556", // Mörkare text för högre kontrast
        borderColor: "#f8d7e5",
        marginY: 4,
        paddingX: 3,
        paddingY: 1,
        background: "#f8d7e5", // Förbättrad gradient
        ...(props.animation && {
          animation: "moveUpDown 2s ease-in-out infinite", // Lägg till animation om props.animation är true
        }),
        "&:hover": {
          borderColor: "#e48bb1",
          backgroundColor: "#e48bb1",
          transition: "background-color 0.3s ease, color 0.3s ease",
        },
        "@keyframes moveUpDown": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      }}
      onClick={() => {
        props.handleOnClik();
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#555556", // Text med högre kontrast mot bakgrunden
          position: "relative",
          fontWeight: 600, // Fet text för att säkerställa läsbarhet
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        {props.title}
      </Typography>
    </Button>
  );
}
