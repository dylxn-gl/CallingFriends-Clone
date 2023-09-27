import { Box } from "@mui/material";
import Banner from "../components/banner/Banner";
import SecondNav from "../components/secondNav/SecondNav";
import FinancesMain from "../components/FinancesMain/FinancesMain";
import Footer from "../components/footer/Footer";

const ProfileFinancesPage = () => {
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
        <FinancesMain />
        <Footer />
      </Box>
    </>
  )
}

export default ProfileFinancesPage