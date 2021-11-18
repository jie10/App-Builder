const moment = require('moment');

/** STRING CONVERSIONS */
export const capitalizeWord = (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();

/** DATE-TIME CONVERSIONS */
export const convertTimestampToDateTime = (unixTimestamp) => moment().format('llll');

export const convertTimestampFromNow = (unixTimestamp) => moment(unixTimestamp).fromNow();