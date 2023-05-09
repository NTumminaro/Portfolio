import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ReactApexChart from "react-apexcharts";
import { Slide } from "react-awesome-reveal";

const series = [100, 90, 80, 70, 60, 50, 40, 30, 30, 30, 30, 20, 20, 10];

const options = {
    labels: [
        "JavaScript",
        "Node",
        "React",
        "CSS",
        "HTML",
        "Vite",
        "SQL",
        "Express",
        "MongoDB",
        "Apollo",
        "GraphQL",
        "MUI",
        "Lua",
        "Python",
    ],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        colors: ["#000000"],
    },
    legend: {
        show: true,
        position: "bottom",
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: "2vw",
                        fontFamily: ["Consolas", '"Courier New"'].join(","),
                        offsetY: 10,
                    },
                    value: {
                        show: false,
                    },
                },
            },
        },
    },
};

function Expertise() {
    return (
        <Slide triggerOnce={true} duration={1500}>
            <Box className="boxes" id="expertise" align="center">
                <Box className="insideBox">
                    <Typography className="header" variant="h3">
                        /expertise
                    </Typography>
                    <Grid2
                        container
                        sx={{ alignItems: "center" }}
                        align={"center"}
                        marginY={4}
                    >
                        <Grid2 xs={12} md={12} lg={6} marginY={4}>
                            <Box className="insideBox">
                                <Typography className="header" variant="h4">
                                    /aboutMe
                                </Typography>
                                <Typography
                                    variant="h5"
                                    textAlign={"left"}
                                    padding={2}
                                    alignContent={"center"}
                                    color={"#fff"}
                                >
                                    Hi! I'm{" "}
                                    <span style={{ color: "#4ec995" }}>
                                        Nick Tumminaro,
                                    </span>
                                    <span style={{ color: "#ce916a" }}>
                                        {" "}
                                        a Texas based Full-Stack Web Developer.
                                    </span>{" "}
                                    I have a passion for working on web
                                    applications, whether they're for
                                    <span style={{ color: "#f1d700" }}>
                                        {" "}
                                        clients, friends, or even myself!
                                    </span>{" "}
                                    I focus on{" "}
                                    <span style={{ color: "#34b5ff" }}>
                                        clean and efficent code,
                                    </span>{" "}
                                    while simultaneously striving for a{" "}
                                    <span style={{ color: "#d16969" }}>
                                        functional and appealing UX design.
                                    </span>{" "}
                                    With a background in cake decorating, I
                                    always find myself adding that{" "}
                                    <span style={{ color: "#da70c5" }}>
                                        extra icing on the cake!
                                    </span>{" "}
                                </Typography>
                            </Box>
                        </Grid2>
                        <Grid2 xs={12} md={12} lg={6}>
                            <ReactApexChart
                                options={options}
                                series={series}
                                type="donut"
                                width="80%"
                            />
                        </Grid2>
                    </Grid2>
                </Box>
            </Box>
        </Slide>
    );
}

export default Expertise;
