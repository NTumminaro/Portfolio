import React from "react";
import { BottomNavigation, Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { ReactComponent as TwitchIcon } from "./twitch.svg";

function Footer() {
    return (
        <Box>
            <BottomNavigation>
                <Button href="https://github.com/NTumminaro">
                    <GitHubIcon style={{ color: "#ffffff" }} />
                </Button>
                <Button href="https://www.youtube.com/@misterstealyourgil/featured">
                    <YouTubeIcon style={{ color: "#ff0000" }} />
                </Button>
                <Button href="https://www.linkedin.com/in/nicholas-tumminaro-ab0a82238/">
                    <LinkedInIcon style={{ color: "#0a66c2" }} />
                </Button>
                <Button href="https://www.twitch.tv/misterstealyourgil">
                    <TwitchIcon />
                </Button>
            </BottomNavigation>
        </Box>
    );
}

export default Footer;
