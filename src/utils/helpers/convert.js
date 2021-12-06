import moment from "moment";

/** STRING CONVERSIONS */
export const capitalizeWord = (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();

/** DATE-TIME CONVERSIONS */
export const convertTimestampToDateTime = (unixTimestamp) => moment(unixTimestamp).format('llll');

export const convertTimestampToDate = (unixTimestamp) => moment(unixTimestamp).format('MM/DD/YYYY');

export const convertTimestampToTime = (unixTimestamp) => moment(unixTimestamp).format('hh:mm A');

export const convertTimestampFromNow = (unixTimestamp) => moment(unixTimestamp).fromNow();

export const convertTimestampToGeneralDateTime = (unixTimestamp) => moment(unixTimestamp).format('MMMM D, YYYY hh:mm A');

/** UNIX CONVERSIONS */
export const convertDateTimeToTimestamp = (date, time) => moment(`${date.format('MM/DD/YYYY')} ${time.format('hh:mm A')}`);