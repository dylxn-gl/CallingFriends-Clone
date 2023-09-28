import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
} from "@mui/material";

const BetCard = ({ image, endDate, cost }) => {
    //Cards de las apuestas
    return (
        <>
            <Card sx={{
                padding: 2,
                display: "flex", alignItems: "center",
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
                    ml: "12px",
                    padding: "0!important",
                    width: 45,
                    minWidth: "70%",
                    maxWidth: "70%",
                }}>
                    <Typography sx={{ fontSize: "12.8px", }}>Description:</Typography>
                    <Typography sx={{ fontSize: "12.8px", fontWeight: "bold" }} >
                        Termina: {endDate}
                    </Typography>
                    <Typography sx={{ fontSize: "12.8px", fontWeight: "bold" }} >
                        Monto: {cost}
                    </Typography>
                    <Button
                        sx={{
                            padding: 0,
                            borderRadius: 6,
                            textTransform: "none",
                            fontWeight: "600",
                            fontSize: "13.6px",
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