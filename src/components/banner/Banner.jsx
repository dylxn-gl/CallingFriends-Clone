import { useState } from "react";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import styled from "@emotion/styled";
import ShareIcon from "@mui/icons-material/Share";
import API from "../../api/API";

//Componente Img
const Img = styled("img")({
  width: "190px",
  height: "190px",
  borderRadius: "50%",
  border: "5px solid #ffffff",
  zIndex: 1,
});

const Banner = () => {

  //Estados de las funcionalidades
  const [profilePhoto, setProfilePhoto] = useState(API.user.photo);
  const [backgroundPhoto, setBackgroundPhoto] = useState(API.user.background);
  const [openAlert, setOpenAlert] = useState(false);
  const [openSecondAlert, setSecondOpenAlert] = useState(false);
  const [textCopied, setTextCopied] = useState(false);
  const textToCopy = "callingfriends.com/" + API.user.username;

  //Funcion para agregar foto de perfil
  const handlePhotoSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataURL = e.target.result;
        setProfilePhoto(imageDataURL);
      };
      reader.readAsDataURL(file);

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
    }
  };

  //Funcion para agregar fondo del perfil
  const handleBackgroundSelect = (e) => {
    const file2 = e.target.files[0];
    if (file2) {
      const reader2 = new FileReader();
      reader2.onload = (e) => {
        const imageDataURL2 = e.target.result;
        setBackgroundPhoto(imageDataURL2);
      };
      reader2.readAsDataURL(file2);

      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 3000);

    }
  };

  //Funcion para copiar url del perfil al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setTextCopied(true);
    });

    setSecondOpenAlert(textCopied);
    setTimeout(() => {
      setSecondOpenAlert(false);
    }, 3000);

  };

  return (
    <Box
      sx={{
        mb: "2px",
        width: "100%",
        height: "340px",
        background: `url(${backgroundPhoto ? backgroundPhoto : API.user.background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "#ffffff",
      }}
    >
      {/*Boton para actualizar portada*/}
      <Button
        sx={{
          borderRadius: 8,
          margin: {xs: "24px 0 0 55%", md: "24px 0 0 80%",},
        }}
        variant="contained"
      >
        <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
          Actualizar portada
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleBackgroundSelect}
          />
        </label>
      </Button>
      {/*Foto de perfil y datos*/}
      <Box
        sx={{
          mt: {xs: 6, md: 8,},
          ml: {xs: "20px", md: "128px"},
          mr: {xs: "20px", md: "128px"},
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/*Boton para actualizar avatar*/}
          <Button
            sx={{
              borderRadius: 8,
            }}
            variant="contained"
          >
            <label htmlFor="photo-upload" style={{ cursor: "pointer" }}>
              Actualizar avatar
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handlePhotoSelect}
              />
            </label>
          </Button>
          {/*avatar*/}
          <Img src={profilePhoto ? profilePhoto : API.user.photo} />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          {/*Datos de usuario*/}
          <Box
            sx={{
                mt: {xs: 10, md: 11},
                mb: 2,
                display: "flex",
                flexDirection: {xs: "column", md: "row"},
                alignItems: {xs: "flex-end", md: "center"},
                gap: 3,
            }}
          >
            <Typography
              sx={{
                textAlign: {xs: "right", md: "left"},
                flexGrow: {xs: "", md: "1"},
              }}
            >
              {API.user.name} {API.user.lastname}
              <br />
              @{API.user.username}
            </Typography>
            <Box sx={{display:"flex", gap: 3,}}>
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              {API.user.followers}
              <br />
              seguidores
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              {API.user.following}
              <br />
              seguidos
            </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ml: "-20px",
              padding: "8px 0 8px 25px",
              display: {xs: "none", md: "flex"},
              alignItems: "center",
              gap: 2,
              background: "linear-gradient(90deg,#fff 51%,rgba(69,9,121,0))",
              color: "#169AD7",
              maxWidth: "655px",
            }}
          >
            <Typography variant="h6">
              callingfriends.com/{API.user.username}
            </Typography>
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
        </Box>
      </Box>
      <Snackbar open={openAlert}>
        <Alert severity="success">Agregado correctamente</Alert>
      </Snackbar>
      <Snackbar open={openSecondAlert}>
        <Alert severity="success">Copiado correctamente</Alert>
      </Snackbar>
    </Box>
  );
};

export default Banner;
