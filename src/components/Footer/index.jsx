import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: "auto",
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                {/* Nombre o marca */}
                <Typography variant="body1">© {new Date().getFullYear()} AxlCode</Typography>

                {/* Navegación rápida */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <MuiLink component={Link} to="/" underline="hover">
                        Inicio
                    </MuiLink>
                    <MuiLink component={Link} to="/sobremi" underline="hover">
                        Sobre mí
                    </MuiLink>
                    <MuiLink component={Link} to="/contacto" underline="hover">
                        Contacto
                    </MuiLink>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
