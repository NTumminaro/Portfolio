import { Box, Card, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

function Banner() {
    return (
        <Box id="home" align="center">
            <Box className="insideBox bannerBox">
                <img
                    className="face"
                    src="images/Nick Cropped 2.png"
                    alt="Me"
                />
                <Card
                    sx={{
                        zIndex: -1,
                        backgroundColor: "#000000",
                        width: "100%",
                        alignSelf: "center",
                        textAlign: "left",
                    }}
                >
                    <Typography
                        variant="h1"
                        fontSize={"4vw"}
                        paddingX={4}
                        color={"#11a10e"}
                    >
                        Nick Tumminaro
                    </Typography>
                    <Typography
                        variant="h2"
                        gutterBottom
                        paddingX={4}
                        fontSize={"3vw"}
                    >
                        <Typewriter
                            options={{ cursor: "_" }}
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(30)
                                    .changeDeleteSpeed(20)
                                    .typeString("$ A pretty Cool Dude")
                                    .pauseFor(800)
                                    .deleteChars(9)
                                    .typeString("Neat Guy")
                                    .pauseFor(800)
                                    .deleteChars(15)
                                    .typeString("Hard Worker")
                                    .pauseFor(800)
                                    .deleteChars(11)
                                    .typeString("Twitch Streamer")
                                    .pauseFor(800)
                                    .deleteChars(15)
                                    .typeString("Cake Decorator?")
                                    .pauseFor(600)
                                    .deleteChars(15)
                                    .typeString("Friend...?")
                                    .pauseFor(300)
                                    .deleteChars(10)
                                    .typeString("Quick Learner")
                                    .pauseFor(150)
                                    .deleteChars(13)
                                    .typeString("Gamer")
                                    .pauseFor(150)
                                    .deleteChars(6)
                                    .typeString("n Insomniac")
                                    .pauseFor(150)
                                    .deleteChars(11)
                                    .typeString("lways Ready")
                                    .pauseFor(150)
                                    .changeDeleteSpeed("15")
                                    .deleteChars(11)
                                    .typeString("fraid of heights?")
                                    .pauseFor(150)
                                    .deleteChars(17)
                                    .changeDelay(150)
                                    .typeString(" ...")
                                    .pauseFor(1000)
                                    .changeDeleteSpeed(40)
                                    .deleteChars(3)
                                    .typeString(" Full-Stack Developer")
                                    .start();
                            }}
                        />
                    </Typography>
                </Card>
            </Box>
        </Box>
    );
}

export default Banner;
