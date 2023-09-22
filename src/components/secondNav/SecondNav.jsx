import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Links = [
  { text: "DATOS", icon: <PaidIcon /> },
  { text: "APUESTAS", icon: <ExitToAppIcon /> },
  { text: "FINANZAS", icon: <AccountCircleIcon /> },
];

const SecondNav = () => {
  return (
    <AppBar position="static">
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

export default SecondNav;
