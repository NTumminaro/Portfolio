import React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Card,
    CardHeader,
    CardContent,
    Collapse,
    IconButton,
    Typography,
} from "@mui/material";

function WorkHist({ job }) {
    const [expanded, setExpanded] = React.useState(false);

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ marginY: "10px", width: "100%" }}>
            <CardHeader className="resume"
                title={job.title}
                subheader={job.date}
                action={
                    <>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </>
                }
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h6">{job.site} ({job.location})</Typography>
                    <ul>
                        {job.duties.map((duty) => (
                            <li style={{ maxWidth: "100%" }} key={duty}>
                                {duty}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default WorkHist;
