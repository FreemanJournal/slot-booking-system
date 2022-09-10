import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
export default function BookingSystem() {
  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <Box className="homeContainer" maxWidth="md" sx={{ margin: "5em",mx:"auto" }}>
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
      </Stack>
    </Box>
  );
}
