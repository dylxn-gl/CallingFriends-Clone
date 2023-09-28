
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider, Box, Typography, Button } from "@mui/material";
import BetCard from "../betCard/BetCard";
import ProfileForm from "../form/ProfileForm";
import API from "../../api/API";

//Tema de mui
const theme = createTheme({
  palette: {
    text: {
      primary: "#000000",
    },
  }
});

const Main = () => {
  //Main de la seccion principal con el recuadro principal y el recuadro de las apuestas
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{
          display: "flex",
          justifyContent: { xs: "", md: "space-between", },
          alignItems: { xs: "center", md: "flex-start", },
          flexDirection: { xs: "column", md: "row" },
        }}>

          <Box sx={{
            ml: { xs: 2, md: 0, },
          }}>
            < ProfileForm />
          </Box>
          <Box sx={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            bgcolor: { xs: "transparent", md: "#efeeed", },
          }}>
            <Typography variant="h3" sx={{
              color: "#000000",
            }}>
              Apuestas  mas populares
            </Typography>
            {Object.keys(API.popularBets).map((betKey) => {
              const bet = API.popularBets[betKey];

              if (betKey >= 2) {
                return null
              }

              return (
                <BetCard
                  key={betKey}
                  image={bet.userPhoto}
                  endDate={bet.endDate}
                  cost={bet.cost}
                />
              );
            })}
            <Link to="/all-bets">
              <Button variant="outlined" sx={{
                borderRadius: 8,
              }}>
                Ver más
              </Button>
            </Link>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Main