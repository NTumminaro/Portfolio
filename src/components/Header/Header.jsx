import React from "react";
import {
    AppBar,
    Box,
    IconButton,
    Menu,
    Toolbar,
    Typography,
} from "@mui/material";
import Navigation from "../Navigation/Navigation";
import MenuIcon from "@mui/icons-material/Menu";

const sections = ["home", "expertise", "projects", "experience", "contactMe"];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        {" "}
                        ./nickTumminaro{" "}
                    </Typography>
                    <Box
                        sx={{
                            display: { xs: "inherit", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {sections.map((section) => (
                                <ul key={section} style={{ padding: 0 }}>
                                    <Navigation
                                        key={section}
                                        section={section}
                                        width="100%"
                                    />
                                </ul>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", md: "block" },
                        }}
                    >
                        {sections.map((section) => (
                            <Navigation key={section} section={section} />
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
