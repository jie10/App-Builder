import React, { useState, useEffect } from 'react';

import {
    Stack,
    TextField
} from '@mui/material';

import {
    LocalizationProvider,
    MobileTimePicker  ,
    MobileDatePicker 
} from '@mui/lab';

import DateAdapter from '@mui/lab/AdapterMoment';

import { generateTimestamp } from '../../utils/helpers/generate';
import { convertDateTimeToTimestamp } from '../../utils/helpers/convert';


const timestamp = generateTimestamp();

const DateTimePicker = (props) => {
    const { setPublishDate } = props;

    const [dateValue, setDateValue] = useState(timestamp);
    const [timeValue, setTimeValue] = useState(timestamp);

    const savePublishDate = () => setPublishDate(convertDateTimeToTimestamp(dateValue, timeValue));

    const handleChangeDate = (date) => setDateValue(date);
    const handleChangeTime = (time) => setTimeValue(time);

    useEffect(() => {
        savePublishDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue, timeValue]);

    return <LocalizationProvider dateAdapter={DateAdapter}>
                <Stack spacing={3}>
                    <MobileDatePicker 
                        label="Date"
                        inputFormat="MM/DD/YYYY"
                        value={dateValue}
                        onChange={handleChangeDate}
                        minDate={timestamp}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <MobileTimePicker
                        label="Time"
                        format="HH:mm A"
                        value={timeValue}
                        onChange={handleChangeTime}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>;
}

export default DateTimePicker;