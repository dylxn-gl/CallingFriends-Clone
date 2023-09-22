import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/system";

const Links = [
  { text: "APUESTAS", icon: <PaidIcon /> },
  { text: "SALIR", icon: <ExitToAppIcon /> },
  { text: "MI PERFIL", icon: <AccountCircleIcon /> },
];

const Img = styled("img")({
  width: 149.05,
});

const Nav = () => {
  return (
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
            <Typography
              key={index}
              component="a"
              href="#"
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
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
