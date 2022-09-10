import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import moment from "moment";
import React, { useEffect, useState } from "react";
export default function BookingSystem() {
    const [data, setData] = useState([]);
  const [value, setValue] = React.useState(
    new Date("2014-08-18T21:11:54")
  );


  const handleChange = (newValue) => {
    setValue(newValue);
  };


  useEffect(()=>{
    fetch("data/previousSlot.json")
    .then((result)=> result.json())
    .then(data => setData(data))
  },[])

function timeFormatter(a,b){
  let now = moment(a); //todays date
  let end = moment(b); // another date
  let duration = moment.duration(now.diff(end));
  return  duration.asMinutes()
}
  return (
    <Box
      className="homeContainer"
      maxWidth="md"
      sx={{ margin: "5em", mx: "auto" }}
    >
      <Typography variant="h6" fontWeight={"bold"}>
        Select Date & Duration
      </Typography>

      <Stack direction={"row"} gap="3em">
        <Paper elevation={2} sx={{ mt: "5em", p: "3em" }}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Stack spacing={3} direction="row">
              <DesktopDatePicker
                label="Select Date"
                inputFormat="DD/MM/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                ampmInClock
                views={["minutes"]}
                inputFormat="mm"
                mask="__"
                label="Duration"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </Paper>
        <Paper elevation={2} sx={{ mt: "5em", p: "3em" }}>
          <Typography variant="h6">Available time slots</Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            mt="1em"
          >
            {data?.map((_,index) => (
              <Grid xs={2} sm={4} md={4} key={index}>
                <div>
                    {timeFormatter(_.start,_.end)}
                </div>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Stack>
    </Box>
  );
}
