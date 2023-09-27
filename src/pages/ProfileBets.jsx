import { Box } from "@mui/material";
import Banner from "../components/banner/Banner";
import SecondNav from "../components/secondNav/SecondNav";
import BetsMain from "../components/betsMain/BetsMain";
import Footer from "../components/footer/Footer";

const ProfileBetsPage = () => {
  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "1141px",
        }}
      >
        <Banner />
        <SecondNav />
        <BetsMain />
        <Footer />
      </Box>
    </>
  )
}

export default ProfileBetsPage