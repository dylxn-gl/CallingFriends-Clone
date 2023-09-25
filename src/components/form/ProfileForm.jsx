import { Box, Typography, Button } from "@mui/material"
import ShareIcon from "@mui/icons-material/Share";
import API from "../../api/API"

const ProfileForm = () => {
    return (
        <>
            <Box sx={{ color: "#000000", }}>
                <Typography>
                    Mi información
                </Typography>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    color: "#169AD7",
                }}>
                    <Typography variant="h6">callingfriends.com/{API.user.username}</Typography>
                    <Button
                        sx={{
                            borderRadius: 8,
                            color: "#ffffff",
                        }}
                        color="secondary"
                        variant="contained"
                        startIcon={<ShareIcon />}
                    >
                        Compartir
                    </Button>
                </Box>
                <Typography>
                    COPIA TU LINK PERSONAL Y COMPARTE EN TU RED SOCIAL PARA GANAR DINERO RÁPIDO
                </Typography>
            </Box>
        </>
    )
}

export default ProfileForm