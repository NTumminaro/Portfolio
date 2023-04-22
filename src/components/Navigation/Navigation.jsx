import { Button } from "@mui/material";
// Add scroll to
function Navigation({ section }) {
    let link = "#" + section;
    return (
        <Button href={link} sx={{ textTransform: "none", color: "#dcdcaa" }}>
            .{section}
            <span style={{ color: "#ffd710" }}>()</span>
        </Button>
    );
}

export default Navigation;
