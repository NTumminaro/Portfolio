import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Expertise from "./components/Expertise/Expertise";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import ToTop from "./components/ToTop/ToTop";

function App() {
    return (
        <Box className="backdrop">
            {" "}
            <Header />
            <Banner />
            <Expertise />
            <Project />
            <Experience />
            <Contact />
            <ToTop />
            <Footer />
        </Box>
    );
}

export default App;
