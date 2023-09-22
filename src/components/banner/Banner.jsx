import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ShareIcon from "@mui/icons-material/Share";

const Img = styled("img")({
  width: "196px",
  height: "196px",
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
        <Box>
          <Button
            sx={{
              borderRadius: 8,
            }}
            variant="contained"
          >
            Actualizar avatar
          </Button>
          <Box>
            <Img />
            <Box>
              <Typography variant="h6">callingfriends.com/person</Typography>
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
        <Box>
          <Typography>
            person
            <br />
            @person
          </Typography>
          <Typography>
            0
            <br />
            seguidores
          </Typography>
          <Typography>
            0
            <br />
            seguidos
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
