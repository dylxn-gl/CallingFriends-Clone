import { Box } from "@mui/material";
import BetCard from "../betCard/BetCard";
import API from "../../api/API";

const Main = () => {
  return (
    <>
      <Box>
        {Object.keys(API.popularBets).map((betKey) => {
          const bet = API.popularBets[betKey];

          if (betKey >= 2) {
            return null
          }

          return (
            <BetCard
              key={betKey}
              endDate={bet.endDate}
              cost={bet.cost}
            />
          );
        })}
      </Box>
    </>
  )
}

export default Main