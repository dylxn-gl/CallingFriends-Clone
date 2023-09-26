import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <>
      <Box sx={{
        mt: 10,
        mb: 5,
        display: "flex",
        justifyContent: "space-between",
        color: "#000000",
      }}>
        <Typography>
          Calling Friends. 2023
        </Typography>
        <Box sx={{
          display: "flex",
          gap: 2,
        }}>
          <Typography>NOSOTROS</Typography>
          <Typography>TERMS DEL SERVICIO</Typography>
          <Typography>PRIVACIDAD</Typography>
          <Typography>COMO FUNCIONA</Typography>
          <Typography>POLITICAS DE USO</Typography>
          <Typography>PAGO SEGURO</Typography>
          <Typography>CONTACTO</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Footer