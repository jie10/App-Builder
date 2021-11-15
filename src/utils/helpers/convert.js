/** STRING CONVERSIONS */
export const capitalizeWord = (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();

/** DATE-TIME CONVERSIONS */
export const convertTimestampToDateTime = (unixTimestamp) => new Date(unixTimestamp);

export const convertTimestampFromNow = (unixTimestamp) => {
    let setDate = convertTimestampToDateTime(unixTimestamp);
    let nowTimeStamp = new Date();

    let years = Math.abs(nowTimeStamp.getFullYear() - setDate.getFullYear());
    let months = Math.abs(nowTimeStamp.getMonth() - setDate.getMonth());
    let days = Math.abs(nowTimeStamp.getDay() - setDate.getDay());
    let hours = Math.abs(nowTimeStamp.getHours() - setDate.getHours());
    let minutes = Math.abs(nowTimeStamp.getMinutes() - setDate.getMinutes());
    let seconds = Math.abs(nowTimeStamp.getSeconds() - setDate.getSeconds());

    if (years > 0) {
        return `${years > 1 ? `${years} years` : "A year"} ago`;
    } else if (months > 0) {
        return `${months > 1 ? `${months} months` : "A month"} ago`;
    } else if (days > 0) {
        return `${days > 1 ? `${days} days` : "A day"} ago`;
    } else if (hours > 0) {
        return `${hours > 1 ? `${hours} hours` : "An hour"} ago`;
    } else if (minutes > 0) {
        return `${minutes > 1 ? `${minutes} minutes` : "A minute"} ago`;
    } else if (seconds > 0) {
        return "A few seconds ago";
    } else {
        return "Now";
    }
}