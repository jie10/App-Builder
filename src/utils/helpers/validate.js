import validator from 'validator';

export const correctURL = (url) => url ? validator.isURL(url) : true;