import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { Slide } from "react-awesome-reveal";

function Contact() {
    return (
        <Slide triggerOnce={true} duration={1500} direction={"right"}>
            <Box className="boxes " id="contactMe" align="center">
                <Box className="insideBox">
                    <Typography className="header" variant="h3">
                        /contactMe
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "center", marginTop: "10px" }}
                    >
                        Trying to get in touch?
                    </Typography>
                    <Box
                        paddingY={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "80%",
                        }}
                    >
                        <Box
                            component="form"
                            sx={{
                                "& .MuiTextField-root": {
                                    m: 1,
                                    width: "100%",
                                },
                                width: "90%",
                                maxWidth: 600,
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    id="filled-password-input"
                                    label="Name"
                                    autoComplete="current-password"
                                    variant="filled"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="filled-password-input"
                                    label="Email"
                                    autoComplete="current-password"
                                    variant="filled"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="filled-password-input"
                                    label="Your message"
                                    multiline
                                    rows={4}
                                    variant="filled"
                                />
                            </div>
                            <Typography
                                variant="subtitle1"
                                sx={{ textAlign: "center", marginTop: "10px" }}
                            >
                                (Contact form is currenty disabled due to email spam)
                            </Typography>
                            <Button
                                variant="outlined"
                                href="/"
                                disabled
                                sx={{
                                    marginTop: "10px",
                                    textTransform: "none",
                                    color: "#dcdcaa",
                                    alignSelf: "left",
                                }}
                            >
                                .submit
                                <span style={{ color: "#ffd710" }}>()</span>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Slide>
    );
}

export default Contact;
