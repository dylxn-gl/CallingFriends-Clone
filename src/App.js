import Nav from "./components/nav/Nav";
import Banner from "./components/banner/Banner";
import SecondNav from "./components/secondNav/SecondNav";
import { CssBaseline, Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Nav />
      <Box
        sx={{
          margin: "0 5%",
        }}
      >
        <Banner />
        <SecondNav />
      </Box>
      <CssBaseline />
    </>
  );
};

export default App;
