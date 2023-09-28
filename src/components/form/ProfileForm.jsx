import { useState } from "react";
import { createTheme, ThemeProvider, Box, Typography, Button, TextField, Snackbar, Alert } from "@mui/material"
import ShareIcon from "@mui/icons-material/Share";
import API from "../../api/API"

//Tema de mui
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
  components: {
    MuiButton: {
      root: {
        textTransform: "none!important",
      },
    },
  },
});

const ProfileForm = () => {
  //Estados de los componentes
  const [openAlert, setOpenAlert] = useState(false);
  const [openSecondAlert, setSecondOpenAlert] = useState(false);
  const [textCopied, setTextCopied] = useState(false);
  const [formDisplay, setFormDisplay] = useState(false)
  const textToCopy = "callingfriends.com/" + API.user.username;

  //Funcion para copiar enlace en el portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setTextCopied(true);
      });

    //Funcion para copiar abrir la alerta
    setSecondOpenAlert(textCopied);
    setTimeout(() => {
      setSecondOpenAlert(false);
    }, 3000);

  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ mt: 5, mb: 5, color: "#000000", }}>
          <Typography sx={{ fontSize: "36.8px!important", fontWeight: "bold", }}>
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
            <Typography sx={{fontSize: "28.4px!important", fontWeight: "bold",}}>callingfriends.com/...</Typography>
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
          <Typography sx={{ fontSize: "14.4px!important", fontWeight: "bold",}}>
            COPIA TU LINK PERSONAL Y COMPARTE EN TU RED SOCIAL PARA GANAR DINERO RÁPIDO
          </Typography>
          <Box sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}>
            {/*Seccion con la informacion y el cambio al formulario de informacion de usuario*/}
            {formDisplay ?
              /*Formulario de informacion personal y de contacto del usuario*/
              (
                <Box>
                  <Typography variant="h3" sx={{color: "#169AD7!important", fontWeight: "bold",}}>
                    Información personal
                  </Typography>
                  <Box sx={{
                    display: "flex",
                    gap: "120px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Nombre de usuario</Typography>
                    <TextField id="standard-basic" label="" variant="standard" />
                  </Box>
                  <Box sx={{
                    display: "flex",
                    gap: "200px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Nombre</Typography>
                    <TextField id="standard-basic" label="" variant="standard" />
                  </Box>
                  <Box sx={{
                    display: "flex",
                    gap: "190px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Apellidos</Typography>
                    <TextField id="standard-basic" label="" variant="standard" />
                  </Box>
                  <Box sx={{
                    display: "flex",
                    gap: "105px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Fecha de Nacimiento</Typography>
                    <TextField id="standard-basic" label="" variant="standard" />
                  </Box>
                  <Typography variant="h3" sx={{mt: "56px", color: "#169AD7!important", fontWeight: "bold",}}>
                    Datos de contacto 
                  </Typography>
                  <Box sx={{
                    display: "flex",
                    gap: "217px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Email</Typography>
                    <TextField id="standard-basic" label="" variant="standard" />
                  </Box>
                  <Box sx={{
                    display: "flex",
                    gap: "195px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Teléfono</Typography>
                    <TextField id="standard-basic" label="" variant="standard" />
                  </Box>
                  <Box sx={{
                    display: "flex",
                    gap: "206px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Ciudad</Typography>
                    <TextField id="standard-basic" label="" variant="standard" />
                  </Box>
                  <Box sx={{ mt: 8, display: "flex", justifyContent: "center", gap: 4, }}>
                    <Button variant="contained" sx={{
                      borderRadius: 8,
                    }}
                      onClick={() => {
                        setFormDisplay(false)
                        setOpenAlert(true)
                        setTimeout(() => {
                          setOpenAlert(false)
                        }, 3000);
                      }}
                    >
                      Guardar
                    </Button>
                    <Button variant="contained" sx={{
                      borderRadius: 8,
                    }}
                      onClick={() => setFormDisplay(false)}
                    >
                      Cancelar
                    </Button>
                  </Box>
                </Box>
              ) :
              /*Informacion personal y de contacto del usuario*/
              (
                <Box>
                  <Typography variant="h3" sx={{color: "#169AD7!important", fontWeight: "bold",}}>
                    Información personal
                  </Typography>
                  <Box sx={{
                    display: "flex",
                    gap: "120px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Nombre de usuario</Typography>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>{API.user.username}</Typography>
                  </Box>
                  <Box sx={{
                    display: "flex",
                    gap: "200px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Nombre</Typography>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>{API.user.name}</Typography>
                  </Box>
                  <Box sx={{
                    display: "flex",
                    gap: "190px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Apellidos</Typography>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>{API.user.lastname}</Typography>
                  </Box>
                  <Box sx={{
                    display: "flex",
                    gap: "105px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Fecha de nacimiento</Typography>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>{API.user.birthDate}</Typography>
                  </Box>
                  <Typography variant="h3" sx={{ mt: "56px",color: "#169AD7!important", fontWeight: "bold",}}>
                    Datos de contacto
                  </Typography>
                  <Box sx={{
                    display: "flex",
                    gap: "217px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Email</Typography>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>{API.user.mail}</Typography>
                  </Box>
                  <Box sx={{
                    display: "flex",
                    gap: "195px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Teléfono</Typography>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>{API.user.cellphone}</Typography>
                  </Box>
                  <Box sx={{
                    display: "flex",
                    gap: "206px",
                  }}>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>Ciudad</Typography>
                    <Typography sx={{ mt: "12px",fontSize: "16px!important", fontWeight: "500!important",}}>{API.user.city}</Typography>
                  </Box>
                  <Box sx={{ mt: 8, display: "grid" }}>
                    <Button variant="contained" sx={{
                      display: "flex",
                      justifySelf: "center",
                      borderRadius: 8,
                    }}
                      onClick={() => setFormDisplay(true)}
                    >
                      Editar
                    </Button>
                  </Box>
                </Box>
              )}
          </Box>
        </Box>
      </ThemeProvider>
      {/*Alertas*/}
      <Snackbar open={openSecondAlert}>
        <Alert severity="success">Copiado correctamente</Alert>
      </Snackbar>
      <Snackbar open={openAlert}>
        <Alert severity="success">Agregado correctamente</Alert>
      </Snackbar>
    </>
  )
}

export default ProfileForm;
