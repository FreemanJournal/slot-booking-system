import {  TextField } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React, { useEffect, useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import styled from "@emotion/styled";
// import moment from "moment";
export default function BookingSystems() {
    const [data, setData] = useState<[]>([]);
  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  // const formatter = new Intl.DateTimeFormat("en")

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const Item = styled(Typography)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));

  useEffect(()=>{
    fetch("data/previousSlot.json")
    .then((result)=> result.json())
    .then(data => setData(data))
  },[])

  console.log('data',data);

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
            {data?.map((_:any, index:any) => (
              <Grid xs={2} sm={4} md={4} key={index}>
                <Item>
                    {/* {moment.duration(_.start.diff(_.end))} */}
                </Item>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Stack>
    </Box>
  );
}
