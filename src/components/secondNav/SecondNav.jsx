import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

//Enlaces de la navegacion secundaria
const Links = [
  { text: "DATOS", icon: <PaidIcon />, href: "/profile", },
  { text: "APUESTAS", icon: <ExitToAppIcon />, href: "/profile/bets", },
  { text: "FINANZAS", icon: <AccountCircleIcon />, href: "/profile/payments", },
];

const SecondNav = () => {
  return (
    <AppBar position="static" sx={{
      mb: .5,
    }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          {Links.map((link, index) => (
            <Link key={index} to={link.href} style={{ textDecoration: 'none' }}>
              <Typography
                key={index}
                component="a"
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
  );
};

export default SecondNav;
