import { Box, Typography } from "@mui/material"

const Footer = () => {
  //Footer
  return (
    <>
      <Box sx={{
        mt: 10,
        mb: 5,
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: { xs: "center" },
        justifyContent: { xs: "", md: "space-between", },
        color: "#000000",
      }}>
        <Typography variant="body1" sx={{fontWeight: "bold",}}>
          Calling Friends. 2023
        </Typography>
        <Box sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: { xs: "center" },
        }}>
          <Typography variant="body1" sx={{fontWeight: "600",}}>NOSOTROS</Typography>
          <Typography variant="body1" sx={{fontWeight: "600",}}>TERMS DEL SERVICIO</Typography>
          <Typography variant="body1" sx={{fontWeight: "600",}}>PRIVACIDAD</Typography>
          <Typography variant="body1" sx={{fontWeight: "600",}}>COMO FUNCIONA</Typography>
          <Typography variant="body1" sx={{fontWeight: "600",}}>POLITICAS DE USO</Typography>
          <Typography variant="body1" sx={{fontWeight: "600",}}>PAGO SEGURO</Typography>
          <Typography variant="body1" sx={{fontWeight: "600",}}>CONTACTO</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Footer