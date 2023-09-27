import { createTheme, ThemeProvider, Box, Typography, Button } from "@mui/material";
import BetCard from "../betCard/BetCard";
import Undefined from "../undefined/Undefined";
import API from "../../api/API";

const theme = createTheme({
  palette: {
    text: {
      primary: "#000000",
    },
  }
});
const BetsMain = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Box><Undefined /></Box>
                    <Box sx={{
                        padding: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                        bgcolor: "#efeeed",
                    }}>
                        <Typography sx={{
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
                        <Button variant="outlined" sx={{
                            borderRadius: 8,
                        }}>
                            Ver más
                        </Button>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default BetsMain