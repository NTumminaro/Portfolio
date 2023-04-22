import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
    return (
        <Box>
            <BottomNavigation>
                <BottomNavigationAction
                    icon={<GitHubIcon />}
                    href="https://github.com/NTumminaro"
                />
                <BottomNavigationAction icon={<LinkedInIcon />} href="/" />
                <BottomNavigationAction
                    icon={<YouTubeIcon />}
                    href="https://www.youtube.com/@misterstealyourgil/featured"
                />
            </BottomNavigation>
        </Box>
    );
}

export default Footer;
