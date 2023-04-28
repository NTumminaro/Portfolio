import { Box, Tooltip, Typography } from "@mui/material";
import WorkHist from "../WorkHist/WorkHist";
import { Slide } from "react-awesome-reveal";

const jobs = [
    {
        title: "Cake Decorator && Assistant Bakery Manager",
        date: "April 2022 - Current",
        site: "Tom Thumb",
        location: "Mckinney, Tx",
        duties: [
            " Worked with Customers to provide custom cake orders to their specifications",
            "Filled the display case daily with cakes matching our current layout",
            "Fielded complaints and worked with Bakery Manager to fix any discrepancies",
            "Placed orders for required products and tools",
            "Co-Interviewed potential Bakery employees",
            "Trained assistant cake decorators and worked closely with other staff members",
            "Took charge of distress, vision, and production goals on a daily basis",
        ],
    },
    {
        title: "Cake Decorator && Customer Consultant",
        date: "Jan 2021 - April 2022",
        site: "Simply Delicious",
        location: "Waco, Tx",
        duties: [
            "Consulted with customers about custom cake orders",
            "Consulted and organized all wedding consultations and tastings",
            "Alternated between customer service, cake decorating and IT Support",
            "Managed and updated the store's website",
            "Handled all online and in person orders",
            "Created custom images for cakes and store's paperwork",
            "Fielded Complaints from customers and provided solutions",
            "Provided personal touch and customer service at wedding Venues",
            "Operated store's email, Instagram, Facebook, and telephones",
        ],
    },
    {
        title: "Cake Decorator && Customer Service ",
        date: "Feb 2018 - Dec 2020",
        site: "Dunkin / Baskin Robbins",
        location: "Mckinney, Tx",
        duties: [
            "Decorated ice cream cakes for special orders and display case",
            "Trained under head cake decorator beginning in Mar 2019",
            "Alternated between cake decorating and shift leading",
            "Led shifts of three to six people",
            "Performed both opening and closing duties",
            "Provided extensive customer service and care",
            "Fielded Complaints from customers and provided solutions",
            "Interviewed prospective employees",
        ],
    },
];

function Experience() {
    return (
        <Slide triggerOnce={true} duration={1500}>
            <Box className="boxes" id="experience" align="center">
                <Box className="insideBox" align="center">
                    {/* <Tooltip title="Resume.pdf" arrow> */}
                    <Typography className="header" variant="h3">
                        /experience
                    </Typography>
                    {/* </Tooltip> */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ul
                            style={{
                                padding: 0,
                                width: "80%",
                                maxWidth: 775,
                                textAlign: "left",
                            }}
                        >
                            {jobs.map((each) => (
                                <WorkHist key={each.title} job={each} />
                            ))}
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Slide>
    );
}

export default Experience;
