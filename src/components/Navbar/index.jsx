import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const navItems = [
    { to: '/', description: 'Inicio' },
    { to: '/sobremi', description: 'Sobre mí' },
    // { to: '/habilidades', description: 'Habilidades' },
    { to: '/proyectos', description: 'Proyectos' },
    { to: '/academia', description: 'Academia' },
    { to: '/playground', description: 'Playground' },
    { to: '/blog', description: 'Blog' },
    { to: '/contacto', description: 'Contacto' }
];

function NavBar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        AxlCode
                    </Typography>

                    {/* Nav horizontal */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <List sx={{ display: 'flex', p: 0, m: 0 }}>
                            {navItems.map((item, index) => (
                                <ListItem
                                    key={index}
                                    disablePadding
                                    sx={{ width: 'auto' }} // importante para que no ocupe 100%
                                >
                                    <ListItemButton
                                        component={Link}
                                        to={item.to}
                                        sx={{ px: 2, textAlign: 'center' }}
                                    >
                                        <ListItemText
                                            primary={item.description}
                                            primaryTypographyProps={{ noWrap: true }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
