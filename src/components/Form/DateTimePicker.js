import React, { useState, useEffect } from 'react';
import moment from 'moment';
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
import { convertDateTimeToTimestamp, convertTimestampToGeneralDateTime } from '../../utils/helpers/convert';


const timestamp = generateTimestamp();

const DateTimePicker = (props) => {
    const { scheduledDate, setPublishDateTime, setPublishDate } = props;

    const [dateDefaultSet, setDateDefaultSet] = useState(false);
    const [timeDefaultSet, setTimeDefaultSet] = useState(false);
    const [dateValue, setDateValue] = useState(timestamp);
    const [timeValue, setTimeValue] = useState(timestamp);

    const savePublishDate = () => setPublishDate(convertDateTimeToTimestamp(dateValue, timeValue));

    const handleChangeDate = (date) => setDateValue(date);

    const handleChangeTime = (time) => setTimeValue(time);

    const handleAcceptDatePicker = () => {
        setDateDefaultSet(true);
        setPublishDateTime(scheduledDate && dateDefaultSet === false ? convertTimestampToGeneralDateTime(scheduledDate) : convertTimestampToGeneralDateTime(dateValue, timeValue));
    }

    const handleCloseDatePicker = () => {
        setDateDefaultSet(true);
        setDateValue(dateValue);
        setPublishDateTime(scheduledDate && dateDefaultSet === false ? convertTimestampToGeneralDateTime(scheduledDate) : convertTimestampToGeneralDateTime(dateValue, timeValue));
    }

    const handleAcceptTimePicker = () => {
        setTimeDefaultSet(true);
        setPublishDateTime(scheduledDate && dateDefaultSet === false ? convertTimestampToGeneralDateTime(scheduledDate) : convertTimestampToGeneralDateTime(dateValue, timeValue));
    }

    const handleCloseTimePicker = () => {
        setTimeDefaultSet(true);
        setPublishDateTime(scheduledDate && dateDefaultSet === false ? convertTimestampToGeneralDateTime(scheduledDate) : convertTimestampToGeneralDateTime(dateValue, timeValue));
    }

    useEffect(() => {
        setPublishDateTime(scheduledDate && dateDefaultSet === false ? convertTimestampToGeneralDateTime(scheduledDate) : convertTimestampToGeneralDateTime(dateValue, timeValue));
        savePublishDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateValue, timeValue, scheduledDate]);

    return <LocalizationProvider dateAdapter={DateAdapter}>
                <Stack spacing={3}>
                    <MobileDatePicker 
                        label="Date"
                        inputFormat="MM/DD/YYYY"
                        value={scheduledDate && dateDefaultSet === false ? new Date(scheduledDate) : dateValue}
                        onChange={handleChangeDate}
                        minDate={timestamp}
                        onAccept={handleAcceptDatePicker}
                        onClose={handleCloseDatePicker}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <MobileTimePicker
                        label="Time"
                        format="HH:mm A"
                        value={scheduledDate && timeDefaultSet === false ? new Date(scheduledDate) : timeValue}
                        onChange={handleChangeTime}
                        onAccept={handleAcceptTimePicker}
                        onClose={handleCloseTimePicker}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>;
}

export default DateTimePicker;