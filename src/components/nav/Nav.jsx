import { useState } from "react";
import ProfilePage from "../../pages/Profile";
import ProfileFinancesPage from "../../pages/ProfileFinances";
import ProfileBetsPage from "../../pages/ProfileBets";
import BetsPage from "../../pages/Bets";
import Undefined from "../undefined/Undefined";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Drawer, IconButton } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from "@mui/system";

//Enlaces de la navegacion
const Links = [
  { text: "APUESTAS", icon: <PaidIcon />, href: "/all-bets", },
  { text: "SALIR", icon: <ExitToAppIcon />, href: "", },
  { text: "MI PERFIL", icon: <AccountCircleIcon />, href: "/profile", },
];

//Componente para la imagen
const Img = styled("img")({
  width: 149.05,
});

const Nav = () => {
  const [open, setOpen] = useState(false)
  //Navegacion principal
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
              display: {xs: "none", md: "flex"},
            }}
          >
            {Links.map((link, index) => (
              <Link key={index} to={link.href} style={{ textDecoration: 'none' }}>
                <Typography variant="h5"
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
          <IconButton sx={{
              display: {xs: "block", md: "none"},
              color: "#ffffff",
            }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <ResponsiveNav />
      </Drawer>
      {/*Rutas de la navegacion*/}
      <Routes>
        <Route index path="/" element={<Box sx={{ height: "90vh", }}><Undefined /></Box>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/bets" element={<ProfileBetsPage />} />
        <Route path="/profile/payments" element={<ProfileFinancesPage />} />
        <Route index path="/all-bets" element={<BetsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Nav;

const ResponsiveNav = () => {
  //Navegacion responsive
  return (
    <>
      <Box>
        <nav>
          <Box sx={{
            bgcolor: "#169ad7",
          }}>
            <Img src="https://callingfriends.com/assets/main.webp" width="250px" height="auto"/>
          </Box>
          <List>
            {Links.map((link, index) => (
              <Link key={index} to={link.href} style={{ textDecoration: 'none' }}>
                <ListItem disablePadding
                  href=""
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "transparent",
                    color: "#000000",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  <ListItemIcon sx={{color: "#000000",}}>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText primary={link.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </nav>
      </Box>
    </>
  )
}