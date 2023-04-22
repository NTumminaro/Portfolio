import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Slide } from "react-awesome-reveal";

const projects = [
    {
        title: "AC Golden Rod Pro",
        subtitle: "React / Vite",
        img: "/images/AC Golden Rod Pro.png",
        link: "https://github.com/NTumminaro/ACGC-Golden-Rod-Pro",
    },
    {
        title: "Sum of Best",
        subtitle: "Sequalize / Express",
        img: "/images/Sum of Best.png",
        link: "https://github.com/NTumminaro/Sum-Of-Best",
    },
    {
        title: "Karaoke Dokie",
        subtitle: "jQuery",
        img: "/images/Karaoke Dokie.png",
        link: "https://charles-ram.github.io/karaoke-dokie-project/",
    },
    {
        title: "AC Fish Tracker",
        subtitle: "Lua",
        img: "/images/AC Fish Tracker.png",
        link: "https://github.com/NTumminaro/AC-fish-tracker-package",
    },
];

function Project() {
    return (
        <Slide triggerOnce={true} duration={1500} direction={"right"}>
            <Box className="boxes" id="projects" align="center">
                <Box className="insideBox">
                    <Typography className="header" variant="h3">
                        /projects
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "26px",
                        }}
                    >
                        <Grid2 container spacing={3} align={"center"}>
                            {projects.map((item) => (
                                <Grid2 key={item.title} xs={12} md={6} lg={3}>
                                    <Card
                                        sx={{
                                            maxWidth: 400,
                                            outline: "2px Solid grey",
                                        }}
                                    >
                                        {/* '&:hover': { display: "inline-block", transform: "scale(1.01)", overflow: "hidden" } */}
                                        <CardActionArea href={item.link}>
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={item.img}
                                                alt={item.title}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {" "}
                                                    {item.subtitle}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Box>
                </Box>
            </Box>
        </Slide>
    );
}

export default Project;
