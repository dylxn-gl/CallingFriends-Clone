import Nav from "../components/nav/Nav";
import Banner from "../components/banner/Banner";
import SecondNav from "../components/secondNav/SecondNav";
import Main from "../components/main/Main";
import { Box } from "@mui/material";

const ProfilePage = () => {
  return (
    <>
      <Nav />
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "1141px",
        }}
      >
        <Banner />
        <SecondNav />
        <Main />
      </Box>
    </>
  )
}

export default ProfilePage