import { Box, Typography } from "@mui/material"

const Undefined = () => {
  //Mensaje de undefined
    return (
    <Box sx={{
      display: "grid",
      placeContent: "center",
      height: "100%",
      textAlign: "center",
    }}>
      <Typography variant="h4" color="primary">
        Lo sentimos, por ahora no hay nada que ver aqui, vuelve despues
      </Typography>
    </Box>
    )
}

export default Undefined