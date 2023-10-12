import { Container, Stack } from "@mui/material";
import { Grid, Button } from "@mui/material";
import Navbar from "components/Navbar";
import AttendanceChart from "components/AttendanceChart";

function attendanceDashboard() {
    return <>
        <Navbar />
        <Container>
            <Grid container minHeight={"100vh"} alignItems={"center"} justifyContent={"center"}>
                <Grid item xs={12} md={6} >
                    <AttendanceChart totalClassCount={70} attendedCount={15} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack
                        direction={{ sm: 'column' }}
                        spacing={{ xs: 2 }}
                        alignItems={"center"}>
                        <Button sx={{ width: "20rem" }} variant="contained">
                            Assignments
                        </Button>
                        <Button sx={{ width: "20rem" }} variant="contained">
                            Exam Sheets
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    </>
}


export default attendanceDashboard;