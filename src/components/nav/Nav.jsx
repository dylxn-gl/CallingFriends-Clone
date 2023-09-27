import ProfilePage from "../../pages/Profile";
import BetsPage from "../../pages/Bets";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/system";

const Links = [
  { text: "APUESTAS", icon: <PaidIcon />, href: "/all-bets", },
  { text: "SALIR", icon: <ExitToAppIcon />, href: "", },
  { text: "MI PERFIL", icon: <AccountCircleIcon />, href: "/profile", },
];

const Img = styled("img")({
  width: 149.05,
});

const Nav = () => {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Img src="https://callingfriends.com/assets/main.webp" />
          <Box
            sx={{
              display: "flex",
            }}
          >
            {Links.map((link, index) => (
              <Link key={index} to={link.href} style={{ textDecoration: 'none' }}>
                <Typography
                  href=""
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: "transparent",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: "bold",
                    marginRight: 2,
                  }}
                >
                  {link.icon}
                  {link.text}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route index path="/all-bets" element={<BetsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Nav;
