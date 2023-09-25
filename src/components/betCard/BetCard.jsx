import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
} from "@mui/material";

const BetCard = ({ image, endDate, cost }) => {
    return (
        <>
            <Card sx={{
                padding: 1,
                display: "flex",
                gap: 1, alignItems: "center",
                borderRadius: 6,
                width: "100%",
                minWidth: "352px",
            }}>
                <CardMedia
                    sx={{
                        borderRadius: "50%",
                        width: 80,
                        height: 80,
                    }}
                    component="img"
                    image={image}
                />
                <CardContent sx={{
                    width: 45,
                    minWidth: "70%",
                    maxWidth: "70%",
                }}>
                    <Typography variant="body2">Description:</Typography>
                    <Typography sx={{ fontWeight: "bold" }} variant="body2">
                        Termina: {endDate}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }} variant="body2">
                        Monto: {cost}
                    </Typography>
                    <Button
                        sx={{
                            borderRadius: 6,
                            textTransform: "none",
                            fontWeight: "bold",
                        }}
                        variant="contained"
                    >
                        ¿Crees que pasará al contrario? ¡Apuesta!
                    </Button>
                </CardContent>
            </Card>
        </>
    );
};

export default BetCard;