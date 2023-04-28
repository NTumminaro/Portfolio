import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: ["Consolas", '"Courier New"'].join(","),
        h4: {
            color: "#3f9cd6",
        },
        h3: {
            textAlign: "center",
            color: "#3f9cd6",
            padding: 12,
        },
        subtitle1: {
            textAlign: "center",
            color: "#3f9cd6",
        },
        h5: {
            color: "#4ec995",
        },
        h6: {
            color: "#3f9cd6",
        },
    },
});

export default theme;
