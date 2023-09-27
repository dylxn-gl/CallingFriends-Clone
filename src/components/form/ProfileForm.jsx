import { useState } from "react";
import { createTheme, ThemeProvider, Box, Typography, Button } from "@mui/material"
import ShareIcon from "@mui/icons-material/Share";
import API from "../../api/API"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#169AD7",
    },
    secondary: {
      main: "#f58220",
    },
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#ffffff",
    },
    info: {
      main: "#4bb392",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
});

const ProfileForm = () => {

  const [textCopied, setTextCopied] = useState(false);
  const textToCopy = "callingfriends.com/" + API.user.username;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setTextCopied(true);
      })
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ mt: 5, mb: 5, color: "#000000", }}>
          <Typography>
            Mi información
          </Typography>
          <Box sx={{
            mt: 1,
            mb: 1,
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "#169AD7",
          }}>
            <Typography variant="h6">callingfriends.com/{API.user.username}</Typography>
            <Button
              sx={{
                borderRadius: 8,
                color: "#ffffff",
              }}
              color="secondary"
              variant="contained"
              startIcon={<ShareIcon />}
              onClick={copyToClipboard}
            >
              Compartir
            </Button>
          </Box>
          <Typography>
            COPIA TU LINK PERSONAL Y COMPARTE EN TU RED SOCIAL PARA GANAR DINERO RÁPIDO
          </Typography>
          <Box sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}>
            <Typography>
              Informacion personal
            </Typography>
            <Box sx={{
              display: "flex",
              gap: "120px",
            }}>
              <Typography>Nombre de usuario</Typography>
              <Typography>{API.user.username}</Typography>
            </Box>
            <Box sx={{
              display: "flex",
              gap: "200px",
            }}>
              <Typography>Nombre</Typography>
              <Typography>{API.user.name}</Typography>
            </Box>
            <Box sx={{
              display: "flex",
              gap: "190px",
            }}>
              <Typography>Apellidos</Typography>
              <Typography>{API.user.lastname}</Typography>
            </Box>
            <Box sx={{
              display: "flex",
              gap: "105px",
            }}>
              <Typography>Fecha de nacimiento</Typography>
              <Typography>{API.user.birthDate}</Typography>
            </Box>
          </Box>
          <Box sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}>
            <Typography>
              Datos de contacto
            </Typography>
            <Box sx={{
              display: "flex",
              gap: "217px",
            }}>
              <Typography>Email</Typography>
              <Typography>{API.user.mail}</Typography>
            </Box>
            <Box sx={{
              display: "flex",
              gap: "195px",
            }}>
              <Typography>Telefono</Typography>
              <Typography>{API.user.cellphone}</Typography>
            </Box>
            <Box sx={{
              display: "flex",
              gap: "206px",
            }}>
              <Typography>Ciudad</Typography>
              <Typography>{API.user.city}</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 8, display: "grid", }}>
            <Button variant="contained" sx={{
              display: "flex",
              justifySelf: "center",
              borderRadius: 8,
            }}>
              Editar
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default ProfileForm