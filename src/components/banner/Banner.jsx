import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ShareIcon from "@mui/icons-material/Share";
import API from "../../api/API";

const Img = styled("img")({
  width: "190px",
  height: "190px",
  borderRadius: "50%",
  border: "4px solid #ffffff",
});

const Banner = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "340px",
          bgcolor: "#252525",
          color: "#ffffff",
        }}
      >
        <Button
          sx={{
            borderRadius: 8,
            margin: "24px 0 0 80%",
          }}
          variant="contained"
        >
          Actualizar portada
        </Button>
        <Box sx={{
          display: "flex",
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}>
            <Button
              sx={{
                borderRadius: 8,
              }}
              variant="contained"
            >
              Actualizar avatar
            </Button>
            <Img src={API.user.photo} />
          </Box>
          <Box>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}>
              <Typography sx={{
                flexGrow: "1",
              }}>
                {API.user.name}
                <br />
                @{API.user.username}
              </Typography>
              <Typography sx={{
                textAlign: "center",
              }}>
                {API.user.followers}
                <br />
                seguidores
              </Typography>
              <Typography sx={{
                textAlign: "center",
              }}>
                {API.user.following}
                <br />
                seguidos
              </Typography>
            </Box>
            <Box sx={{
              padding: 1,
              display: "flex",
              alignItems: "center",
              gap: 2,
              background: "linear-gradient(90deg,#fff 51%,rgba(69,9,121,0))",
              color: "#169AD7",
            }}>
              <Typography variant="h6">callingfriends.com/{API.user.username}</Typography>
              <Button
                sx={{
                  borderRadius: 8,
                }}
                color="secondary"
                variant="contained"
                startIcon={<ShareIcon />}
              >
                Compartir
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
