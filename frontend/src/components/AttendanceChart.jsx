import { PieChart } from "@mui/x-charts";
import { Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
function AttandanceChart({ totalClassCount, attendedCount }) {
    const attendancePercentage = (attendedCount / totalClassCount) * 100;
    return <>
        <Stack
            direction={{ sm: 'column' }}
            spacing={{ xs: 2 }}
            alignItems={"center"}>
            <PieChart
                series={[
                    {
                        data: [
                            { value: totalClassCount - attendedCount },
                            { value: attendedCount },
                        ],
                    },
                ]}
                height={400}
            />
            <Typography variant="body1">Attendance Percentage: {attendancePercentage.toFixed(2)}%</Typography>
        </Stack>
    </>
}

export default AttandanceChart;